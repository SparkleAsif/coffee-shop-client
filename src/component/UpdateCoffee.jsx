import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const coffee = useLoaderData(); // Load coffee data from route loader
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = event => {
    event.preventDefault();
    const form = event.target;

    const updatedCoffee = {
      name: form.name.value,
      quantity: form.quantity.value,
      supplier: form.supplier.value,
      taste: form.taste.value,
      category: form.category.value,
      details: form.details.value,
      photo: form.photo.value,
    };

    // Send update request to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl my-10">Update Coffee</h1>

      <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[70%] mx-auto">
        {/* Form fields similar to AddCoffee with prefilled values */}
        <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered" />
        <input type="number" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered" />
        <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered" />
        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered" />
        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered" />
        <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered" />
        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered" />
        <button type="submit" className="btn btn-primary">Update Coffee</button>
      </form>
    </div>
  );
};

export default UpdateCoffee;

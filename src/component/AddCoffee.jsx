import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const taste = form.taste.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const category = form.category.value;
        const supplier = form.supplier.value;

        const newCoffee = { name, quantity, taste, photo, details, category, supplier };
        console.log(newCoffee);

        //send data to the server

        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'

            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then (data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Successful!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }

        })
    }

    return (
        <div>
            <h1 className="text-center text-4xl my-10 border-b-2 p-5">Add Coffee</h1>

            {/* Attach the onSubmit event to the form */}
            <form onSubmit={handleAddCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[70%] mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter coffee name"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input
                        type="number"
                        name="quantity" 
                        placeholder="Enter coffee quantity"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <input
                        type="text"
                        name="supplier"
                        placeholder="Enter coffee supplier"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <input
                        type="text"
                        name="taste"
                        placeholder="Enter coffee taste"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input
                        type="text"
                        name="category"
                        placeholder="Enter coffee category"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <input
                        type="text"
                        name="details"
                        placeholder="Enter coffee details"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control md:col-span-2">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="text"
                        name="photo"
                        placeholder="Enter photo URL"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="md:col-span-2">
                    <button type="submit" className="btn btn-primary hover:bg-white border-2 w-full">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;

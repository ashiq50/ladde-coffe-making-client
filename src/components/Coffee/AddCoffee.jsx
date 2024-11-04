
import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {
     const handleAddCoffee = event =>{
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const supplier = form.supplier.value;
          const category = form.category.value;
          const taste = form.taste.value;
          const chef = form.chef.value;
          const details = form.details.value;
          const photo = form.photo.value;
          const newCoffee = {name, supplier, category, taste, chef, details, photo}
          console.log(newCoffee)
          fetch('http://localhost:5000/coffee',{
               method: "POST",
               headers:{
                    "content-type": "application/json"
               },
               body: JSON.stringify(newCoffee)
          })
          .then(res => res.json())
          .then(data =>{
               console.log(data)
               if(data.insertedId){
                    Swal.fire({
                         title: 'Success!',
                         text: 'Coffee Added Successfully',
                         icon: 'success',
                         confirmButtonText: 'Added'
                       })
                       
               }
          })

     }
  return (
    <div className="bg-[#F4F3F0] md:p-24 p-4">
      <h3 className="text-3xl font-bold text-center mb-6">Add Coffee</h3>
      <form onSubmit={handleAddCoffee}>
        <div className="md:flex gap-6">
          {/* Left Column */}
          <div className="md:w-1/2 space-y-4">
            {/* Coffee Name */}
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Coffee Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Supplier */}
            <div className="form-control">
              <label className="label" htmlFor="supplier">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                id="supplier"
                name="supplier"
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label" htmlFor="category">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="Category Name"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 space-y-4">
            {/* Taste */}
            <div className="form-control">
              <label className="label" htmlFor="taste">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                id="taste"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </div>

            {/* Chef */}
            <div className="form-control">
              <label className="label" htmlFor="chef">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                id="chef"
                name="chef"
                placeholder="Chef Name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Details */}
            <div className="form-control">
              <label className="label" htmlFor="details">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                id="details"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>

        {/* Photo URL */}
        <div className="form-control mt-6">
          <label className="label" htmlFor="photo">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-secondary mt-6 w-full">
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;


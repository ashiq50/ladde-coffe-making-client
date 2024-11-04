import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const {_id, name, supplier, category, taste, chef, details, photo } = coffee;
  const handleDelete = _id =>{
     console.log(_id)
     Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            
          fetch(`http://localhost:5000/coffee/${_id}`,{
               method: "DELETE"
          })
          .then(res => res.json())
          .then(data =>{
               console.log(data)
               if(data.deletedCount > 0){
                    Swal.fire({
                         title: "Deleted!",
                         text: "Your Coffee has been deleted.",
                         icon: "success"
                       });
                       const remaining = coffees.filter(cof =>cof._id !== _id)
                       setCoffees(remaining)
               }
          })
          }
          console.log("delete confirmed")
        });
  }
  return (
    <div className="card card-side bg-base-100 shadow-xl p-4">
     {/* image */}
      
      <figure>
        <img className="w-[100%]" src={photo} alt="Movie" />
      </figure>
      
      {/* description */}
     
      <div className="flex justify-around w-full pr-8 items-center">
        <div className="space-y-8 h-full">
          <h2>{name}</h2>
          <p>{chef}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions">
          <div className="join join-vertical space-y-3">
            <button className="btn">View</button>
            <Link to={`updateCoffee/${_id}`}>
            <button className="btn">Edit</button>
            </Link>
            <button onClick={()=>handleDelete(_id)} className="btn bg-red-300">X</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CoffeeCard;

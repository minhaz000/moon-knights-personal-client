import React from "react";
import { BsArrowRight, } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({flights}) => {
    const {Hero_URL,status,price,location,flight_name} = flights;
    console.log( flights)
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      
      <div className="card-body">
      <figure className="rounded">
        <img src={Hero_URL} alt="Shoes" />
      </figure>
        <h2 className="card-title">{flight_name}</h2>
        <div className="card-actions ">
          <p className="text-orange-600 text-bold">Price : {price}</p>
        <div>
          
          {/* <Link to={`checkout/${_id}`}> */}
          <BsArrowRight className="text-orange-600 text-bold"/>
          {/* </Link> */}
          </div>
        </div>
        <p> {location}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

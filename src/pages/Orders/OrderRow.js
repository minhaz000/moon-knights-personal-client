import React, { useEffect, useState } from "react";

const OrderRow = ({ order,handleDelete }) => {
    const {_id,serviceName,price,customer,email,phone,service}=order;
    const [orderService, setOrderService]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res=>res.json())
        .then(data => setOrderService(data));
    },[service]);

      
    return (
    <tr>
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-ghost">X</button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
            {
                orderService?.img &&
              <img
                src={orderService.img}
                alt="Avatar Tailwind CSS Component"
              />
            }
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {customer}
        <br />
        <span className="badge badge-ghost badge-sm">
          {price}
        </span>
      </td>
      <td>{email}</td>
    </tr>
  );
};

export default OrderRow;

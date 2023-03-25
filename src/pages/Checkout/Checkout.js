import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const {_id,title,price} =useLoaderData()
    const {user} = useContext(AuthContext);


    const handlePlaceOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.fname.value} ${form.lname.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service : _id,
            serviceName : title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }else{

        // }
        fetch('http://localhost:5000/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data=> {
            if(data.acknowledged){
                alert('Order placed successfully')
                form.reset();
            }
        })
        .catch(er => console.error(er));

    }
    return (
        <div className="my-20">
            <form onSubmit={handlePlaceOrder}>
            <h1 className="text-4xl">{title}</h1>
            <h4 className="text-3xl">Price : {price}</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                <input name="fname" type="text" placeholder="First Name" className="input input-bordered w-full" />
                <input name="lname" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full" required />
                <input name="email" type="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered w-full my-5" placeholder="Your Message"></textarea>
                <input type="submit" value="Place Your Order" className=" btn input-bordered"/>
            </form>
        </div>
    );
};

export default Checkout;
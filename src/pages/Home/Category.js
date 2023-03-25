import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BiLocationPlus } from "react-icons/bi";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
const CategoryIcon = () => {
    const {HOST} = useContext(AuthContext)
    const [categories,SetCategories] = useState([])

useEffect(()=>{
    const url = `${HOST}/api/categories`
    axios.get(url).then( res=>{
        SetCategories(res.data.data)
        
    })

    
},[])
    return (<>
            <h1 className=' text-center capitalize text-2xl mt-10'> select your airlines </h1>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-10 mx-5">
        
       { categories.map((item,i)=>{
        return ( <Link to={`/flights/${item._id}`}> 
        <div key={i} className="card w-full bg-base-100 shadow-xl cursor-pointer">
         <figure> 
            <img className='h-[100px]' src={item.img} alt={item.name} />
        </figure>
             <div className="card-body">
                 <h2 className=" text-center card-title">{item.name}</h2>
             </div>
         </div>
         </Link> )
          }) 
       } 
           
           
           
            
            </div>
    </>);
};

export default CategoryIcon;
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [flights , setFlights] = useState([])
    const {ID} = useParams()
    const {HOST} = useContext(AuthContext)

useEffect(()=>{
    
    // const url = `${HOST}/api/category/${ID}`
    const url = `${HOST}/api/flights`
    console.log( url)
   axios.get(url).then( res=>{
    setFlights( res.data.data)
   })
},[]);
    return (
        <div className="py-10">
            <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">Service</p>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="lg:w-2/5 md:w-2/5 w-full mx-auto lg:px-0 md:px-0 px-5 my-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    flights.map((flights,i)=> <ServiceCard key={i} flights={flights}></ServiceCard>)
                    
                }
                
            </div>
        </div>
    );
};

export default Service;
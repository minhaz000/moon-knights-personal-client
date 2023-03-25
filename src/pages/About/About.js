import React from "react";
import person from '../../assets/images/services/About-Banner-3-compressed.jpg';
import parts from '../../assets/images/services/Random-Flight.webp';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 py-10 ">
      <div className="hero-content flex-col lg:flex-row justify-center">
      <div className="w-1/2 relative">
        <img
          src={person}
          className="w-4/5 rounded-lg shadow-2xl "
        alt=""/>
        <img
          src={parts}
          className=" absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl"
        alt=""/>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full pl-5 lg:pl-0">
        <p className="text-2xl font-bold text-orange-600">About us</p>
          <h1 className="text-5xl font-bold my-6">
          We are qualified <br/>
           & of experience <br/>
            in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="py-6">
          At Autofixed auto services, we believe that all cars these days require specialized services. 
          </p>
          <button className="btn btn-warning">
            <Link to="/service">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

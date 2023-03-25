import React from 'react';

const Discount = () => {
    return (
        <div className="py-20 bgImage">
            <div className="text-center ">
                <h1 className="text-5xl text-white font-bold">$25 OFF ANY REPAIR OR SERVICE</h1>
                <div className="divider w-1/12 h-1 mx-auto bg-orange-500"></div> 
                <p className=" text-xl lg:w-1/2 md:w-1/2 w-full mx-auto lg:px-0 md:px-0 px-5 my-6">$25 off repairs totaling $150 or more in labor expenses. One coupon per visit. Not valid with other offer or special. Coupon must be presented. </p>
            </div>
        </div>
    );
};

export default Discount;
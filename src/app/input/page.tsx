import React from 'react'
import Link from 'next/link';
import Header from '@/app/Header/header';




const page = () => {
  return (
    <div>
      <Header></Header>
        <div>
    <div className="mma">
        <p className="mma1">Enter Your Details</p>
        <input className="mma2" type="Name" placeholder="   Enter Your Name"></input> 
        <input className="mma3" type="email" placeholder="   Enter Your Email"></input>
        <input className="mma4" type="Card" placeholder="   Card Number"></input>
        <input  className="mma5" type="address" placeholder= "   Address"></input>
        <Link href="thanks">
        <button className="mma6">Place Your Order</button>
        </Link>
    </div>
    </div>
    </div>
  );
};

export default page
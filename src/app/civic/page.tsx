import React from 'react'

import Link from 'next/link';
import Header from '../Header/header';


const page = () => {
  return (
    <div>
      
      <Header></Header>
    <div className="lolo1">
        <h2 className="lolo2">Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs</h2>
        <div className="main2"><img className='lolo'
                src="https://pak-wheels-next-app.vercel.app/_next/image?url=%2FAlto.png&w=750&q=75"></img>
        </div>
        <div className="main3">
            <button className="main4">Book a test Drive</button>
            <button className="main5">Request Bank Finance</button>
            <button className="main6">Visit Place</button>
            <button className="main7">Car Inspection</button>

        </div>
        <div className="main8">
            <p className="main9">Vehicle Description</p>
        </div>
        <div className="main10">
            <p className="main11">Number of Doors :</p><span className="main12">4</span>
            <p className="main11">Engine :</p><span className="main12">1800 CC</span>
            <p className="main11">Condition :</p>:<span className="main12"> 8.5 / 10</span>
            <p className="main11">Driven :</p><span className="main12">9000 KM</span>
            <p className="main11">Suspension :</p><span className="main12"> Type Soft Suspension</span>
        </div>
        <div className="main13">
            <p className="main14">Avg :</p><span className="main15">13 KM per ltr</span>
            <p className="main14">Tranmission :</p><span className="main15">Automatic</span>
            <p className="main14">Fuel Type :</p><span className="main15">High Octane</span>
        </div>
        <div className="main16">
            <p className="main17">PKR 30,50,000</p>
        </div>
        <div className="main18">
            <Link href="input">
            <button className="main19">Make Payment</button>
            </Link>
        </div>
    </div>

    </div>
  );
};

export default page
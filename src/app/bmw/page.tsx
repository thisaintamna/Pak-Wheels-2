import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <div>
       <div className="head">
        <div className="flex1">
            <div className="box1"><img className="oppop1" height="25px" src="https://pak-wheels-next-app.vercel.app/_next/image?url=%2Fphone.png&w=48&q=75"></img>
                <p>Download App via SMS</p>
            </div>
            <div className="box3">
                <p>Sign In | Sign Up</p>
            </div>
        </div>
        <div className="flex2"></div>
        <div className="flex3">

            <ul className="box2">
                <div><img className="oppop" height="40px"
                        src="https://pak-wheels-next-app.vercel.app/_next/image?url=%2Flogo.png&w=384&q=75">
                          </img></div>
                <li className="play3">New Cars</li>
                <li className="play2">Used Cars</li>
                <li className="play2">Bikes</li>
                <li className="play2">Auto Store</li>
                <li className="play2">Videos</li>
                <li className="play2">Forums</li>
                <li className="play2">More</li>
                <li className="play2"><button className="play1">Post an Ad</button></li>
            </ul>
        </div>
    </div>
     <div className="lolo1">
        <h2 className="lolo2">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h2>
        <div className="main2"><img className='lolo' height="260px"
                src="https://pak-wheels-next-app.vercel.app/_next/image?url=%2FCorolla.jpg&w=750&q=75"></img>
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
            <p className="main17">PKR 65,50,000</p>
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
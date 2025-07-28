import React from 'react'

const Header = () => {
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
    </div>
  );
};
export default Header

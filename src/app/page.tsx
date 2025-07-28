import Link from "next/link";
import Header from "./Header/header";



export default function Home() {
  return (
   <div>
    <Header></Header>
    <div className="main">

        <div className="op1"></div>
        <p className="op2">Sell Your Car on PakWheels and Get the Best Price</p>
        <div className="op3"></div>


        <div className="main1">
            <h2 className="acha1">Post your Ad on PakWheels</h2>
            <p className="acha2">Post your Ad for Free in 3 Easy Steps </p>
            <p className="acha6">✔</p>
           
            <p className="acha3">Get Genuine offers from Verified Buyers </p>
            <p className="acha6">✔</p>
         
            <p className="acha3">Sell your car Fast at the Best Price </p>
            <p className="acha6">✔</p>
           

            <button className="acha">Post Your Ad</button>
            <div className="man">
                <div className="man1"></div>
                <p className="man3">OR</p>
                <div className="man2"></div>
            </div>

        </div>
        <div className="logo">

            <h2 className="logo1">Try PakWheels Sell It For Me</h2>
            <p className="logo2">Dedicated Sales Expert to Sell your Car</p>
            <p className="logo4">✔</p>
            
            <p className="logo5">We Bargain for you and share the Best Offer </p>
            <p className="logo4">✔</p>
           
            <p className="logo3">We ensure Safe & Secure Transaction</p>
            <p className="logo4">✔</p>
            
            <button className="logo6">Register Your Car</button>
        </div>
    </div>
    
    <div className="kala">Featured New Cars</div>
    
    <p className="kala1">Popular</p>
    <p className="kala2">Upcoming</p>
    <p className="kala3">Newly Launched</p>
    

    <div className="kam">
         <Link href="bmw">
        <div className="kam2">
           
            <img className="opop" height="160px" src="https://pak-wheels-next-app.vercel.app/_next/image?url=%2FCorolla.jpg&w=750&q=75"></img> 
            
            <h2 className="kam4">Toyota Corolla</h2>
            <h3 className="kam5">PKR 65,50,000</h3>
        </div></Link>
        <Link href="civic">
        <div className="kam1">
            
            <img className="opop" height="160px" src="https://pak-wheels-next-app.vercel.app/_next/image?url=%2FAlto.png&w=750&q=75"></img>
            <h2 className="kam4">Suzuki Alto</h2>
            <h3 className="kam5">PKR 30,50,000</h3>
        </div></Link>
        <Link href="corolla">
        <div className="kam1">
            
            <img className="opop" height="160px" src="https://pak-wheels-next-app.vercel.app/_next/image?url=%2FSwift.jpg&w=750&q=75"></img>
            <h2 className="kam4">Suzuki Swift</h2>
            <h3 className="kam5">PKR 45,50,000</h3>
        </div></Link>
        <Link href="fortuner">
        <div className="kam2">
            
            <img className="opop" height="160px" src="https://pak-wheels-next-app.vercel.app/_next/image?url=%2FCivic.jpg&w=750&q=75"></img>
            <h2 className="kam4">Honda Civic</h2>
            <h3 className="kam5">PKR 70,50,000</h3>
        </div></Link>
    </div>
      
    </div>
    
  
  );
};




import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import barcode1 from "../assets/images/barcode1.png";
import barcode2 from "../assets/images/barcode2.png";

const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t overflow-x-hidden ">
      <div className="container mx-auto px-6 lg:flex md:flex-row  justify-between items-center">
       
      <div className="flex justify-center gap-6 mb-4">
          <div className="text-center ">
            <img src={barcode1} alt="QR iOS" className="h-20 mx-auto" />
            <a href="#" className="flex items-center gap-2 mt-2  border rounded-md px-2 py-2 text-black ">
              <FaApple size={20} />
              Get it on App Store
            </a>
          </div>
          <div className="text-center ">
            <img src={barcode2} alt="QR Android" className="h-20 mx-auto" />
            <a href="#" className="flex items-center gap-2 border rounded-md  mt-2 px-2 py-2 text-black ">
              <FaGooglePlay size={20} />
              Get it on Play Store
            </a>
          </div>
        </div>
        {/* App Store & Play Store */}
     
       <div> <div className="flex flex-wrap items-center gap-4 md:w-[120px] md:flex-wrap  lg:w-[380px] pl-11  md:text-center sm:text-center  text-black text-md mb-2">
          <a href="#" >Contact Us</a>
          <a href="#" >Terms of Service</a>
          <a href="#" >Privacy Policy</a> <br />
          <a href="#" >Shipping & Delivery</a>
          <a href="#" >Cancellation & Refunds</a>
        </div>

        {/* Copyright & Developer Credit */}
        <div className="flex flex-col gap-3 text-right md:text-center sm:text-center text-black pr-4 text-md">
          <p>© 2025 WEMartGlobal.in</p>
          <p>Developed by <a href="#" className="text-blue-500 ">Veramasa</a></p>
        </div></div>
        {/* Policies and Contact */}
       
      </div>
    </footer>
  );
};

export default Footer
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <footer className="">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm py-5">
              &copy; 2025 All rights reserved by Alok Kumar Jena
              </p>
  
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

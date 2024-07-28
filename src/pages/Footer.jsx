import React from "react";

const Footer = ({ openDialog }) => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-5 flex flex-col xs:flex-col-reverse justify-between items-center">
        <div className="order-2 xs:order-1 mt-4 xs:mt-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} KLIKMO. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0 xs:space-x-6 order-1 xs:order-2">
          <button
            onClick={() => openDialog("privacyPolicy")}
            className="hover:text-green-500 text-xs"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => openDialog("terms")}
            className="hover:text-green-500 text-xs"
          >
            Terms and Conditions
          </button>
          <button
            onClick={() => openDialog("donate")}
            className="hover:text-green-500 text-xs"
          >
            Buy me a Coffee
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

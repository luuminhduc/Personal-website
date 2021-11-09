import React from "react";

const Footer = ({ isLight }) => {
  return (
    <div
      className={`p-3 text-center ${
        isLight ? "bg-white text-gray-900" : "bg-gray-800 text-white"
      }`}
    >
      Made by Duc
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);


  const navLinks = [
    { name: "Gifts & Arts", path: "/giftsandarts" },
    { name: "Food Items", path: "/fooditems" },
    { name: "Fertilizers", path: "/fertilizers" },
    { name: "Beverages", path: "/beverages" },
    { name: "Beauty Care", path: "/beautycare" },
    { name: "Grocery Items", path: "/groceryitems" },
    { name: "Cowdung Products", path: "/cowdungproducts" },
    { name: "Sanitary Napkins", path: "/sanitarynapkins" },
    { name: "Clothing", path: "/clothing" },
    { name: "Ecofriendly Products", path: "/ecofriendlyproducts" },
    { name: "Brass Items", path: "/brassitems" },
    { name: "Household Items", path: "/householditems" },
    { name: "Books", path: "/books" },
    { name: "Machines", path: "/machines" },
    { name: "Jewellery", path: "/jewellery" },
    { name: "Furniture", path: "/furniture" },
    { name: "Home Furnishing", path: "/homefurnishing" },
    { name: "Ecofriendly Gifts", path: "/ecofriendlygifts" },
    { name: "Stationary", path: "/stationary" },
    { name: "Cleaning Liquid", path: "/cleaningliquid" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Header */}
      <div className="w-full h-fit p-4 flex justify-between items-center px-6 md:px-[5%]">
        {/* Logo */}
        <h1 className="text-rose-600 font-bold text-2xl md:text-3xl font-serif">
          APNAMART
        </h1>

        {/* Search Bar (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center">
          <select className="p-2 border border-blue-500 outline-none rounded-l-lg">
            <option value="">Choose Option</option>
           {
            navLinks.map((link, index) => (
              <option key={index} value={link.path}>
                {link.name}
              </option>
            ))
          }
          </select>
          <input
            placeholder="Search...."
            type="text"
            className="w-[250px] lg:w-[350px] outline-none border-blue-500 border p-2 rounded-r-lg"
          />
        </div>

        {/* Right Side - Login Button + Hamburger Menu */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Login
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`md:flex items-center justify-start gap-5 mt-2 p-2 overflow-auto no-scroll transition-all duration-300 ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`p-2 pr-3 h-8 flex items-center text-nowrap rounded-xl border border-transparent hover:border hover:border-blue-500 relative transition-all duration-200 ${
              location.pathname === link.path ? "text-blue-600 font-bold" : "text-gray-600"
            }`}
          >
            {link.name}
            <span className="absolute right-[-7px] top-1/2 h-5 border-r-2 border-black transform -translate-y-1/2"></span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

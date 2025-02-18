import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import hardh from "../Images/Group.png";

function CustomNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
    setMobileMenuOpen(false);
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/student/logout", {
        method: "POST",
        credentials: "include", // Ensures cookies are sent
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Redirect user to the login page
        navigate("/Userlogin");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="flex justify-between items-center px-20 py-10 bg-yellow-400 w-full">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={hardh} alt="Brand Logo" className="w-12 h-12" />
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 p-0">
          Brand<span className="text-blue-600">Name</span>
        </h1>
      </div>

      {/* Desktop School Name */}
      <div className="hidden lg:flex items-center space-x-2">
        <img src={hardh} alt="School Logo" className="w-11 h-11" />
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800">
          Gurukul High School, Ahmedabad
        </h2>
      </div>

      {/* Icons and Menu */}
      <div className="flex items-center space-x-4">
        <FaShoppingCart
          className="text-gray-900 text-3xl cursor-pointer"
          onClick={() => handleNavigation("/ShoppingCart")}
        />

        {/* User Dropdown */}
        <div className="relative hidden md:block">
          <FaUserCircle
            className="text-gray-900 text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg p-2 z-10">
              <p className="px-4 py-2 text-gray-900 font-medium underline decoration-orange-400">
                Welcome Sam!!
              </p>
              <ul className="text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleNavigation("/MyOrders")}>
                  My Orders
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleNavigation("/CustomerCare")}>
                  Customer Care
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleNavigation("/AccountDetail")}>
                  Account Details
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600 font-semibold"
                  onClick={handleLogout} // Call Logout function
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {mobileMenuOpen ? (
            <FaTimes className="text-gray-900 text-3xl cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
          ) : (
            <FaBars className="text-gray-900 text-3xl cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-yellow-400 shadow-md p-6 z-20 flex flex-col space-y-4">
          <FaTimes className="text-gray-900 text-3xl cursor-pointer self-end" onClick={() => setMobileMenuOpen(false)} />
          <h2 className="text-2xl font-semibold text-gray-800">Welcome Sam!!</h2>
          <ul className="text-gray-700 space-y-2">
            <li className="py-2 hover:bg-yellow-600 cursor-pointer" onClick={() => handleNavigation("/MyOrders")}>
              My Orders
            </li>
            <li className="py-2 hover:bg-yellow-600 cursor-pointer" onClick={() => handleNavigation("/CustomerCare")}>
              Customer Care
            </li>
            <li className="py-2 hover:bg-yellow-600 cursor-pointer" onClick={() => handleNavigation("/AccountDetail")}>
              Account Details
            </li>
            <li className="py-2 hover:bg-yellow-600 cursor-pointer text-red-600 font-semibold" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default CustomNavbar;

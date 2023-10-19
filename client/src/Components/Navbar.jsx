// Navbar.js
import React from "react";
import Product from "./Product";


function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <div className="col-span-4 md:col-span-1">
          <h3 className="text-xl font-semibold">Company</h3>
          <ul className="mt-4 space-y-2">
            <li>About</li>
            <li>Contact</li>
            <li>Products</li>
            <li>News</li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1">
          <h3 className="text-xl font-semibold">Products</h3>
          <ul className="mt-4 space-y-2">
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
            <li>Product 4</li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1">
          <h3 className="text-xl font-semibold">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li>Support</li>
            <li>Documentation</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <ul className="mt-4 space-y-2">
            <li>Twitter</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

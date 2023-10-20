// Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <div className="col-span-4 md:col-span-1">
          <h3 className="text-xl font-semibold"><a href="/">Company</a></h3>
          <ul className="mt-4 space-y-2">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>News</li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1">
          <h3 className="text-xl font-semibold"><a href="">Products</a></h3>
          <ul className="mt-4 space-y-2">
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
            <li>Product 4</li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1">
          <h3 className="text-xl font-semibold"><a href="">Resources</a></h3>
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
      <div className="mt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

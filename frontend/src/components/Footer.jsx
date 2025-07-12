import React from 'react';

const Footer = () => (
  <footer className="w-full bg-white border-t mt-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4 text-sm text-gray-500">
      <div className="mb-2 md:mb-0">© 2025 Qollab. All rights reserved.</div>
      <div className="flex gap-4">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;

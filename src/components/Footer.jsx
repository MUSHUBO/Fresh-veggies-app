import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t bg-gradient-to-bl from-green-50 to-green-100 border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Info */}
                <div>
                    <div className='flex items-center gap-2'>
                        <Image src={"/assets/Logo.png"} width={50} height={10} alt="Fresh Veggies Logo" />
                        <h2 className="text-2xl font-extrabold ">Fresh <span className='text-green-500'>Veggies</span></h2>
                    </div>
                    <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                        Eat fresh, stay healthy. We deliver farm-fresh vegetables straight to your home.
                    </p>
                </div>

                {/* Explore */}
                <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">Explore</h3>
                    <ul className="space-y-2 text-gray-900">
                        <li><a href="/" className="hover:text-green-600 transition">Home</a></li>
                        <li><a href="/products" className="hover:text-green-600 transition">Products</a></li>
                        <li><a href="/login" className="hover:text-green-600 transition">Login</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">Resources</h3>
                    <ul className="space-y-2 text-gray-800">
                        <li><a href="#" className="hover:text-green-600 transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-green-600 transition">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-green-600 transition">FAQ</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-3">Contact</h3>
                    <p className="text-sm text-gray-800">📧 support@freshveggies.com</p>
                    <p className="text-sm text-gray-800">📞 +880 1234-567890</p>
                    <div className="flex space-x-5 mt-4 text-xl text-green-600">
                        <a href="#" className="hover:text-green-800">🌐</a>
                        <a href="#" className="hover:text-green-800">📘</a>
                        <a href="#" className="hover:text-green-800">🐦</a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-green-600 text-center py-4 text-sm text-white">
                © {new Date().getFullYear()} Fresh Veggies — All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
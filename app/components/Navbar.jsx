"use client";

import { useState } from 'react';

const navItems = ['Home', 'About', 'Products', 'Claims', 'Contact'];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-[#1A1A1A] border-b border-[#C5A47E]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-[#C5A47E]">InsurePlus</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                                className="text-[#E5E5E5] hover:text-[#C5A47E] transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-[#E5E5E5]"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute w-full bg-[#1A1A1A] z-50">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                            className="block px-4 py-2 text-[#E5E5E5] hover:bg-[#2C3E50]"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
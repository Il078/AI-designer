import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { to: 'features', label: 'Features' },
        { to: 'how-it-works', label: 'How It Works' },
    ];

    return (
        <nav className="bg-white shadow-sm fixed w-full z-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-primary-600">AI Outfit Designer</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-64}
                                duration={500}
                                className="text-gray-600 hover:text-primary-600 cursor-pointer"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            to="waitlist"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition duration-300 cursor-pointer"
                        >
                            Join Waitlist
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary-600 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-64}
                                    duration={500}
                                    className="block px-3 py-2 text-gray-600 hover:text-primary-600 cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                to="waitlist"
                                spy={true}
                                smooth={true}
                                offset={-64}
                                duration={500}
                                className="block px-3 py-2 text-primary-600 font-medium cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                Join Waitlist
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar; 
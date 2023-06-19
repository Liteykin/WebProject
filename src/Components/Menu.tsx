import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Tasks from "../Pages/Tasks";
import Shop from "../Pages/Shop";
import Music from "../Pages/Music";
import PageNotFound from "../Pages/PageNotFound";
import { CartProvider } from './CartContext';
import { AiFillHome, AiFillShop, AiFillSound } from 'react-icons/ai';

interface MenuItem {
    name: string;
    path: string;
    icon: JSX.Element;
}

const Menu: React.FC = () => {
    const menuItems: MenuItem[] = [
        { name: "Tasks", path: "/tasks", icon: <AiFillHome /> },
        { name: "Shop", path: "/shop", icon: <AiFillShop /> },
        { name: "Music", path: "/music", icon: <AiFillSound /> },
    ];

    const [selected, setSelected] = useState<MenuItem>(menuItems[0]);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Router>
            <div className="flex h-screen text-white">
                <div
                    className={`bg-black p-4 fixed h-full flex flex-col justify-center transition-all duration-300 ${
                        menuOpen ? "w-64" : "w-16"
                    }`}
                >
                    <button
                        className="absolute top-4 left-4 text-white hover:text-gray-300 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <ul>
                        {menuItems.map((item) => (
                            <Link to={item.path} key={item.path}>
                                <li
                                    className={`p-4 my-2 text-center text-xl flex items-center justify-center transition-colors transition ease-in-out duration-400 ${
                                        selected.name === item.name ? "bg-gray-300/[0.4] rounded-xl" : "hover:bg-gray-300/[0.6] rounded-xl ease-in-out"
                                    }`}
                                    onClick={() => {
                                        setSelected(item);
                                        setMenuOpen(true);
                                    }}
                                >
                                    {item.icon}
                                    {menuOpen && item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className={`flex-grow bg-white text-black transition-all duration-300 ${menuOpen ? "pl-64" : "pl-16"}`}>
                    {menuOpen && (
                        <button
                            className="fixed top-4 left-4 text-gray-700 hover:text-gray-900 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    )}
                    <CartProvider>
                    <Routes>
                        <Route path="/" element={<Tasks />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                    </CartProvider>
                </div>
            </div>
        </Router>
    );
};

export default Menu;

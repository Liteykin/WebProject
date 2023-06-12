import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import Tasks from "../Pages/Tasks";
import Shop from "../Pages/Shop";
import Music from "../Pages/Music";

interface MenuItem {
    name: string;
    color: string;
    path: string;
}

const Menu: React.FC = () => {
    const menuItems: MenuItem[] = [
        { name: "Dashboard", color: "from-[#432371] to-[#faae7b]", path: "/dashboard" },
        { name: "Tasks", color: "from-[#42047e] to-[#07f49e]", path: "/tasks" },
        { name: "Shop", color: "from-[#1c1554] to-[#43c197]", path: "/shop" },
        { name: "Music", color: "from-[#330867] to-[#30cfd0]", path: "/music" },
    ];

    const [selected, setSelected] = useState<MenuItem>(menuItems[0]);

    return (
        <Router>
            <div className="flex h-screen text-white">
                <div className={`bg-gradient-to-b ${selected.color} w-64 p-4 fixed h-full flex flex-col justify-center`}>
                    <ul>
                        {menuItems.map((item) => (
                            <Link to={item.path} key={item.path}>
                                <li
                                    className={`p-4 my-2 text-center text-xl transition-colors transition ease-in-out duration-400 ${
                                        selected.name === item.name ? "bg-gray-300/[0.4] rounded-xl" : "hover:bg-gray-300/[0.6] rounded-xl ease-in-out"
                                    }`}
                                    onClick={() => setSelected(item)}
                                >
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="flex-grow bg-white text-black pl-64">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default Menu;

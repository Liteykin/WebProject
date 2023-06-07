import { createSignal } from "solid-js";
import {Router, Route, Routes, Link, A} from "@solidjs/router";
import Tasks from "../Pages/Tasks";
import Health from "../Pages/Health";
import Music from "../Pages/Music";
import Dashboard from "../Pages/Dashboard";

function Menu() {
    const menuItems = [
        { name: "Dashboard", color: "from-[#432371] to-[#faae7b]", path: "/dashboard"  },
        { name: "Tasks", color: "from-[#42047e] to-[#07f49e]", path: "/tasks" },
        { name: "Health", color: "from-[#1c1554] to-[#43c197]", path: "/health" },
        { name: "Music", color: "from-[#330867] to-[#30cfd0]", path: "/music" },
    ];

    const [selected, setSelected] = createSignal(menuItems[0]);

    return (
        <div class="flex h-screen text-white">
            <div class={`bg-gradient-to-b ${selected().color} w-64 p-4 fixed h-full flex flex-col justify-center`}>
                <ul>
                    {menuItems.map((item) => (
                        <Link href={item.path} >
                        <li
                            class={`p-4 my-2 text-center text-xl transition-colors transition ease-in-out duration-400 ${
                                selected().name === item.name ? "bg-gray-300/[0.4] rounded-xl" : "hover:bg-gray-300/[0.6] rounded-xl ease-in-out"
                            }`}
                            onClick={() => setSelected(item)}
                        >
                            {item.name}
                        </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div class="flex-grow bg-white text-black pl-64"> {/* Add padding-left to account for the width of the menu */}
                <Routes>
                    <Route path="/" component={Dashboard} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/tasks" component={Tasks} />
                    <Route path="/health" component={Health} />
                    <Route path="/music" component={Music} />
                </Routes>
            </div>
        </div>
    );
}

export default Menu;

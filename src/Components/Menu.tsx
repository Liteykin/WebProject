import { createSignal } from "solid-js";
import { Router, Route, Routes, Link } from "@solidjs/router";
import tasks from "../Pages/Tasks";
import health from "../Pages/Health";
import music from "../Pages/Music";
import dashboard from "../Pages/Dashboard";

function Dashboard() {
    return <h1 class="text-3xl p-10">Dashboard</h1>;
}

function Tasks() {
    return <h1 class="text-3xl p-10">Tasks</h1>;
}

function Health() {
    return <h1 class="text-3xl p-10">Health</h1>;
}

function Music() {
    return <h1 class="text-3xl p-10">Music</h1>;
}

const routes = [
    { path: "/", component: Dashboard },
    { path: "/tasks", component: Tasks },
    { path: "/health", component: Health },
    { path: "/music", component: Music },
];

function Menu() {
    const menuItems = [
        { name: "Dashboard", color: "from-[#432371] to-[#faae7b]", path: "/"  },
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
                        <li
                            class={`p-4 my-2 text-center text-xl transition-colors transition ease-in-out duration-400 ${
                                selected().name === item.name ? "bg-gray-300/[0.4] rounded-xl" : "hover:bg-gray-300/[0.6] rounded-xl ease-in-out"
                            }`}
                            onClick={() => setSelected(item)}
                        >
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div class="flex-grow bg-white text-black">
                <Routes>
                    {routes.map((route) => (
                        <Route path={route.path} element={<route.component />} />
                    ))}
                </Routes>
            </div>
        </div>
    );
}

export default Menu;

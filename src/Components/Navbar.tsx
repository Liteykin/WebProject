import type { Component } from 'solid-js';
import {NavLink} from "@solidjs/router";

const Navbar: Component = () => {
    return (
        <div class="w-[10vw] h-[100vh] text-4xl text-gray-600 body-font font-poppins fixed m-0 p-0">
            <div>
                <div class="m-auto items-center text-center pt-[30vh]">
                    <ul>
                        <li class="p-10">
                            <NavLink href="/" class="mr-8 p-2 hover:text-blue-500" end activeClass='text-white'>Home</NavLink>
                        </li>
                        <li class="p-10">
                            <NavLink href="/Health" class="mr-8 p-2 hover:text-blue-500" activeClass='text-white'>Health</NavLink>
                        </li>
                        <li class="p-10">
                            <NavLink href="/Dashboard" class="mr-8 p-2 hover:text-blue-500" activeClass='text-white'>Dashboard</NavLink>
                        </li>
                        <li class="p-10">
                            <NavLink href="/Tasks" class="mr-8 p-2 hover:text-blue-500" activeClass='text-white'>Tasks</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

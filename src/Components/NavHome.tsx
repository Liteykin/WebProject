import type { Component } from 'solid-js';
import {NavLink} from "@solidjs/router";

const NavHome: Component = () => {
    return (
        <div class="w-[10vw] h-[100vh] text-4xl text-gray-600 body-font font-poppins">
            <div>
                <div class="m-auto items-center text-center pt-[30vh]">
                    <ul>
                        <li class="p-10">
                            <NavLink href="/" class="mr-8 p-2 hover:text-blue-500" end activeClass='text-white'>Home</NavLink>
                        </li>
                        <li class="p-10">
                            <NavLink href="/Chat" class="mr-8 p-2 hover:text-blue-500" activeClass='text-white'>Chat</NavLink>
                        </li>
                        <li class="p-10">
                            <NavLink href="/About" class="mr-8 p-2 hover:text-blue-500" activeClass='text-white'>About</NavLink>
                        </li>
                        <li class="p-10">
                            <NavLink href="/Contact" class="mr-8 p-2 hover:text-blue-500" activeClass='text-white'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavHome;

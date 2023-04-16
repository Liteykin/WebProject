import type { Component } from 'solid-js';
import {NavLink} from "@solidjs/router";

const NavChat: Component = () => {
    return (
        <div class="w-[100%] mb-20 bg-black bg-cover h-[95vh]">
            <div>
                <div class="text-2xl inline-block mt-10 ml-10 w-[28%]">
                    <h1 class="text-gray-400 text-4xl">Project</h1>
                </div>
                <div class="text-2xl text-right mt-10 inline-block text-red-400 w-[69%]">
                    <NavLink href="/" class="mr-8 p-2 hover:text-blue-500" end activeClass='text-white'>Home</NavLink>
                    <NavLink href="/Chat" class="mr-8 p-2 hover:text-blue-500" activeClass='text-white'>Chat</NavLink>
                    <NavLink href="/About" class="mr-8 p-2 hover:text-blue-500" activeClass='text-white'>About</NavLink>
                    <NavLink href="/Contact" class="mr-8 p-2 hover:text-blue-500"
                             activeClass='text-white'>Contact</NavLink>
                </div>
            </div>
            <div>
                <div class="p-30">
                    <h1 class="text-6xl mt-20 text-white">Welcome to Project</h1>
                    <p class="text-white">This is very interesting</p>
                    <button class="bg-red-400 text-white text-2xl p-2 rounded-lg mt-10 ml-10">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default NavChat;
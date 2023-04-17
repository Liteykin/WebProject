import type { Component } from 'solid-js';
import {NavLink} from "@solidjs/router";

const Nav: Component = () => {
    return (
        <div class="w-[100%] bg-blue-300 h-[95vh]">
            <div class="fixed top-0 left-0 right-0 bg-white pb-10 mb-20">
                <div class="text-2xl inline-block ml-10 w-[28%]">
                    <h1 class="text-gray-400 text-4xl">Project</h1>
                </div>
                <div class="text-2xl text-right mt-10 inline-block text-black w-[69%] uppercase">
                    <NavLink href="/" class="mr-8 p-2 hover:text-blue-500" end activeClass="text-orange-400">Home</NavLink>
                    <NavLink href="/Chat" class="mr-8 p-2 hover:text-blue-500" activeClass="text-orange-400">Chat</NavLink>
                    <NavLink href="/About" class="mr-8 p-2 hover:text-blue-500" activeClass="text-orange-400">About</NavLink>
                    <NavLink href="/Contact" class="mr-8 p-2 hover:text-blue-500" activeClass="text-orange-400">Contact</NavLink>
                </div>
            </div>
            <div class="pt-20">
                <div class="p-30">
                    <h1 class="text-6xl mt-20 text-white">Welcome to Project</h1>
                    <p class="text-white">This is very interesting</p>
                    <button class="bg-red-400 text-white text-2xl p-2 rounded-lg mt-10 ml-10">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;

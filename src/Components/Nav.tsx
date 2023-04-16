import type { Component } from 'solid-js';
import {NavLink} from "@solidjs/router";

const Nav: Component = () => {
    return (
        <div class='w-[100%] mb-20'>
            <div class='text-2xl inline-block mt-10 ml-10 w-[28%]'>
                <h1>Project</h1>
            </div>
            <div class='text-2xl text-right mt-10 inline-block text-red-400 w-[70%]'>
                <NavLink href='/' class='mr-8 p-2 hover:text-blue-500' end activeClass='text-black'>Home</NavLink>
                <NavLink href='/Services' class='mr-8 p-2 hover:text-blue-500' activeClass='text-black'>Services</NavLink>
                <NavLink href='/About' class='mr-8 p-2 hover:text-blue-500' activeClass='text-black'>About</NavLink>
                <NavLink href='/Contact' class='mr-8 p-2 hover:text-blue-500' activeClass='text-black'>Contact</NavLink>
            </div>
        </div>
    );
};

export default Nav;

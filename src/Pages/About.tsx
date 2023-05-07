import type { Component } from 'solid-js';
import {lazy} from "solid-js";
const NavHome= lazy(() => import('../Components/NavHome'));
const About: Component = () => {
    return (
        <div class="m-0 p-0">
            <NavHome />
            <div  class="snap-start bg-cyan-200 w-screen h-screen flex items-center justify-center text-8xl">
                1
            </div>
        </div>
    );
};

export default About;

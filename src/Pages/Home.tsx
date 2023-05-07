import type { Component } from 'solid-js';
import {lazy} from "solid-js";
const NavHome= lazy(() => import('../Components/NavHome'));

const Home: Component = () => {
    return (
        <div class="m-0 p-0">
            <NavHome />
            <div  class="snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl scroll-auto">
                1
            </div>
        </div>
    );
};

export default Home;

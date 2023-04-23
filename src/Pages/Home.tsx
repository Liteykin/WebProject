import type { Component } from 'solid-js';
import {lazy} from "solid-js";
const NavHome= lazy(() => import('../Components/NavHome'));

const Home: Component = () => {
    return (
        <div class="h-[100vh] bg-black/[0.1]">
            <NavHome />
        </div>
    );
};

export default Home;

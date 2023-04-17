import type { Component } from 'solid-js';
import {lazy} from "solid-js";
import HomeBlock from "../Components/HomeBlock";
const NavHome= lazy(() => import('../Components/Nav'));

const Home: Component = () => {
    return (
        <div>
            <NavHome />
            <HomeBlock />
        </div>
    );
};

export default Home;

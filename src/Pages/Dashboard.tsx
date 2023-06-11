import type { Component } from 'solid-js';
import {lazy} from "solid-js";
import Calendar from "../Components/Calendar";
const Dashboard: Component = () => {
    return (
        <div class="m-0 p-0">
            <div  class="snap-start bg-cyan-200 h-screen flex">
                <Calendar />
            </div>
        </div>
    );
};

export default Dashboard;

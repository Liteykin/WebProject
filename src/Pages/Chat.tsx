import type { Component } from 'solid-js';
import {lazy} from "solid-js";
const NavChat= lazy(() => import('../Components/NavChat'));
const Chat: Component = () => {
    return (
        <div>
            <NavChat />
        </div>
    );
};

export default Chat;

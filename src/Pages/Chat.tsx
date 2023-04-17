import type { Component } from 'solid-js';
import {lazy} from "solid-js";
const NavHome= lazy(() => import('../Components/Nav'));
const Chat: Component = () => {
    return (
        <div>
            <NavHome />
        </div>
    );
};

export default Chat;

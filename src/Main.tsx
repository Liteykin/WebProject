import type { Component } from 'solid-js';
import { Routes, Route } from "@solidjs/router";
import {lazy} from "solid-js";
const Home= lazy(() => import('./pages/Home'));
const About= lazy(() => import('./pages/About'));
const Contact= lazy(() => import('./pages/Contact'));
const Chat= lazy(() => import('./Pages/Chat'));
const Main: Component = () => {
  return (
      <div class="snap-y snap-mandatory h-screen w-screen overflow-scroll m-0 p-0">
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Chat" element={<Chat />} />
          </Routes>
      </div>
  );
};

export default Main;

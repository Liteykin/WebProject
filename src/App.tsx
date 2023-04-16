import type { Component } from 'solid-js';
import { Routes, Route } from "@solidjs/router";
import {lazy} from "solid-js";
import Nav from "./Components/Nav";
const Home= lazy(() => import('./pages/Home'));
const About= lazy(() => import('./pages/About'));
const Contact= lazy(() => import('./pages/Contact'));
const Services= lazy(() => import('./pages/Services'));
const App: Component = () => {
  return (
      <div class="">
          <Nav />
          <Routes>
              <Route path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Services" component={Services} />
          </Routes>
      </div>
  );
};

export default App;

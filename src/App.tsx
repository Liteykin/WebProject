import { createSignal } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Router, Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";
import Menu from "./Components/Menu";

const Home = lazy(() => import('./Pages/Music'));
const About = lazy(() => import('./Pages/Dashboard'));
const Contact = lazy(() => import('./Pages/Tasks'));
const Chat = lazy(() => import('./Pages/Health'));

function App() {
  const [greetMsg, setGreetMsg] = createSignal("");
  const [name, setName] = createSignal("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name: name() }));
  }

  return (
      <div class="bg-white">
        <Router>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<About />} />
            <Route path="/tasks" element={<Contact />} />
            <Route path="/health" element={<Chat />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;

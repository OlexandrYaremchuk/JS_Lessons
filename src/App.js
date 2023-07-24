import "./App.css";
import "animate.css";
import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import M1L1 from "./Components/Lessons/M1L1";
import M1L2 from "./Components/Lessons/M1L2";
import GitHub from "./Components/Lessons/GitHub";
import Arrey from "./Components/Lessons/Arrey";
import Function from "./Components/Lessons/Function";
import Object from "./Components/Lessons/Object";
import SpreadRest from "./Components/Lessons/SpreadRest";
import CallBack from "./Components/Lessons/CallBack";
import ArrayMethod from "./Components/Lessons/ArrMethod";
import This from "./Components/Lessons/This";
import StartComponent from "./Components/start/StartComponent";

import {
  motion,
  stagger,
  useAnimate,
  useScroll,
  useSpring,
} from "framer-motion";
import { MenuToggle } from "./Components/Header/MenuToggle";
import Start from "./Components/start/Start";
import Prototipe from "./Components/Lessons/Prototipe";
import GitHubBtn from "./Components/GitHubBtn";
import DOM from "./Components/Lessons/DOM";
import Events from "./Components/Lessons/Events";
import EventsDelegation from "./Components/Lessons/EventsDelegation";
import Throttle from "./Components/Lessons/throttle_debounce";
import NpmModule from "./Components/Lessons/npm_module";
import WebStorage from "./Components/Lessons/web-storage";
import TimeDate from "./Components/Lessons/time_date";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            ".list",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.01), at: "-0.1" },
          ],
        ]
      : [
          [
            ".list",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.01, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

function App(props) {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  return (
    <BrowserRouter>
      <div className="App" ref={scope}>
        <Header />
        <Start />
        {/* <StartComponent /> */}
        <div className="Main">
          <div className="navbarBox">
            <Navbar />
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          </div>

          <div className="mainTextBox">
            <Routes>
              <Route path="Start" element={<Start />} />
              <Route path="GitHub" element={<GitHub />} />
              <Route path="M1L1" element={<M1L1 />} />
              <Route path="M1L2" element={<M1L2 />} />
              <Route path="Arrey" element={<Arrey />} />
              <Route path="Function" element={<Function />} />
              <Route path="Object" element={<Object />} />
              <Route path="SpreadRest" element={<SpreadRest />} />
              <Route path="CallBack" element={<CallBack />} />
              <Route path="ArrayMethod" element={<ArrayMethod />} />
              <Route path="This" element={<This />} />
              <Route path="Prototipe" element={<Prototipe />} />
              <Route path="DOM" element={<DOM />} />
              <Route path="Events" element={<Events />} />
              <Route path="Events-delegation" element={<EventsDelegation />} />
              <Route path="throttle" element={<Throttle />} />
              <Route path="npm-module" element={<NpmModule />} />
              <Route path="web-storage" element={<WebStorage />} />
              <Route path="time-date" element={<TimeDate />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

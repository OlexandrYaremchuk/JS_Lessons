import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "./startComponent.scss";
import { LessonPlane } from "./LessonPlan";
import { Link } from "react-router-dom";

const url = LessonPlane.map((plan) => plan.url);
console.log(url);
const CARDS = url.length;
const MAX_VISIBILITY = 3;

const StartComponent = () => {
  const [active, setActive] = useState(2);
  const count = CARDS;
  const [visible, setVisible] = useState(true);
  const handleLinkClick = () => {
    setVisible(false);
    console.log(visible);
  };
  return (
    <div>
      {visible && (
        <div className="app">
          <div className="carousel">
            {active > 0 && (
              <button
                className="nav left"
                onClick={() => setActive((i) => i - 1)}
              >
                <TiChevronLeftOutline />
              </button>
            )}
            {[...new Array(count)].map((_, i) => (
              <div
                key={i}
                className="card-container"
                style={{
                  "--active": i === active ? 1 : 0,
                  "--offset": (active - i) / 3,
                  "--direction": Math.sign(active - i),
                  "--abs-offset": Math.abs(active - i) / 3,
                  pointerevents: active === i ? "auto" : "none",
                  opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
                  display:
                    Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
                }}
              >
                <Link
                  className="link"
                  to={LessonPlane[i].url}
                  id="GitHub"
                  onClick={handleLinkClick}
                >
                  <div className="card">
                    <h2>{LessonPlane[i].title}</h2>
                    <img src={LessonPlane[i].image} alt="" />
                    <p>{LessonPlane[i].description}</p>
                  </div>
                </Link>
              </div>
            ))}
            {active < count - 1 && (
              <button
                className="nav right"
                onClick={() => setActive((i) => i + 1)}
              >
                <TiChevronRightOutline />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StartComponent;

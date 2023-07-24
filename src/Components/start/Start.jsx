import React, { useState, useEffect } from "react";
import StartComponent from "./StartComponent";
import "./startComponent.scss";
import { LessonPlane } from "./LessonPlan";
import { width } from "@mui/system";

const Start = (props) => {
  const [visible, setVisible] = useState(true);
  // // const [width, setWidth] = useState(100px);
  // const urls = LessonPlane.map((plan) => plan.url);
  // console.log(urls);
  // const path = window.location.pathname;

  // useEffect(() => {
  //   console.log(path);
  //   setVisible(urls.includes(path));
  //   console.log(visible);
  // }, [visible]);

  return (
    <div style={{ height: { visible } }}>
      {visible && (
        <div className="planBox">
          <StartComponent />
        </div>
      )}
    </div>
  );
};

export default Start;

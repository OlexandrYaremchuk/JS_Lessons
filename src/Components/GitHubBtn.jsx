import React from "react";
import { LessonPlane } from "../Components/start/LessonPlan";
import GitHub from "../img/gitHub.png";
import s from "./Lessons/GitBtn.module.css";

const GitHubBtn = (props) => {
  const { locationPathname } = props;
  console.log(locationPathname);
  let finUrl = "";
  const urlGit = LessonPlane.map((plan) => plan).filter((plan) =>
    plan.url === locationPathname
      ? (finUrl = plan.repUrl)
      : console.log("Не та тема")
  );
  console.log(finUrl);

  return (
    <div className="s.git">
      <a href={finUrl} target="_blank" title="Практика з уроку на GitHub">
        <img className={s.gitImg} src={GitHub} alt="" />
      </a>
    </div>
  );
};

export default GitHubBtn;

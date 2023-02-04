import React from "react";
import styled from "styled-components";

import "./styles.css";

export interface IProps {
  percentage: number | string;
  topic: string;
}

const forEach = (
  array: NodeListOf<Element>,
  callback: (value: Element, index: number) => void
) => {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
};

const CircularProgressBar: React.FC<IProps> = ({ percentage, topic }) => {
  // Bug: At the initial render it does it's work
  // Todo(Souvik): Have to Fix this transition problem due to useEffect
  React.useEffect(() => {
    const perimeter = -219.99078369140625;
    forEach(document.querySelectorAll(".progress"), (value) => {
      const percentString = value.getAttribute("data-progress");
      if (percentString && value) {
        //@ts-ignore: value showing element object possibly null
        //Todo(Souvik): Have to fixed this typescript error
        value.querySelector(".fill").setAttribute(
          "style",
          `stroke-dashoffset: 
              ${((100 - parseInt(percentString)) / 100) * perimeter}
          `
        );
        //@ts-ignore: value showing element object possibly null
        //Todo(Souvik): Have to fixed this typescript error
        value.querySelector(".value").innerHTML = percentString + "%";
      }
    });
  }, []);

  return (
    <>
      <div className="wrapper-center">
        <div className="progress-bar">
          <svg
            className="progress"
            data-progress={percentage}
            x="0px"
            y="0px"
            viewBox="0 0 80 80"
          >
            <path
              className="track"
              d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
            />
            <path
              className="fill"
              d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"
            />
            <text className="value" x="50%" y="45%">
              0%
            </text>
            <text className="text" x="50%" y="65%">
              {topic}
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default CircularProgressBar;

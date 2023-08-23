import { useState } from "react";
import "../styles/Projects.scss";
import Eye from "../assets/eye.svg";
import Git from "../assets/github.svg";

const TechnologyColors = {
  "React.js": "#e97bfa",
  "Node.js": "#a3e635",
  Redux: "#01d8ff",
  "Express.js": "#0a8968",
  "Maria db": "#c30b73",
  "Material UI": "#8cc4f6",
  Tailwind: "#59b529",
  SASS: "#f75ca7",
  Firebase: "#cf0d07",
  "React Native.ts": "#e75874",
  Javascript: "#d7e072",
  Typescript: "#c2e8af",
  CSS: "#3a5cd1",
  Expo: "green",
};

export default function ProjectCard({ data }) {
  const [blur, setBlur] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <div
        className={`ProjectCard ${blur ? "blur" : ""}`}
        onMouseOver={() => {
          setShowButtons(true);
        }}
        onMouseLeave={() => {
          setShowButtons(false);
          setBlur(false);
        }}
      >
        <img
          className="Image"
          src={data?.image}
          width={150}
          height={150}
          alt="project logo"
        />
        <div className="ContentContainer">
          <div className="ContentHeader">
            <div className="ContentTitle">{data?.title}</div>
            <div className="TechnologyCardContainer">
              {data?.languages?.map((item) => (
                <div
                  className="TechnologyCard"
                  style={{ backgroundColor: TechnologyColors[item] }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="Content">{data?.description}</div>
        </div>
      </div>
      {showButtons && (
        <>
          {data?.view && (
            <a href={data.view}>
              <img
                width={40}
                height={40}
                src={Eye}
                onMouseOver={() => {
                  setBlur(true);
                  setShowButtons(true);
                }}
                onMouseLeave={() => {
                  setBlur(false);
                }}
                alt="eye "
                style={{
                  position: "absolute",
                  bottom: 77,
                  left: data?.github ? "35%" : "50%",
                  cursor: "pointer",
                }}
              ></img>
            </a>
          )}

          {data?.github && (
            <a href={data.github}>
              <img
                width={40}
                height={40}
                src={Git}
                onMouseOver={() => {
                  setBlur(true);
                  setShowButtons(true);
                }}
                onMouseLeave={() => {
                  setBlur(false);
                }}
                alt="git "
                style={{
                  position: "absolute",
                  bottom: 80,
                  left: data?.view ? "70%" : "50%",
                  cursor: "pointer",
                }}
              ></img>
            </a>
          )}
        </>
      )}
    </div>
  );
}

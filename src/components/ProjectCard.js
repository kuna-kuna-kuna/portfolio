import "../styles/Projects.scss";

const TechnologyColors = {
  "React.js": "#e97bfa",
  "Node.js": "#a3e635",
  Redux: "#01d8ff",
  "Express.js": "#0a8968",
  "Maria db": "#c30b73",
  "MUI material": "#8cc4f6",
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
  return (
    <div className="ProjectCard">
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
  );
}

import LinearProgressBar from "src/utils/LinearProgressBar";
import CircularProgressBar from "src/components/body/components/styles/loadingStyle";

const mainSubjectList = [
  {
    topic: "ReactJs",
    percentage: 78,
  },
  {
    topic: "Redux",
    percentage: 74,
  },
  {
    topic: "JSX/TSX",
    percentage: 84,
  },
  {
    topic: "Jest",
    percentage: 72,
  },

  {
    topic: "Cypress",
    percentage: 69,
  },
  {
    topic: "Advanced JS",
    percentage: 77,
  },
];

const otherSubjectList = [
  {
    topic: "Enzyme",
    percentage: 68,
  },
  {
    topic: "Formik",
    percentage: 73,
  },
  {
    topic: "NodeJs (Basic)",
    percentage: 34,
  },
  {
    topic: "Data Structure",
    percentage: 64,
  },
  {
    topic: "Git",
    percentage: 82,
  },
];

const Skill = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "91vh",
        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div style={{ width: "60%" }}>
        <div
          style={{
            width: "80%",
            margin: "auto",
          }}
        >
          <CircularProgressBar options={mainSubjectList} />
        </div>
      </div>
      <div style={{ width: "40%" }}>
        <div
          style={{
            width: "80%",
            margin: "16px auto",
          }}
        >
          <LinearProgressBar options={otherSubjectList} />
        </div>
      </div>
    </div>
  );
};

export default Skill;

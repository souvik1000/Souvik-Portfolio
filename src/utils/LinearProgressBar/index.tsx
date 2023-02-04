import Stack from "../Stack";
import LinearProgressBar, {
  IProps as LinearProgressBarProps,
} from "./LinearProgressBar";

interface IProps {
  options: LinearProgressBarProps[];
}

const LinearProgressBarWithOptions: React.FC<IProps> = ({ options }) => {
  return (
    <Stack
      margin={24}
      direction="column"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {options.map((value, index) => (
        <LinearProgressBar
          key={index}
          topic={value.topic}
          percentage={value.percentage}
        />
      ))}
    </Stack>
  );
};

export default LinearProgressBarWithOptions;

import React from "react";
import { connect } from "react-redux";

import Skill from "./components/Skill";
import MySelf from "./components/Myself";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { IReducerState } from "src/reducers";
import Experience from "./components/Experience";

type IStateProps = ReturnType<typeof mapStateToProps>;

type IReduxProps = IStateProps;

const Body: React.FC<IReduxProps> = ({ selectedType }) => {
  const getRenderedComponentOnType = () => {
    switch (selectedType) {
      case "About":
        return <MySelf />;
      case "Work":
        return <Experience />;
      case "Project":
        return <Projects />;
      case "Skill":
        return <Skill />;
      case "Feedback":
        return <Contact />;
      default:
        return <MySelf />;
    }
  };

  return getRenderedComponentOnType();
};

const mapStateToProps = (state: IReducerState) => {
  const { menuOptions } = state;
  return {
    selectedType: menuOptions.selectedMenu,
  };
};

export default connect(mapStateToProps)(Body);

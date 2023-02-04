import React from "react";
import { connect } from "react-redux";
import { IReducerState } from "src/reducers";
import { actions } from "src/reducers/menuList";
import { MenuTypes } from "src/reducers/menuList/reducer";
import BorderStyle from "./components/atoms/BorderStyle";

type IStateProps = ReturnType<typeof mapStateToProps>;
type IDispatchProps = typeof mapDispatchToProps;

type IReduxProps = IStateProps & IDispatchProps;

export type MenuOptionType = {
  type: MenuTypes;
  displayString: string;
};

interface IProps extends IReduxProps {
  menuOptions: MenuOptionType[];
}

const MenuOption: React.FC<IProps> = ({
  selectedMenu,
  menuOptions,
  updateMenuOption,
}) => {
  return (
    <>
      {menuOptions.map((menuOption, index) => {
        const { type, displayString } = menuOption;
        return (
          <BorderStyle
            active={selectedMenu === type}
            key={index}
            onClick={() => updateMenuOption(type)}
          >
            {displayString}
          </BorderStyle>
        );
      })}
    </>
  );
};

const mapStateToProps = (state: IReducerState) => {
  const { menuOptions } = state;
  return {
    ...menuOptions,
  };
};

const mapDispatchToProps = {
  updateMenuOption: actions.updateSelectedMenuOptionAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuOption);

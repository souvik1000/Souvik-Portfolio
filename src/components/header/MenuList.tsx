// import React from "react";
// import { connect } from "react-redux";
// import { IReducerState } from "src/reducers";
// import styled, { keyframes } from "styled-components";

import Stack from "../../utils/Stack";
import MenuOption, { MenuOptionType } from "./MenuOption";

// const arrowForward = keyframes`
//     from{ transform: translateX(0px); }
//     to{transform: translateX(4px); }
// `;

// const arrowBackword = keyframes`
//     from{ transform: translateX(0px); }
//     to{transform: translateX(-4px); }
// `;

// const Arrow = styled.div<{ margin: boolean }>`
//   margin-left: ${(props) => (props.margin ? "8px" : "4px")};
//   margin-right: 16px;
// `;

// const MenulistWrapper = styled.div<{ showMenu: boolean }>`
//  cursor: pointer;
//  margin-left: 4px;
//  &:hover {
//    ${Arrow} {
//      animation: ${({ showMenu }) => (showMenu ? arrowBackword : arrowForward)}
//        150ms linear;
//      transform: translateX(${({ showMenu }) => (showMenu ? "-4px" : "4px")});
//    }
//  }
// `;

// type IStateProps = ReturnType<typeof mapStateToProps>;

// type IReduxProps = IStateProps;

const menuList: MenuOptionType[] = [
  {
    type: "About",
    displayString: "ME",
  },
  {
    type: "Work",
    displayString: "EXPERIENCE",
  },
  {
    type: "Project",
    displayString: "PROJECTS",
  },
  {
    type: "Skill",
    displayString: "SKILLS",
  },
  {
    type: "Feedback",
    displayString: "FEEDBACK",
  },
];

// const MenuList: React.FC<IReduxProps> = ({ selectedType }) => {
const MenuList = () => {
  // const [showMenu, setShowMenu] = React.useState(!!selectedType || false);

  return (
    <>
      {/*<MenulistWrapper
        showMenu={showMenu}
        style={{ display: "flex", alignItems: "center", userSelect: "none" }}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        MENU
        <Arrow margin={showMenu}>{showMenu ? "\u2190" : "\u2192"}</Arrow>
      </MenulistWrapper> */}
      {/* showMenu && (
        <Stack margin={16} direction="row">
          <MenuOption menuOptions={menuList} />
        </Stack>
      ) */}
        <Stack margin={16} direction="row">
          <MenuOption menuOptions={menuList} />
        </Stack>
    </>
  );
};

// const mapStateToProps = (state: IReducerState) => {
//   const { menuOptions } = state;
//   return {
//     selectedType: menuOptions.selectedMenu,
//   };
// };

// export default connect(mapStateToProps)(MenuList);
export default MenuList;

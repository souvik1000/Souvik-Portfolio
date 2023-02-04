import React from "react";
import styled from "styled-components";

type DivProps = Omit<JSX.IntrinsicElements["div"], "ref">;
type StackDirection = "row" | "column";
type MarginType = string | number;

const StackWrapper = styled.div<{
  direction?: StackDirection;
  margin?: MarginType;
}>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "column" ? "column" : ""};
  > *:not(:first-child) {
    ${({ direction, margin }) =>
      `margin-${direction === "row" ? "left" : "top"}: ${margin}px`}
  }
`;

interface IProps extends DivProps {
  direction?: StackDirection;
  margin?: number | string;
}

const Stack: React.FC<IProps> = ({
  direction = "row",
  margin = 8,
  children,
  ...restProps
}) => {
  return (
    <StackWrapper direction={direction} margin={margin} {...restProps}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child) ? React.cloneElement(child) : null;
      })}
    </StackWrapper>
  );
};

export default Stack;

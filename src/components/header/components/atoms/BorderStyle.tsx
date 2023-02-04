import styled from "styled-components";

const MenuOption = styled.div<{ active: boolean }>`
  --c: #fff; /* the border color */
  --b: 2px; /* the border thickness*/
  --g: 0px; /* the gap on hover */
  --_g: #000 25%, var(--c) 0;

  user-select: none;
  padding: calc(var(--g) + var(--b));
  background: ${({ active }) =>
    active
      ? "#333"
      : `conic-gradient(
        from 180deg at top var(--b) right var(--b),
        var(--_g)
      )
      var(--_i, 200%) 0 /200% var(--_i, var(--b)) no-repeat,
    conic-gradient(at bottom var(--b) left var(--b), var(--_g)) 0
      var(--_i, 200%) / var(--_i, var(--b)) 200% no-repeat;
  transition: 0.3s, background-position 0.3s 0.3s;
  cursor: pointer;

  &:hover {
    --_i: 100%;
    transition: 0.3s, background-size 0.3s 0.3s;
  }`};
`;

type DivProps = Omit<JSX.IntrinsicElements["div"], "ref">;

interface IProps extends DivProps {
  children: string;
  active?: boolean;
}

const BorderStyle: React.FC<IProps> = ({ active, children, ...otherProps }) => {
  return (
    <MenuOption active={active!} {...otherProps}>
      {children}
    </MenuOption>
  );
};

export default BorderStyle;

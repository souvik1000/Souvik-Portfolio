import styled from "styled-components";

export const BottomBorderStyle = styled.p`
  font-family: "feedback";
  font-size: 40px;
  font-weight: 600;

  /* you can change these variables to control the border */
  --border-color: #fff;
  --border-width: 2px;
  --bottom-distance: 4px; /* you can increase this */

  display: inline-block;
  background-image: linear-gradient(var(--border-color), var(--border-color));
  background-size: 0% var(--border-width);
  background-repeat: no-repeat;
  transition: background-size 0.3s;
  background-position: bottom left;

  .fromCenter {
    background-position: 50% calc(100% - var(--bottom-distance));
  }

  &:hover {
    background-size: 100% var(--border-width);
  }
`;

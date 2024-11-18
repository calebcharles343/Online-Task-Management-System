import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { CircleProps } from "../Interfaces";

const StyledSVG = styled.svg`
  width: 4.8rem;
  height: 2.4rem;
  overflow: visible;
`;

const StyledRect = styled.rect`
  width: 4.8rem;
  height: 2.4rem;
  rx: 12;
  fill: white;
`;

const StyledCircle = styled.circle<CircleProps>`
  fill: #5964e0;
  transition: cx 0.3s ease;
  cy: 12;
  r: 7;
  cx: ${(props) => (props.$isDarkMode ? "36" : "12")};
`;

function ToggleSwitch() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledSVG viewBox="0 0 48 24" onClick={toggleDarkMode}>
      <StyledRect />
      <StyledCircle $isDarkMode={isDarkMode} />
    </StyledSVG>
  );
}

export default ToggleSwitch;

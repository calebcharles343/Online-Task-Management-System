import styled from "styled-components";
import { StyledContainerProps } from "../Interfaces";
import media from "../styles/MediaQuery";

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 144rem;
  padding-bottom: 11.2rem;

  ${media.tablet} {
    width: 100%;
    min-width: 7.68rem;
    padding-x: 2rem;
  }
`;

function Main({ children }: StyledContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Main;

import styled from "styled-components";
import media from "../styles/MediaQuery";

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
  background-color: inherit;
  border: none;
  gap: 1rem;

  ${media.tablet} {
    font-size: 1.6rem;
    overflow: hidden;
  }
`;

export default Label;

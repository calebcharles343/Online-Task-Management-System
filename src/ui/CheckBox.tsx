import styled from "styled-components";
import media from "../styles/MediaQuery";
import { CheckboxProps } from "../Interfaces";

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  gap: 0.5rem;

  ${media.tablet} {
    gap: 1rem;
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${({ checked }) => (checked ? "#5964E0" : "#e0e0e0")};
  border-radius: 4px;
  display: flex;
  align-item: center;
  justify-content: center;
  transition: all 0.3s;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 6px;
    top: 1px;
    width: 10px;
    height: 16px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transition: opacity 0.3s;
  }
`;

const CheckboxLabel = styled.span`
  margin-left: 8px;
  font-size: 1.6rem;
`;

const LabelSpan = styled.span`
  ${media.tablet} {
    display: none;
  }
`;

function CheckBox({ checked, onChange, label }: CheckboxProps) {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked} />
      <CheckboxLabel>
        {label} <LabelSpan>Only</LabelSpan>
      </CheckboxLabel>
    </CheckboxContainer>
  );
}

export default CheckBox;

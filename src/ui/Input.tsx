import styled, { css } from "styled-components";
import { InputProps } from "../Interfaces";

const Input = styled.input<Partial<InputProps>>`
  font-size: 1.8rem;
  font-weight: 600;
  background-color: inherit;
  height: 100%;
  border: none;
  width: 100%;
  padding-left: 0.5rem;
  ${({ width }) =>
    width === "medium" &&
    css`
      width: 260px;
    `}

  ${({ type }) =>
    type === "checkbox" &&
    css`
      display: inline-block;
      width: 2.4rem;
      height: 2.4rem;

      &:after {
        background-color: #5964e0;
        color: #5964e0;
      }
    `}

    &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px var(--bg-color-2) inset;
    -webkit-text-fill-color: var(--header-color);
    background-color: transparent !important;
    outline: none;
    border: none;
    -webkit-box-shadow: 0 0 0px 1000px var(--bg-color-2) inset;
    box-shadow: 0 0 0px 1000px var(--bg-color-2) inset;
  }
`;

export default Input;

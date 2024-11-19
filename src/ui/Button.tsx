import styled, { css } from "styled-components";
import media from "../styles/MediaQuery";
import { Buttons } from "../Interfaces";

const Button = styled.button<Buttons>`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.984rem;
  /* min-width: 14.1rem; */
  height: 4.8rem;
  border-radius: 5px;
  padding: 1.6rem 3.95rem;
  border: none;
  color: var(--white);

  ${({ ButtonType }) =>
    ButtonType === "btn1" &&
    css`
      background-color: var(--violet);

      &:hover {
        background-color: var(--light-violet);
      }

      ${media.tablet} {
        font-size: 1.6rem;
        padding: 1rem 1.5rem;
        min-width: 8rem;
      }
    `};

  ${({ ButtonType }) =>
    ButtonType === "btn2" &&
    css`
      background-color: var(--btn2-bg-color);
      color: var(--btn2-font-color);

      &:hover {
        background-color: var(--btn2-bg-hover-color);
      }

      ${media.tablet} {
        font-size: 1.6rem;
        padding: 1rem 1.5rem;
        min-width: 8rem;
      }
    `}
  ${({ ButtonType }) =>
    ButtonType === "btn2project" &&
    css`
      background-color: var(--btn2-bg-color);
      color: var(--btn2-font-color);

      width: 4rem;
      &:hover {
        background-color: var(--btn2-bg-hover-color);
      }

      /* ${media.tablet} {
        font-size: 1.6rem;
        padding: 1rem 1.5rem;
        min-width: 8rem;
      } */
    `}
  ${({ ButtonType }) =>
    ButtonType === "delete" &&
    css`
      background-color: red;
      color: #fff;
      width: 4rem;

      &:hover {
        background-color: #f88380;
      }

      /* ${media.tablet} {
        font-size: 1.6rem;
        padding: 1rem 1.5rem;
        min-width: 8rem;
      } */
    `}

  ${({ ButtonType }) =>
    ButtonType === "mobile" &&
    css`
      background-color: var(--violet);

      width: 4.8rem;
      padding: 1rem;

      &:hover {
        background-color: var(--light-violet);
      }
    `}


  ${({ ButtonType }) =>
    ButtonType === "mobile-2" &&
    css`
      background-color: var(--violet);

      width: 100%;

      &:hover {
        background-color: var(--light-violet);
      }
    `}
  ${({ ButtonType }) =>
    ButtonType === "long" &&
    css`
      background-color: var(--violet);
      &:hover {
        background-color: var(--light-violet);
      }

      ${media.mobile} {
        width: 100%;
      }
    `}
`;

export default Button;

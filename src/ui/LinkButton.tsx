import styled, { css } from "styled-components";
import media from "../styles/MediaQuery";
import { forwardRef, ReactNode } from "react";

interface LinkButtonProps {
  LinkButtonType?: "long" | "linkBtn2";
  href?: string;
  children?: ReactNode;
}

const StyledLinkButton = styled.a<Omit<LinkButtonProps, "href">>`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.984rem;
    height: 4.8rem;
    border-radius: 5px;
    padding: 1.6rem 3.95rem;
    border: none;
    color: var(--white);
  }

  ${({ LinkButtonType }) =>
    LinkButtonType === "long" &&
    css`
      background-color: var(--violet);
      &:hover,
      &:active {
        background-color: var(--light-violet);
      }

      ${media.mobile} {
        width: 100%;
      }
    `}

  ${({ LinkButtonType }) =>
    LinkButtonType === "linkBtn2" &&
    css`
      &:link,
      &:visited {
        background-color: var(--btn2-bg-color);
        color: var(--btn2-font-color);
      }
      &:hover,
      &:active {
        background-color: var(--btn2-bg-hover-color);
      }

      ${media.tablet} {
        font-size: 1.6rem;
        padding: 1rem 1.5rem;
        min-width: 8rem;
      }
    `}
`;

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ LinkButtonType = "long", href = "#", children, ...props }, ref) => (
    <StyledLinkButton
      ref={ref}
      LinkButtonType={LinkButtonType}
      href={href}
      {...props}
    >
      {children}
    </StyledLinkButton>
  )
);

LinkButton.displayName = "LinkButton";

export default LinkButton;

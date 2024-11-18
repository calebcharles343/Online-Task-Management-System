import styled from "styled-components";

const Form = styled.form`
  position: absolute;
  diplay: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 9999;
  color: var(--header-color);
`;

export default Form;

import styled from "styled-components";
import { SelectProps, StyledSelectProps } from "../Interfaces";

const StyledSelect = styled.select<StyledSelectProps>`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  background-color: inherit;
`;

function Select({ options, value, onChange, type }: SelectProps) {
  return (
    <StyledSelect value={value} onChange={onChange} type={type}>
      {options?.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;

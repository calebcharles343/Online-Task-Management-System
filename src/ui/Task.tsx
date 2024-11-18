import styled from "styled-components";
import { TaskProps } from "../Interfaces";
import Heading from "./Heading";
import media from "../styles/MediaQuery";

const StyledTask = styled.div`
  position: relative;
  width: 35rem;
  height: 22.8rem;
  background-color: var(--job-bg-color);
  margin-top: 2.5rem;
  padding: 0.1rem 3.2rem 3.2rem 3.2rem;

  ${media.tablet} {
    width: 32.9rem;
  }
`;

const TaskTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 4.9rem;
  min-height: 14.7rem;
  color: white;
  font-weight: 400;
  font-size: 1.6rem;
  gap: 0.5rem;

  p {
    color: var(--dark-grey);
  }

  span {
    align-self: bottom;
    font-size: 1.4rem;
    line-height: 1.736rem;
    font-weight: 700;
    color: var(--violet);
  }

  div {
    margin-top: 1.8rem;
  }
`;

function Task({ task }: TaskProps) {
  return (
    <StyledTask>
      <TaskTextContainer>
        <Heading headingType="h3" color="--header-color">
          {task.name}
        </Heading>

        <p>{task.description}</p>
      </TaskTextContainer>
    </StyledTask>
  );
}

export default Task;

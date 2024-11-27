import { Form, useParams } from "react-router-dom";
import styled from "styled-components";
import Heading from "../ui/Heading";
import media from "../styles/MediaQuery";
import { useProjectStore } from "../store/useStore";
import { useEffect, useState } from "react";
import { createTasks, deleteTask } from "../utils/api";
import Button from "./Button";

const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 73rem;
  margin-top: 7rem;
  ${media.mobile} {
    max-width: 100vw;
  }
`;

const DetailContainter = styled.div`
  padding: 4.8rem;
  background-color: var(--bg-color-2);
  width: 53rem;

  ${media.tablet} {
    width: 68.9rem;
  }

  ${media.mobile} {
    max-width: 100vw;
    padding: 2rem;
  }
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* ${media.mobile} {
    flex-direction: column;
    margin-bottom: 2rem;
  } */
`;

const DetailTextHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  /* min-height: 14.7rem; */
  color: white;
  font-weight: 400;
  font-size: 1.6rem;
  /* gap: 0.5rem; */
  margin-bottom: 2rem;

  p {
    color: var(--dark-grey);
    /* margin-bottom: -0.5rem; */
  }

  span {
    font-size: 1.4rem;
    line-height: 1.736rem;
    font-weight: 700;
    color: var(--violet);
  }
`;

const DetailTextContainer = styled.div`
  width: 100%;
  font-size: 2rem;
  line-height: 2.6rem;
  color: var(--dark-grey);

  ${media.mobile} {
    font-size: 1.8rem;
  }
`;

const JobDescription = styled.div`
  margin-bottom: 2rem;
`;

const JobRole = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* margin-bottom: 4rem; */

  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    list-style: none;
    counter-reset: list-counter;
  }

  li {
    display: flex;
    counter-increment: list-counter;
  }

  li::before {
    content: counter(list-counter) ".";
    font-weight: bold;
    color: var(--violet);
    margin-right: 0.5rem;
    min-width: 2rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;
const ListContainer = styled.ol`
  /* List item styling */
  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    word-wrap: break-word; /* Ensures words break properly */
    flex-wrap: wrap; /* Allows content to wrap if needed */
  }

  /* Button styling */
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
  }

  /* Mobile-specific styles */
  ${media.mobile} {
    li {
      flex-wrap: wrap; /* Ensures text wraps on smaller screens */
      align-items: flex-start; /* Adjust alignment to keep items aligned */
    }

    button {
      flex-shrink: 0; /* Prevent button from shrinking */
    }
  }
`;

const TaskFormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 2.6rem;
  margin-bottom: 2rem;

  input {
    color: #333;
    width: 35rem;
    padding: 1rem;
  }
  ${media.mobile} {
    flex-direction: column;
    gap: 1rem;
  }
`;

function Detail() {
  const { id } = useParams<{ id: string }>();
  const { projects, project, setProject } = useProjectStore((state) => state);
  const [tasks, setTasks] = useState<string[]>([""]);

  useEffect(() => {
    const filterdProject = projects.filter((project) => {
      if (typeof id === "number") {
        return project.id === id;
      } else if (typeof id === "string") {
        return project.id?.toString() === id;
      }
      return false;
    });

    setProject(filterdProject);
    setTasks([]);
  }, []);

  console.log(project[0].tasks);

  const handleAddTask = () => {
    setTasks([...tasks, ""]);
  };

  const handleRemoveTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const handleInputChange = (value: string, index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      tasks,
    };

    if (tasks) {
      tasks.forEach((task) => {
        createTasks(id as any, project[0].id as any, task);
      });

      const alertText =
        tasks.length > 1
          ? "All tasks added successfully"
          : "Task added successfully";
      alert(alertText);
    }

    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <StyledDetail>
        <DetailContainter>
          <DetailHeader>
            <DetailTextHeader>
              <Heading headingType="h1-mobile" color="--header-color">
                {project[0].title}
              </Heading>
            </DetailTextHeader>
          </DetailHeader>
          <DetailTextContainer>
            <JobDescription>
              <p>{project[0].description}</p>
            </JobDescription>
            <JobRole>
              <Heading headingType="h2" color="--header-color">
                Task
              </Heading>

              <ListContainer>
                {project[0].tasks.map((task, index) => (
                  <li key={index}>
                    {task.task_name}{" "}
                    <button
                      onClick={() => deleteTask(task._id, task.project_id)}
                    >
                      x
                    </button>
                  </li>
                ))}
              </ListContainer>
            </JobRole>
          </DetailTextContainer>
        </DetailContainter>

        <Form onSubmit={handleSubmit}>
          {tasks.map((task, index) => (
            <TaskFormRow key={index}>
              <label htmlFor={`task-${index}`}>Task</label>
              <input
                type="text"
                id={`task-${index}`}
                value={task}
                onChange={(e) => handleInputChange(e.target.value, index)}
                placeholder={`Task ${index + 1}`}
                required
              />
              <Button
                ButtonType="delete"
                type="button"
                onClick={() => handleRemoveTask(index)}
              >
                Remove
              </Button>
            </TaskFormRow>
          ))}

          <BtnContainer>
            <Button ButtonType="btn2" type="button" onClick={handleAddTask}>
              Add Task
            </Button>

            {tasks.length > 0 ? (
              <Button ButtonType="btn1" type="submit">
                submit
              </Button>
            ) : null}
          </BtnContainer>
        </Form>
      </StyledDetail>
    </>
  );
}

export default Detail;

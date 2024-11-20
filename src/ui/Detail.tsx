import { Form, useParams } from "react-router-dom";
import styled from "styled-components";
import Heading from "../ui/Heading";
import media from "../styles/MediaQuery";
import { useProjectStore } from "../store/useStore";
import { useEffect, useState } from "react";
import { createTasks, getTasks, deleteTask } from "../utils/api";
import Button from "./Button";

const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 73rem;
  margin-top: 7rem;
`;

const DetailContainter = styled.div`
  padding: 4.8rem;
  background-color: var(--bg-color-2);
  width: 53rem;

  /* 
  ${media.tablet} {
    width: 68.9rem;
  }

  ${media.mobile} {
    max-width: 100vw;
  } */
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
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--dark-grey);
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
interface ProjectTask {
  _id: string;
  project_id: string;
  task_name: string;
  created_at: string;
  updated_at?: string;
}

const TaskFormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 3rem;

  input {
    color: #333;
    width: 35rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;
function Detail() {
  const { id } = useParams<{ id: string }>();
  const { projects } = useProjectStore((state) => state);
  const [projectTask, setProjectTask] = useState<ProjectTask[]>();
  const [tasks, setTasks] = useState<string[]>([""]);

  // console.log("xxx", projects[0].id, id);

  // Function to handle adding a new task input
  const handleAddTask = () => {
    setTasks([...tasks, ""]);
  };

  // Function to handle removing a task input by index
  const handleRemoveTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Function to handle input change
  const handleInputChange = (value: string, index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  };

  const project = projects.filter((project) => {
    if (typeof id === "number") {
      return project.id === id;
    } else if (typeof id === "string") {
      return project.id?.toString() === id; // Convert project.id to string for comparison (optional chaining handles missing ID)
    }
    return false; // Or return some default value if missing ID is allowed
  });

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
  useEffect(function () {
    const fetchTasks = async () => {
      const tasks = await getTasks(id as any);

      if (tasks) {
        setProjectTask(tasks.tasks);
      }
    };
    fetchTasks();
  }, []);

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
              <Heading headingType="h3" color="--header-color">
                Task
              </Heading>

              <ol>
                {projectTask?.map((task, index) => (
                  <li key={index}>
                    {task.task_name}{" "}
                    <button
                      onClick={() => deleteTask(task._id, task.project_id)}
                    >
                      x
                    </button>
                  </li>
                ))}
              </ol>
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

            <Button ButtonType="btn1" type="submit">
              submit
            </Button>
          </BtnContainer>
        </Form>
      </StyledDetail>
    </>
  );
}

export default Detail;

import { Form, useParams } from "react-router-dom";
import Heading from "../ui/Heading";
import { useProjectStore } from "../store/useStore";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createTasks, deleteTask } from "../utils/api";
import Button from "../ui/Button";
import {
  BtnContainer,
  DetailContainter,
  DetailHeader,
  DetailTextContainer,
  DetailTextHeader,
  JobDescription,
  JobRole,
  ListContainer,
  StyledDetail,
  TaskFormRow,
} from "./detail/detailFeatures";

function Detail() {
  const { id } = useParams<{ id: string }>();
  const { projects, fetchProjects } = useProjectStore((state) => state);

  const [tasksList, setTasksList] = useState<string[]>([]);

  const componentProject = useMemo(() => {
    return projects.find((project) => (project.id as any) === id) || null;
  }, [projects, id]);

  const handleAddTaskInput = () => {
    setTasksList((prev) => [...prev, ""]);
  };

  const handleRemoveTaskInput = (index: number) => {
    setTasksList(tasksList.filter((_, i) => i !== index));
  };
  const handleDeleteTask = async (taskId: string, projectId: string) => {
    try {
      await deleteTask(taskId, projectId);
      await fetchProjects();
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (value: string, index: number) => {
    const updatedTasks = [...tasksList];
    updatedTasks[index] = value;
    setTasksList(updatedTasks);
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (tasksList.length) {
        try {
          // Create an array of promises for each task
          const taskPromises = tasksList.map((task) =>
            createTasks(id as string, componentProject?.id as any, task)
          );

          // Wait for all promises to resolve
          await Promise.all(taskPromises);

          const alertText =
            tasksList.length > 1
              ? "All tasks added successfully"
              : "Task added successfully";
          alert(alertText);
          setTasksList([]);
          fetchProjects();
        } catch (error) {
          console.error("Error adding tasks:", error);
          alert("An error occurred while adding tasks.");
        }
      }
    },
    [id, componentProject?.id, tasksList]
  );

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <>
      <StyledDetail>
        <DetailContainter>
          <DetailHeader>
            <DetailTextHeader>
              <Heading headingType="h1-mobile" color="--header-color">
                {componentProject?.title}
              </Heading>
            </DetailTextHeader>
          </DetailHeader>
          <DetailTextContainer>
            <JobDescription>
              <p>{componentProject?.description}</p>
            </JobDescription>
            <JobRole>
              <Heading headingType="h2" color="--header-color">
                Task
              </Heading>

              <ListContainer>
                {componentProject?.tasks.map((task, index) => (
                  <li key={index}>
                    {task.task_name}{" "}
                    <button
                      onClick={() =>
                        handleDeleteTask(task._id, componentProject.id as any)
                      }
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
          {tasksList.map((task, index) => (
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
                onClick={() => handleRemoveTaskInput(index)}
              >
                Remove
              </Button>
            </TaskFormRow>
          ))}

          <BtnContainer>
            <Button
              ButtonType="btn2"
              type="button"
              onClick={handleAddTaskInput}
            >
              Add Task
            </Button>

            {tasksList.length > 0 ? (
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

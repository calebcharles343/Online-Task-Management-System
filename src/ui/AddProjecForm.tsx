import styled from "styled-components";
import Modal from "./Modal";
import { Form } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";
import { createProject } from "../utils/api";

const StyledAddProjectForm = styled.div``;

const AddProjectFormContainer = styled.div``;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--header-color);
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  font-size: 3rem;

  input,
  textarea {
    color: #333;
    width: 35rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  textarea {
    height: 20rem;
  }
`;

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

const MobileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const AddProjectForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([""]);

  useEffect(() => {
    console.log("Updated:", title, description, tasks);
  }, [tasks, description, title]);

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

  // Handle form submission and log all form data
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      tasks,
    };

    createProject(formData.title, formData.description);
    console.log("Form Data Submitted:", formData);
  };

  return (
    <StyledAddProjectForm>
      <AddProjectFormContainer>
        <Modal>
          <Modal.Open open="filter">
            <Button ButtonType="btn1" type="button">
              Add Project
            </Button>
          </Modal.Open>

          <Modal.Window name="filter">
            <Form onSubmit={handleSubmit}>
              <FormContainer>
                <MobileInputContainer>
                  <FormRow>
                    <label htmlFor="titleName">Title Name</label>
                    <input
                      type="text"
                      id="titleName"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Project title"
                      required
                    />
                  </FormRow>
                  <FormRow>
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Project Description"
                      required
                    />
                  </FormRow>

                  <div>
                    {tasks.map((task, index) => (
                      <TaskFormRow key={index}>
                        <label htmlFor={`task-${index}`}>Task</label>
                        <input
                          type="text"
                          id={`task-${index}`}
                          value={task}
                          onChange={(e) =>
                            handleInputChange(e.target.value, index)
                          }
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
                    <Button
                      ButtonType="btn2"
                      type="button"
                      onClick={handleAddTask}
                    >
                      Add Task
                    </Button>
                  </div>
                </MobileInputContainer>
                <Button ButtonType="btn1" type="submit">
                  Submit
                </Button>
              </FormContainer>
            </Form>
          </Modal.Window>
        </Modal>
      </AddProjectFormContainer>
    </StyledAddProjectForm>
  );
};

export default AddProjectForm;

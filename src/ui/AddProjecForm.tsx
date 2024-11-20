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

const MobileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const AddProjectForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    console.log("Updated:", title, description);
  }, [description, title]);

  // Handle form submission and log all form data
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      title,
      description,
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

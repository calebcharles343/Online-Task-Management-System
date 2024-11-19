import styled from "styled-components";
import { ProjectProps } from "../Interfaces";
import Heading from "./Heading";
import media from "../styles/MediaQuery";
import Button from "./Button";
import { deleteProject, updateProject } from "../utils/api";
import { Form, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

const StyledProject = styled.div`
  position: relative;
  width: 35rem;
  /* height: 22.8rem; */
  background-color: var(--job-bg-color);
  /* margin-top: 2.5rem; */
  padding: 0.1rem 3.2rem 3.2rem 3.2rem;
  /* 
  ${media.tablet} {
    width: 32.9rem;
  } */
`;

const ProjectTextContainer = styled.div`
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
    /* margin-top: 1.8rem; */
  }
`;

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

const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 2rem;
`;

function Project({ project }: ProjectProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      title,
      description,
    };

    updateProject(project.id, formData.title, formData.description);
    console.log("Form Data Submitted:", formData);
  };

  return (
    <StyledProject>
      <ProjectTextContainer onClick={() => handleClick(project.id)}>
        <Heading headingType="h3" color="--header-color">
          {project.title}
        </Heading>

        <p>{project.description}</p>
      </ProjectTextContainer>
      <BtnContainer>
        <Modal>
          <Modal.Open open="editProject">
            <Button ButtonType="btn2project" type="button">
              update
            </Button>
          </Modal.Open>

          <Modal.Window name="editProject">
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
              </FormContainer>
              <Button ButtonType="btn1" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Window>
        </Modal>
        <Button ButtonType="delete" onClick={() => deleteProject(project.id)}>
          delete
        </Button>
      </BtnContainer>
    </StyledProject>
  );
}

export default Project;

import styled from "styled-components";
import { ProjectProps } from "../Interfaces";
import Heading from "./Heading";
// import media from "../styles/MediaQuery";
import Button from "./Button";
import { deleteProject, updateProject } from "../utils/api";
import { Form, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import media from "../styles/MediaQuery";
import { useProjectStore } from "../store/useStore";

const StyledProject = styled.div`
  width: 35rem;
  background-color: var(--job-bg-color);
  padding: 3.2rem 3.2rem 3.2rem;
`;

const ProjectTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
  height: 14.7rem;
  color: white;
  font-weight: 400;
  font-size: 1.8rem;
  gap: 0.5rem;
  overflow-y: hidden;

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

  ${media.mobile} {
    grid-template-columns: 1fr;
    label {
      margin-bottom: 1rem;
    }
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
  const { fetchProjects } = useProjectStore((state) => state);

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
    alert("Form submitted successfully!");
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;

    if (value.length > 200) {
      e.target.setCustomValidity("Description must be 200 character or less.");
    } else {
      e.target.setCustomValidity("");
    }

    setDescription(value);
  };

  const handleDeleteProject = async (projectId: string) => {
    try {
      await deleteProject(projectId as any);
      await fetchProjects();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledProject>
      <ProjectTextContainer onClick={() => handleClick(project.id)}>
        <Heading headingType="h1" color="--header-color">
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
                      onChange={handleDescriptionChange}
                      placeholder="Project Description"
                      required
                    />
                  </FormRow>
                </MobileInputContainer>
                <Button ButtonType="btn1" type="submit">
                  Update
                </Button>
              </FormContainer>
            </Form>
          </Modal.Window>
        </Modal>
        <Button
          ButtonType="delete"
          onClick={() => handleDeleteProject(project?.id as any)}
        >
          delete
        </Button>
      </BtnContainer>
    </StyledProject>
  );
}

export default Project;

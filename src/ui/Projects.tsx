import { useEffect, useState } from "react";

import styled from "styled-components";
import Task from "./Project";
import Button from "./Button";
import { dataJS } from "../data/dataJS";
import media from "../styles/MediaQuery";
import { useProjectStore } from "../store/useStore";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 4rem;
`;

const StyledProjects = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(35rem, 1fr));
  width: 111rem;
  gap: 2.916666rem;
  margin-bottom: 3rem;
  /* margin-top: 1rem; */

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(35rem, 1fr));
    max-width: 76.8rem;
    gap: 1rem;
    padding: 0 4rem;
  }

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    padding: 0 1rem;
  }
`;

function Projects() {
  const { projects, fetchProjects } = useProjectStore((state) => state);
  const [seeMore, setSeeMore] = useState<boolean>(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  function handleSeeMoreBtn() {
    setSeeMore(!seeMore);
  }

  return (
    <ProjectsContainer>
      <StyledProjects>
        {projects.map((project) => (
          <li key={project.id}>
            <Task project={project} />
          </li>
        ))}
      </StyledProjects>

      {dataJS.length > 11 ? (
        <Button ButtonType="btn1" onClick={handleSeeMoreBtn}>
          {projects.length > 12 ? "Load less" : "Load more"}
        </Button>
      ) : null}
    </ProjectsContainer>
  );
}

export default Projects;

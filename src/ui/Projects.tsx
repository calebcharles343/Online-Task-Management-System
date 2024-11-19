// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
// import { DataType } from "../Interfaces";
// import { useFormData } from "../context/FormDataContext";
import styled from "styled-components";
import Task from "./Project";
import Button from "./Button";
import { dataJS } from "../data/dataJS";
import { useNavigate } from "react-router-dom";
import media from "../styles/MediaQuery";
import { getProjects } from "../utils/api";
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
  // const [data, setData] = useState<DataType[]>([]);
  const { setProjects, projects } = useProjectStore((state) => state);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  // const { formData, updateField, handleSubmit } = useFormData();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();

      if (projects) {
        setProjects(projects.data);
      }
    };
    fetchProjects();
  }, []);

  // console.log("xxx", projects);

  // let filteredData = data ? data : dataJS;

  function handleSeeMoreBtn() {
    setSeeMore(!seeMore);
  }

  // const handleClick = (id: number) => {
  //   navigate(`/detail/${id}`);
  // };

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

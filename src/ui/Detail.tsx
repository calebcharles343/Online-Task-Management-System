import { useParams } from "react-router-dom";
import styled from "styled-components";
import Heading from "../ui/Heading";
import media from "../styles/MediaQuery";
import { useProjectStore } from "../store/useStore";

const StyledDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 73rem;
  margin-top: 7rem;
  /* margin-bottom: 5rem; */

  /* ${media.tablet} {
    width: 100vw;
  }
  ${media.mobile} {
    margin-top: 22.8rem;
  } */
`;

const DetailContainter = styled.div`
  padding: 4.8rem;
  background-color: var(--bg-color-2);
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

function Detail() {
  const { id } = useParams<{ id: string }>();
  const { projects } = useProjectStore((state) => state);

  // console.log("xxx", projects[0].id, id);

  const project = projects.filter((project) => {
    if (typeof id === "number") {
      return project.id === id;
    } else if (typeof id === "string") {
      return project.id?.toString() === id; // Convert project.id to string for comparison (optional chaining handles missing ID)
    }
    return false; // Or return some default value if missing ID is allowed
  });
  console.log("project", project);

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

              {/* <ol>
                {job[0].tasks.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol> */}
            </JobRole>
          </DetailTextContainer>
        </DetailContainter>
      </StyledDetail>
    </>
  );
}

export default Detail;

/*
  const storedProjects = localStorage.getItem("project-storage");
 const localStorageProjects = storedProjects
 ? JSON.parse(storedProjects)
 : null;
 
 // console.log("project-storage", localStorageProjects.state.projects);
 
 */
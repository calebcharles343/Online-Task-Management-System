// import { useEffect, useState } from "react";
import { useState } from "react";
// import { DataType } from "../Interfaces";
// import { useFormData } from "../context/FormDataContext";
import styled from "styled-components";
import Task from "./Task";
import Button from "./Button";
import { dataJS } from "../data/dataJS";
import { useNavigate } from "react-router-dom";
import media from "../styles/MediaQuery";

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 4rem;
`;

const StyledTasks = styled.ul`
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

function Tasks() {
  // const [data, setData] = useState<DataType[]>([]);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  // const { formData, updateField, handleSubmit } = useFormData();

  const navigate = useNavigate();
  /*
useEffect(() => {
  fetch("/src/data/data.json")
  .then((response) => response.json())
  .then((data) => setData(data))
  .catch((error) => console.error("Error fetching data:", error));
}, []);
*/

  // let filteredData = data ? data : dataJS;

  function handleSeeMoreBtn() {
    setSeeMore(!seeMore);
  }

  const handleClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <TasksContainer>
      <StyledTasks>
        {dataJS.map((task) => (
          <li key={task.id} onClick={() => handleClick(task.id)}>
            <Task task={task} />
          </li>
        ))}
      </StyledTasks>

      {dataJS.length > 11 ? (
        <Button ButtonType="btn1" onClick={handleSeeMoreBtn}>
          {dataJS.length > 12 ? "Load less" : "Load more"}
        </Button>
      ) : null}
    </TasksContainer>
  );
}

export default Tasks;

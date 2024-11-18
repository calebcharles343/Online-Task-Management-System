import { FormDataProvider } from "../context/FormDataContext";
import Main from "./Main";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  background-color: var(--bg-color);
  min-height: 100vh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <FormDataProvider>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </FormDataProvider>
    </StyledAppLayout>
  );
}

export default AppLayout;

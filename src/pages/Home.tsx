import AddProjectForm from "../features/AddProjectForm";
import AddProjectModal from "../ui/AddProjecForm";
import Tasks from "../ui/Projects";

function Home() {
  return (
    <>
      {/* <AddProjectForm /> */}
      <AddProjectModal />
      <Tasks />;
    </>
  );
}

export default Home;

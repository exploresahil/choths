import { getProjects } from "@/sanity/sanity-utils";

const Home = async () => {
  const projects = await getProjects();

  return (
    <>
      <h1>{projects[0].name}</h1>
    </>
  );
};

export default Home;

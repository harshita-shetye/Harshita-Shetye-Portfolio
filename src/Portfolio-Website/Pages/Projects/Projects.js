import { projects } from "./ProjectsList";
import { useState } from "react";
import ProjectsController from "./ProjectsController";

const Projects = () => {
  const [proj, setProjects] = useState(projects);

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>My Personal Projects</h2>
          <div className="underline"></div>
        </div>
        <div>
          {proj.map((project) => {
            return <ProjectsController key={project.id} {...project} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;

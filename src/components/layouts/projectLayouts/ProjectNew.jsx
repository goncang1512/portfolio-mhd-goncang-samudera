import { useEffect, useState } from "react";
import CardProject from "../../fragments/projectfragments/CardProject";

function ProjectNew() {
  const [dataProject, setDataProject] = useState([]);

  const getProject = async () => {
    try {
      const response = await fetch("/myproject.json", {
        method: "GET",
      });
      const projectData = await response.json();
      setDataProject(projectData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <>
      <CardProject.ProTitle dataAni="fade-right">Project</CardProject.ProTitle>

      {dataProject.map((project, index) => {
        return index % 2 === 0 ? (
          <CardProject dataAos="fade-right" key={project.id}>
            <CardProject.Figure
              img={project.img}
              classImg={`${project.duration}`}
            />
            <CardProject.Body>
              <CardProject.Title>{project.title}</CardProject.Title>
              <CardProject.Ception>{project.ception}</CardProject.Ception>
              <CardProject.Tech>
                {project.stack.map((tech, index) => (
                  <div
                    className="relative px-5 py-1 border shadow-xl"
                    key={index + 1}
                  >
                    {tech}
                  </div>
                ))}
              </CardProject.Tech>
              <CardProject.Button
                demo={project.demo}
                linkGit={project.github}
              />
            </CardProject.Body>
          </CardProject>
        ) : (
          <CardProject dataAos="fade-left" key={project.id}>
            <CardProject.Body classBody="md:order-1 order-2">
              <CardProject.Title>{project.title}</CardProject.Title>
              <CardProject.Ception>{project.ception}</CardProject.Ception>
              <CardProject.Tech>
                {project.stack.map((tech, index) => (
                  <div
                    className="relative px-5 py-1 border shadow-xl"
                    key={index + 1}
                  >
                    {tech}
                  </div>
                ))}
              </CardProject.Tech>
              <CardProject.Button
                demo={project.demo}
                linkGit={project.github}
              />
            </CardProject.Body>
            <CardProject.Figure
              img={project.img}
              classFigure="md:order-2 order-1"
              classImg={`${project.duration}`}
            />
          </CardProject>
        );
      })}
    </>
  );
}

export default ProjectNew;

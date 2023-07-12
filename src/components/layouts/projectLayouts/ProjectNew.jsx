import React from "react";
import CardProject from "../../fragments/projectfragments/CardProject";

function ProjectNew() {
  return (
    <>
      <h1 className="text-3xl">Project</h1>
      <CardProject>
        <CardProject.Figure img="../../assets/img/project-ecommerce.png" />
        <CardProject.Body>
          <CardProject.Title>Ecommerce</CardProject.Title>
          <CardProject.Ception>
            Lorem ipsum dolor sit consectetur adipisicing elit. Earum fuga porro
            architecto eius provident iusto maxime officia animi inventore.
          </CardProject.Ception>
          <CardProject.Tech>
            <div className="border py-1 px-5 shadow-xl">TAILWIND</div>
            <div className="border py-1 px-5 shadow-xl">DAISY UI</div>
          </CardProject.Tech>
          <CardProject.Button
            demo="https://eccomerce-store-wse.netlify.app"
            linkGit="https://github.com/goncang1512/ecommerce-project"
          />
        </CardProject.Body>
      </CardProject>

      <CardProject>
        <CardProject.Body classBody="body-card">
          <CardProject.Title>Web Kasir</CardProject.Title>
          <CardProject.Ception>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            cupiditate quos esse fugit repellendus at?
          </CardProject.Ception>
          <CardProject.Tech>
            <div className="border py-1 px-5 shadow-xl">REACT</div>
            <div className="border py-1 px-5 shadow-xl">REACT BOOTSTRAP</div>
          </CardProject.Tech>
          <CardProject.Button
            demo="https://web-kasir-mhdgoncang.netlify.app/"
            linkGit="https://github.com/goncang1512/website-kasir"
          />
        </CardProject.Body>
        <CardProject.Figure
          img="../../assets/img/project-webkasir.png"
          classFigure="figure-card"
        />
      </CardProject>

      <CardProject>
        <CardProject.Figure img="../../assets/img/project-webkasir.png" />
        <CardProject.Body>
          <CardProject.Title>Ecommerce</CardProject.Title>
          <CardProject.Ception>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
            inventore.
          </CardProject.Ception>
          <CardProject.Tech>
            <div className="border py-1 px-5 shadow-xl">TAILWIND</div>
            <div className="border py-1 px-5 shadow-xl">REACT</div>
          </CardProject.Tech>
          <CardProject.Button
            linkGit="https://unsplash.com/photos/a3vDd8hzuYs"
            demo="https://github.com/goncang1512/website-kasir"
          />
        </CardProject.Body>
      </CardProject>
    </>
  );
}

export default ProjectNew;

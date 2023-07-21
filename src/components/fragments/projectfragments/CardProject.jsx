import React from "react";
import LinkDemo from "../../elements/projectelements/LinkDemo";
import { AiFillGithub } from "react-icons/ai";
import { RiShareBoxFill } from "react-icons/ri";

// Card container
function CardProject(props) {
  const { children } = props;
  return (
    <div className="bg-white mt-5 flex">
      <div className="item-ptoject w-full">
        <div className="card-newproject rounded-xl bg-white border shadow-xl">
          {children}
        </div>
      </div>
    </div>
  );
}

// Foto card project
const Figure = (props) => {
  const { img, classFigure, classImg } = props;
  return (
    <>
      <figure className={`${classFigure} my-5 ml-5`}>
        <img
          src={img}
          alt="Album"
          className={`${classImg} ease-in  image-album rounded-xl h-96 object-cover border drop-shadow-md`}
        />
      </figure>
    </>
  );
};

// Body dari title, ception, tech dan tombol
const Body = (props) => {
  const { children, classBody } = props;
  return (
    <div
      className={`${classBody} card-ception flex flex-col justify-center h-full gap-7 p-5`}
    >
      {children}
    </div>
  );
};

// Title card
const Title = (props) => {
  const { children } = props;
  return (
    <div>
      <h2 className="font-bold text-center text-xl">{children}</h2>
    </div>
  );
};

// Ception card
const Ception = (props) => {
  const { children } = props;
  return (
    <>
      <p className="ception-project text-gray-500">{children}</p>
    </>
  );
};

// Teknologi/tech stack card
const Tech = (props) => {
  const { children } = props;
  return (
    <div className="flex justify-center flex-wrap gap-5 w-full">{children}</div>
  );
};

// Tombol card
const Button = (props) => {
  const { linkGit, demo } = props;
  return (
    <div className="flex justify-center items-center gap-5 mt-5">
      <LinkDemo link={linkGit}>
        Code <AiFillGithub size="30" />
      </LinkDemo>
      <LinkDemo link={demo}>
        Live Demo <RiShareBoxFill size="30" />
      </LinkDemo>
    </div>
  );
};

CardProject.Body = Body;
CardProject.Figure = Figure;
CardProject.Title = Title;
CardProject.Ception = Ception;
CardProject.Tech = Tech;
CardProject.Button = Button;

export default CardProject;

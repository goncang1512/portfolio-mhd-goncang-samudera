import React from "react";
import LinkDemo from "../../elements/projectelements/LinkDemo";
import { AiFillGithub } from "react-icons/ai";
import { RiShareBoxFill } from "react-icons/ri";

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

const Figure = (props) => {
  const { img, classFigure } = props;
  return (
    <>
      <figure className={`${classFigure} my-5 ml-5`}>
        <img
          src={img}
          alt="Album"
          className="image-album rounded-xl h-96 object-cover"
        />
      </figure>
    </>
  );
};

const Body = (props) => {
  const { children, classBody } = props;
  return (
    <div
      className={`${classBody} card-ception flex h-full flex-col justify-center gap-7 p-5`}
    >
      {children}
    </div>
  );
};

const Title = (props) => {
  const { children } = props;
  return (
    <div>
      <h2 className="font-bold text-center">{children}</h2>
    </div>
  );
};

const Ception = (props) => {
  const { children } = props;
  return (
    <>
      <p className="w-80">{children}</p>
    </>
  );
};

const Tech = (props) => {
  const { children } = props;
  return (
    <div className="flex justify-center gap-5 flex-wrap max-w-xs">
      {children}
    </div>
  );
};

const Button = (props) => {
  const { linkGit, demo } = props;
  return (
    <div className="flex justify-center gap-5 mt-5 ">
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

import React, { useEffect } from "react";
import LinkDemo from "../../elements/projectelements/LinkDemo";
import { AiFillGithub } from "react-icons/ai";
import { RiShareBoxFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

// Card container
function CardProject(props) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const { children, dataAos } = props;
  return (
    <div
      className="bg-white mt-5 flex rounded-xl w-full"
      data-aos={dataAos}
      data-aos-easing="ease-out"
    >
      <div className="w-full">
        <div className="flex md:flex-row flex-col rounded-xl bg-white border shadow-xl">
          {children}
        </div>
      </div>
    </div>
  );
}

const ProTitle = (props) => {
  const { dataAni, children } = props;
  return (
    <>
      <h1 className="text-3xl" data-aos={dataAni}>
        {children}
      </h1>
    </>
  );
};

// Foto card project
const Figure = (props) => {
  const { img, classFigure, classImg } = props;
  return (
    <>
      <figure className={`${classFigure} pr-4 my-5 ml-5`}>
        <img
          src={img}
          alt="Album"
          className={`${classImg} md:w-575 w-full h-96 rounded-xl  object-cover border drop-shadow-md cursor-pointer ease-in-out transition-all object-top hover:object-bottom`}
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
      className={`${classBody} flex flex-col justify-between md:h-96 h-full gap-7 p-5`}
    >
      {children}
    </div>
  );
};

// Title card
const Title = (props) => {
  const { children, classTitle } = props;
  return (
    <div>
      <h2 className={`${classTitle} font-bold text-center text-xl`}>
        {children}
      </h2>
    </div>
  );
};

// Ception card
const Ception = (props) => {
  const { children } = props;
  return (
    <>
      <p className="md:w-80 w-full text-gray-500 text-center text-md">
        {children}
      </p>
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

CardProject.ProTitle = ProTitle;
CardProject.Body = Body;
CardProject.Figure = Figure;
CardProject.Title = Title;
CardProject.Ception = Ception;
CardProject.Tech = Tech;
CardProject.Button = Button;

export default CardProject;

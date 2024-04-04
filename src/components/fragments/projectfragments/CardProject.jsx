/* eslint-disable react/prop-types */
import { useEffect } from "react";
import LinkDemo from "../../elements/projectelements/LinkDemo";
import { AiFillGithub } from "react-icons/ai";
import { RiShareBoxFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

// Card container
function CardProject({ children, dataAos }) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      className="flex w-full mt-5 bg-white rounded-xl"
      data-aos={dataAos}
      data-aos-easing="ease-out"
    >
      <div className="w-full">
        <div className="flex flex-col bg-white border shadow-xl md:flex-row rounded-xl">
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
      <figure className={`${classFigure} pr-10 md:pr-4 my-5 ml-5 w-full`}>
        <img
          src={img}
          alt="Album"
          className={`${classImg} w-full h-96 rounded-xl  object-cover border drop-shadow-md cursor-pointer linear transition-all object-top hover:object-bottom`}
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
      className={`${classBody} flex flex-col justify-between items-center md:h-96 h-full gap-7 p-5 w-full`}
    >
      {children}
    </div>
  );
};

// Title card
const Title = (props) => {
  const { children, classTitle, classJudul } = props;
  return (
    <div className={`${classJudul}`}>
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
      <p className="w-full text-center text-gray-500 md:w-full text-md">
        {children}
      </p>
    </>
  );
};

// Teknologi/tech stack card
const Tech = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-wrap justify-center w-full gap-5">{children}</div>
  );
};

// Tombol card
const Button = (props) => {
  const { linkGit, demo } = props;
  return (
    <div className="flex items-center justify-center gap-5 mt-5">
      {/* Tambahkan kondisi untuk menampilkan tombol Code */}
      {linkGit && (
        <LinkDemo link={linkGit}>
          Code <AiFillGithub size="30" />
        </LinkDemo>
      )}
      {/* Tambahkan kondisi untuk menampilkan tombol Live Demo */}
      {demo && (
        <LinkDemo link={demo}>
          Live Demo <RiShareBoxFill size="30" />
        </LinkDemo>
      )}
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

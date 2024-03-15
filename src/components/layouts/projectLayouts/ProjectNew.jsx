import CardProject from "../../fragments/projectfragments/CardProject";

const dataProject = [
  {
    id: 1,
    title: "Eccomerce",
    img: "../../assets/img/Store-page.jpg",
    ception:
      "Ini merupakan project untuk belajar feth API untuk saya dengan Fake Store Api. Yang menggunakan Tailwind CSS dan daisyui.",
    stack: ["TAILWIND CSS", "DAISY UI"],
    demo: "https://eccomerce-store-wse.netlify.app",
    github: "https://github.com/goncang1512/ecommerce-project",
  },
  {
    id: 2,
    title: "Web Kasir",
    img: "../../assets/img/project-web-kasir.jpg",
    ception:
      "Ini adalah sebuah proyek website kasir yang berguna untuk menghitung dan menerima pesanan makanan, namun hanya dapat digunakan di sisi kasir.",
    stack: ["REACT", "REACT BOOTSTRAP"],
    demo: "https://web-kasir-mhdgoncang.netlify.app/",
    github: "https://github.com/goncang1512/website-kasir",
  },
  {
    id: 3,
    title: "Portfolio Pribadi",
    img: "../../assets/img/Portfolio-old.jpg",
    ception:
      "Ini merupakan project portfolio pertama saya menggunakan react js dan tidak menggunakan css framework. Ini semua menggunakan css murni.",
    stack: ["REACT"],
    demo: "https://portfolio-mhdgoncang-f593c6.netlify.app/",
    github: "https://github.com/goncang1512/portfolio-mhdgoncang",
  },
  {
    id: 4,
    title: "Library Komponen",
    img: "../../assets/img/Library-web.jpg",
    ception:
      "Ini merupakan website yang saya buat untuk menyimpan komponen komponen website yang pernah saya gunakan sebelumya. Yang menggunakan Tailwind CSS dan react.",
    stack: ["REACT", "TAILWIND CSS"],
    demo: "https://library-goncang.netlify.app/",
    github: "https://github.com/goncang1512/library-goncang",
  },
];

function ProjectNew() {
  return (
    <>
      <CardProject.ProTitle dataAni="fade-right">Project</CardProject.ProTitle>

      {dataProject.map((project, index) => {
        return index % 2 === 0 ? (
          <CardProject dataAos="fade-right" key={project.id}>
            <CardProject.Figure img={project.img} classImg="duration-14000" />
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
              classImg="duration-6000"
            />
          </CardProject>
        );
      })}
    </>
  );
}

export default ProjectNew;

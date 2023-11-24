import React from "react";
import CardProject from "../../fragments/projectfragments/CardProject";

function ProjectNew() {
  return (
    <>
      <CardProject.ProTitle dataAni="fade-right">Project</CardProject.ProTitle>

      <CardProject dataAos="fade-right">
        <CardProject.Figure
          img="../../assets/img/Store-page.jpg"
          classImg="duration-14000"
        />
        <CardProject.Body>
          <CardProject.Title>Ecommerce</CardProject.Title>
          <CardProject.Ception>
            Ini merupakan project untuk belajar feth API untuk saya dengan Fake
            Store Api. Yang menggunakan Tailwind CSS dan daisyui.
          </CardProject.Ception>
          <CardProject.Tech>
            <div className='border py-1 px-5 shadow-xl relative'>TAILWIND CSS</div>
            <div className="border py-1 px-5 shadow-xl relative">DAISY UI</div>
          </CardProject.Tech>
          <CardProject.Button
            demo="https://eccomerce-store-wse.netlify.app"
            linkGit="https://github.com/goncang1512/ecommerce-project"
          />
        </CardProject.Body>
      </CardProject>

      <CardProject dataAos="fade-left">
        <CardProject.Body classBody="md:order-1 order-2">
          <CardProject.Title>Web Kasir</CardProject.Title>
          <CardProject.Ception>
            Ini adalah sebuah proyek website kasir yang berguna untuk menghitung
            dan menerima pesanan makanan, namun hanya dapat digunakan di sisi
            kasir. 
          </CardProject.Ception>
          <CardProject.Tech>
            <div className="border py-1 px-5 shadow-xl relative">REACT</div>
            <div className="border py-1 px-5 shadow-xl relative">REACT BOOTSTRAP</div>
          </CardProject.Tech>
          <CardProject.Button
            demo="https://web-kasir-mhdgoncang.netlify.app/"
            linkGit="https://github.com/goncang1512/website-kasir"
          />
        </CardProject.Body>
        <CardProject.Figure
          img="../../assets/img/project-web-kasir.jpg"
          classFigure="md:order-2 order-1"
          classImg="duration-6000"
        />
      </CardProject>

      <CardProject dataAos="fade-right">
        <CardProject.Figure
          img="../../assets/img/Portfolio-old.jpg"
          classImg="duration-12000"
        />
        <CardProject.Body>
          <CardProject.Title>Portfolio Pribadi</CardProject.Title>
          <CardProject.Ception>
            Ini merupakan project portfolio pertama saya menggunakan react js
            dan tidak menggunakan css framework. Ini semua menggunakan css
            murni.
          </CardProject.Ception>
          <CardProject.Tech>
            <div className="border py-1 px-5 shadow-xl relative">REACT</div>
          </CardProject.Tech>
          <CardProject.Button
            linkGit="https://github.com/goncang1512/portfolio-mhdgoncang"
            demo="https://portfolio-mhdgoncang-f593c6.netlify.app/"
          />
        </CardProject.Body>
      </CardProject>

      <CardProject dataAos="fade-left">
        <CardProject.Body classBody="md:order-1 order-2">
          <CardProject.Title>Library Komponen</CardProject.Title>
          <CardProject.Ception>
            Ini merupakan website yang saya buat untuk menyimpan komponen
            komponen website yang pernah saya gunakan sebelumya. Yang
            menggunakan Tailwind CSS dan react.
          </CardProject.Ception>
          <CardProject.Tech>
            <div className="border py-1 px-5 shadow-xl relative">REACT</div>
            <div className="border py-1 px-5 shadow-xl relative">TAILWIND CSS</div>
          </CardProject.Tech>
          <CardProject.Button
            demo="https://library-goncang.netlify.app/"
            linkGit="https://github.com/goncang1512/library-goncang"
          />
        </CardProject.Body>
        <CardProject.Figure
          img="../../assets/img/Library-web.jpg"
          classFigure="md:order-2 order-1"
          classImg="duration-12000"
        />
      </CardProject>
    </>
  );
}

export default ProjectNew;

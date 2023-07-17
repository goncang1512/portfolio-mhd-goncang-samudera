import React from "react";
import CardProject from "../../fragments/projectfragments/CardProject";

function ProjectNew() {
  return (
    <>
      <h1 className="text-3xl">Project</h1>
      <CardProject>
        <CardProject.Figure img="../../assets/png/Store-page.png" />
        <CardProject.Body>
          <CardProject.Title>Ecommerce</CardProject.Title>
          <CardProject.Ception>
            Project ini merupakan website usaha yang bisa search dan membeli
            barang tapi website ini hanya dapat membeli barang belum bisa untuk
            menjual barang. Dan teknologi yang di gunakan adalah tailwind dengan
            komponen dari daisy ui. (belum selesai)
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
            Ini adalah sebuah proyek website kasir yang berguna untuk menghitung
            dan menerima pesanan makanan, namun hanya dapat digunakan di sisi
            kasir. Selain itu, website ini juga dapat menjadi platform untuk
            memperkenalkan usaha makanan Anda. (belum selesai)
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
          img="../../assets/png/project-web-kasir.png"
          classFigure="figure-card"
          classImg="img-transition"
        />
      </CardProject>

      <CardProject>
        <CardProject.Figure img="../../assets/png/Portfolio-old.png" />
        <CardProject.Body>
          <CardProject.Title>Portfolio Pribadi</CardProject.Title>
          <CardProject.Ception>
            Ini merupakan project portfolio pertama saya menggunakan react js
            dan tidak menggunakan css framework. Ini semua menggunakan css
            murni.
          </CardProject.Ception>
          <CardProject.Tech>
            <div className="border py-1 px-5 shadow-xl">REACT</div>
          </CardProject.Tech>
          <CardProject.Button
            linkGit="https://github.com/goncang1512/portfolio-mhdgoncang"
            demo="https://portfolio-mhdgoncang-f593c6.netlify.app/"
          />
        </CardProject.Body>
      </CardProject>
    </>
  );
}

export default ProjectNew;

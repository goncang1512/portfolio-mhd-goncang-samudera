import React from "react";
import CardProject from "../../fragments/projectfragments/CardProject";

function ProjectNew() {
  return (
    <>
      <h1 className="text-3xl">Project</h1>
      <CardProject>
        <CardProject.Figure
          img="../../assets/png/Store-page.png"
          classImg="duration-14000"
        />
        <CardProject.Body>
          <CardProject.Title>Ecommerce</CardProject.Title>
          <CardProject.Ception>
            Project ini merupakan website usaha yang bisa search dan membeli
            barang tapi website ini hanya dapat membeli barang belum bisa untuk
            menjual barang. Dan teknologi yang di gunakan adalah tailwind dengan
            komponen dari daisy ui. Dan website ini juga untuk bejar fetch API.
            (belum selesai)
          </CardProject.Ception>
          <CardProject.Tech>
            <div className="border py-1 px-5 shadow-xl">TAILWIND CSS</div>
            <div className="border py-1 px-5 shadow-xl">DAISY UI</div>
          </CardProject.Tech>
          <CardProject.Button
            demo="https://eccomerce-store-wse.netlify.app"
            linkGit="https://github.com/goncang1512/ecommerce-project"
          />
        </CardProject.Body>
      </CardProject>

      <CardProject>
        <CardProject.Body classBody="md:order-1 order-2">
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
          classFigure="md:order-2 order-1"
          classImg="duration-6000"
        />
      </CardProject>

      <CardProject>
        <CardProject.Figure
          img="../../assets/png/Portfolio-old.png"
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
            <div className="border py-1 px-5 shadow-xl">REACT</div>
          </CardProject.Tech>
          <CardProject.Button
            linkGit="https://github.com/goncang1512/portfolio-mhdgoncang"
            demo="https://portfolio-mhdgoncang-f593c6.netlify.app/"
          />
        </CardProject.Body>
      </CardProject>

      <CardProject>
        <CardProject.Body classBody="md:order-1 order-2">
          <CardProject.Title>Library Komponen</CardProject.Title>
          <CardProject.Ception>
            Ini merupakan website yang saya buat untuk menyimpan komponen
            komponen website yang pernah saya gunakan sebelumya. Yang
            menggunakan Tailwind CSS dan react. Sedangkan untuk contact di kirim
            pesan nya saya menggunakan emailjs untuk mengirim pesannya. (belum
            selesai)
          </CardProject.Ception>
          <CardProject.Tech>
            <div className="border py-1 px-5 shadow-xl">REACT</div>
            <div className="border py-1 px-5 shadow-xl">TAILWIND CSS</div>
          </CardProject.Tech>
          <CardProject.Button
            demo="https://library-goncang.netlify.app/"
            linkGit="https://github.com/goncang1512/library-goncang"
          />
        </CardProject.Body>
        <CardProject.Figure
          img="../../assets/png/Library-web.png"
          classFigure="md:order-2 order-1"
          classImg="duration-12000"
        />
      </CardProject>
    </>
  );
}

export default ProjectNew;

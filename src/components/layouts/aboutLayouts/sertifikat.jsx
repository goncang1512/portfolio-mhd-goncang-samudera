import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Sertifikat() {
  return (
    <div className="flex flex-col gap-3 pt-10">
      <h1 className="text-3xl text-black">Sertifikat</h1>
      <div className="flex justify-center w-full">
        <Carousel
          autoPlay={true}
          interval={4000}
          infiniteLoop={true}
          showStatus={false}
          className="md:w-[55%] w-full text-center flex justify-center items-center flex-col"
        >
          <div className="border">
            <img
              src="/assets/sertifikat/javascript-kursus.jpg"
              alt="sertifikat"
            />
          </div>
          <div className="border">
            <img
              src="/assets/sertifikat/webprogramming-kursus.jpg"
              alt="sertifikat"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

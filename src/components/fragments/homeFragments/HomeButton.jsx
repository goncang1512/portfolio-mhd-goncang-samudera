import HomeSend from "../../elements/homeElements/HomeButton";

function HomeButton() {
  return (
    <>
      <HomeSend to="#contact" classname="text-base rounded-lg p-7">
        Kirim Pesan
      </HomeSend>
      <a href="">
        <button className="hidden py-2 text-base text-center text-blue-600 duration-300 ease-in-out border border-blue-600 rounded-lg trasition-all p-7 hover:scale-105 hover:bg-blue-600 hover:text-white border-x-2">
          Download CV
        </button>
      </a>
    </>
  );
}

export default HomeButton;

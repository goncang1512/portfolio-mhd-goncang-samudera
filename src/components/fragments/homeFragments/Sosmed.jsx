import React from "react";
import SosmedEl from "../../elements/homeElements/SosmedElements";

function Sosmed() {
  return (
    <>
        <SosmedEl
          src="../../assets/svg/instagram-icon.svg"
          link="https://www.instagram.com/mhdgoncang/?igshid=ZDdkNTZiNTM="
        />
      <SosmedEl
        src="../../assets/svg/icons8-linkedin.svg"
        link="https://www.linkedin.com/in/mhd-goncang-samudera-nasution-7a523a292/"
        className="w-[42px]"
      />
        <SosmedEl
          src="../../assets/svg/github-icon.svg"
          link="https://github.com/goncang1512"
        />
    </>
  );
}

export default Sosmed;

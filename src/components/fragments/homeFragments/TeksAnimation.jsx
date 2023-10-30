import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function TeksAnimation() {
  const [text] = useTypewriter({
    words:['developer', 'programmer', 'front-end', 'web development', 'gamer'],
    loop: 1
  })

  return (
    <>
      <h1 className="w-[450px] text-black text-4xl w-full">
        Mhd. Goncang Samudera Nasution
      </h1>
      <div className="text-xl font-semibold text-black">
        I'm a <span className="text-[#147efb]">{text}</span><Cursor/>
      </div>
    </>
  );
}

export default TeksAnimation;

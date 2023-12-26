import React, { useState, useEffect } from "react";
import FiArrowUp from "../assets/img/svg arrow.svg";
import "../App.css";

const Mybacktotop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section>
        <div className="back_to_top ">
          <img className=" fixed animate-bounce w-[35px] bottom-[30px] right-[30px] items-center justify-center z-40 cursor-pointer rounded-[50%] decoration-purple-600 bg-[#51C8EF] py-1 px-1" onClick={scrollTop} style={{ height: 35, display: showScroll ? "flex" : "none" }} src={FiArrowUp} alt="img" />
        </div>
      </section>
    </>
  );
};
export default Mybacktotop;
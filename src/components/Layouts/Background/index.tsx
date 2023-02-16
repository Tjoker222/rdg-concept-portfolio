import { useEffect } from "react";

export const Background = () => {
  useEffect(() => {
    let lFollowX = 0,
      lFollowY = 0,
      x = 0,
      y = 0,
      friction = 1 / 10;

    let topGradient = document.querySelector(`#siteGradientTop`) as HTMLElement;
    let bottomGradient = document.querySelector(
      `#siteGradientBottom`
    ) as HTMLElement;

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    function moveElements() {
      x += (lFollowX - x) * friction;
      y += (lFollowY - y) * friction;

      let moveTop = "translate(-" + x * 10 + "rem, -" + y * 10 + "rem)";
      let moveBottom = "translate(" + x * 10 + "rem, " + y * 10 + "rem)";

      if (windowWidth > 820) {
        topGradient.style.transform = moveTop;
        bottomGradient.style.transform = moveBottom;
      }
      window.requestAnimationFrame(moveElements);
    }

    window.addEventListener("mousemove", (event) => {
      let lMouseX = Math.max(
        -100,
        Math.min(100, windowWidth / 2 - event.clientX)
      );
      let lMouseY = Math.max(
        -100,
        Math.min(100, windowHeight / 2 - event.clientY)
      );
      lFollowX = lMouseX / 100;
      lFollowY = lMouseY / 100;
    });
    moveElements();
  }, []);

  return (
    <div className="h-full w-full fixed top-0 left-0 z-[-1] transition transform delay-1000 ease-out">
      <div
        id="siteGradientTop"
        className="w-[84.3rem] h-[46rem] rounded-full opacity-60 absolute top-[11rem] left-[-6.5rem] blur-[10rem]"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#875be5] to-[#251e62] !bg-[length:200%_200%] ease-out delay-[5s]"></div>
      </div>
      <div
        id="siteGradientBottom"
        className="w-[84.3rem] h-[46rem] rounded-full opacity-60 absolute bottom-[11rem] right-[-6.5rem] blur-[10rem]"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#ff239a] to-[#875be5] !bg-[length:200%_200%] ease-out delay-[5s]"></div>
      </div>
    </div>
  );
};

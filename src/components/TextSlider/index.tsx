import { useEffect } from "react";

export function TextSlider() {
  const textAmount = Array.from({ length: 1000 }, (_, i) => i + 1);;
  useEffect(() => {
    const bigText = document.querySelector(`#textSlider ul`) as HTMLElement;
    const counters = { big: 0 };
    const initial = 0;
    let animation = window.requestAnimationFrame(textDefile);

    function textDefile() {
      if (counters.big < -bigText?.offsetWidth) {
        counters.big = initial;
      } else {
        counters.big -= 1.5;
      }
      bigText.style["left"] = counters.big + "px";
      animation = window.requestAnimationFrame(textDefile);
      return animation;
    }
  }, []);

  return (
    <div
      id="textSlider"
      className="
      w-full
      relative
      overflow-hidden
      h-[6.5rem]
      flex-col
      flex-wrap
      items-center
      justify-center
      uppercase
      flex
      "
    >
      <ul className="w-auto absolute -left-[100vw] z-10 flex items-center justify-center">
        {textAmount.map((text) => (
          <li key={text} className="whitespace-nowrap font-INTER text-style-bold-7xl text-[#c4c4c4]">
            {'EQUIPE < TIME >'}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import gsap from "gsap"

export default () => {
  const refs = {
    wrapper: useRef<HTMLDivElement>(null),
    tooltip: useRef<HTMLDivElement>(null)
  };

  const [hover, setHover] = useState(false);

  useEffect(() => {
    gsap.to(refs.tooltip.current, {
      duration: 0.15,
      ease: "back.out",
      scale: hover ? 1 : 0
    });
  }, [hover]);

  useEffect(() => {
    gsap.to(refs.tooltip.current, {
      delay: 0.2,
      duration: 0,
      opacity: 1
    });
  }, []);

  useEffect(() => {
    const activate = () => setHover(true);
    const deactivate = () => setHover(false);

    refs.wrapper.current?.addEventListener("mouseover", activate);
    refs.wrapper.current?.addEventListener("mouseout", deactivate);

    return () => {
      refs.wrapper.current?.removeEventListener("mouseover", activate);
      refs.wrapper.current?.removeEventListener("mouseout", deactivate);
    }
  }, []);

  return refs;
}
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";

export default function Hero() {
  const titleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
  }, []);

    return <h1 ref={titleRef}>Hallo, ich bin Vassilij</h1>;
    }
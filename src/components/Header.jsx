// Header.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Header() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);

  // open menu with animation
  useEffect(() => {
    if (!open) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlayRef.current,
        { autoAlpha: 0, y: -20 },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }
      );

      gsap.fromTo(
        linksRef.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.12,
          delay: 0.08,
          ease: "power3.out",
        }
      );
    }, overlayRef);

    return () => ctx.revert();
  }, [open]);

  // close menu with animation
  const close = () => {
    if (!overlayRef.current) {
      setOpen(false);
      return;
    }

    gsap.to(overlayRef.current, {
      autoAlpha: 0,
      y: -16,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setOpen(false),
    });
  };

  return (
    <div className="sticky top-0 z-[1000]">
      <header className="px-5 py-5 backdrop-blur-lg [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_85%,rgba(0,0,0,0)_100%)]">
        <div className="flex items-center justify-between">

          {/* desktop nav*/}
          <nav className="hidden md:flex gap-8 w-full justify-between">
            <Link
              to="/"
              className="text-white no-underline text-base hover:text-[#D05353] transition-colors duration-200">
              Home
            </Link>

            <Link
              to="/CV"
              className="text-white no-underline text-base hover:text-[#D05353] transition-colors duration-200">
              CV
            </Link>
          </nav>

          {/* mobile invisible placeholder */}
          <div className="md:hidden w-10" />

          {/* burger menu */}
          <button
            aria-label="Open menu"
            className="md:hidden text-white text-3xl w-10 h-10 flex items-center justify-center"
            onClick={() => setOpen(true)}>
            ☰
          </button>
        </div>
      </header>

      {/* overlay */}
      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center"
          onClick={close}>

          <button
            aria-label="Close menu"
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}>
            ×
          </button>

          <div
            className="px-6 py-8 flex flex-col items-center justify-center gap-8 text-3xl w-full max-w-md"
            onClick={(e) => e.stopPropagation()}>
            <Link
              to="/"
              ref={(el) => (linksRef.current[0] = el)}
              onClick={() => close()}
              className="text-white no-underline hover:text-[#D05353] transition-colors">
              Home
            </Link>

            <Link
              to="/CV"
              ref={(el) => (linksRef.current[1] = el)}
              onClick={() => close()}
              className="text-white no-underline hover:text-[#D05353] transition-colors">
              CV
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

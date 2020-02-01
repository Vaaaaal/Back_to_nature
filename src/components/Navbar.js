import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  let navbar = useRef(null);

  useEffect(() => {
    gsap.from(navbar, 0.6, { y: -100, delay: 2 });
  });

  return (
    <nav className="Navbar" ref={el => (navbar = el)}>
      <h2>Nature.</h2>
      <div className="nav-links">
        <ul>
          <li>S'évader</li>
          <li>Faire découvrir</li>
          <li>Participer</li>
        </ul>
      </div>
    </nav>
  );
}

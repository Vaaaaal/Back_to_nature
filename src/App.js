import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import "./styles.scss";

export default function App() {
  let app = useRef(null);
  let content = useRef(null);
  let image = useRef(null);

  let tl = gsap.timeline({ delay: 0.8 });

  useEffect(() => {
    const h1 = content.children[0].children[0];
    const p = content.children[1].children[0];
    const button = content.children[2].children[0];

    // Removing flash init
    gsap.to(app, 0, { css: { visibility: "visible" } });

    // Animation on starting website
    tl.from(image, 0.8, {
      x: 800,
      ease: "power3.easeOut",
      opacity: 0,
      delay: 0.8
    }).from([h1, p, button], 0.8, {
      y: 70,
      stagger: {
        amount: 0.3
      }
    });
  }, [tl]);

  return (
    <div className="App" ref={el => (app = el)}>
      <Navbar />
      <Container>
        <div className="hero">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => (content = el)}>
              <div className="hero-content-line heading">
                <h1>Redécouvrez la nature</h1>
              </div>
              <div className="hero-content-line para">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="hero-content-line btn">
                <button>En savoir plus</button>
              </div>
            </div>

            <div className="hero-image">
              <div className="hero-image-inner" ref={el => (image = el)}>
                <img
                  src="https://images.unsplash.com/photo-1576078766417-80f4b730120c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80"
                  alt="Nature unsplash"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Faire un carousel GSAP ici */}
      </Container>
    </div>
  );
}

import './style.scss';
import * as bootstrap from 'bootstrap';
import gsap from 'gsap';

document.addEventListener("DOMContentLoaded", () => {
  // Universe Tech Background Animations
  const starfield = document.getElementById("starfield");
  
  if (starfield) {
    // Create stars
    for (let i = 0; i < 60; i++) {
      const star = document.createElement("div");
      star.className = "star";
      
      // Randomize star properties
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.opacity = Math.random();
      
      starfield.appendChild(star);

      // Twinkle animation
      gsap.to(star, {
        opacity: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 2 + 1,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });
    }

    // Create tech scanning lines (shooting stars / data streams)
    for (let i = 0; i < 4; i++) {
      const line = document.createElement("div");
      line.className = "tech-line";
      starfield.appendChild(line);

      function animateLine(el) {
        gsap.set(el, {
          left: "-150px",
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 200 + 50}px`,
          opacity: 0
        });

        gsap.to(el, {
          left: "100%",
          opacity: 1,
          duration: Math.random() * 2 + 1.5,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.delayedCall(Math.random() * 4, () => animateLine(el));
          }
        });
      }
      
      animateLine(line);
    }
  }

  // Initial load animation for UI components
  gsap.from(".cv-page", {
    boxShadow: "0 0 0px rgba(0, 240, 255, 0)",
    borderColor: "rgba(0, 240, 255, 0)",
    duration: 2,
    ease: "power2.out"
  });

  gsap.from(".cv-header", {
    opacity: 0,
    y: -30,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".cv-left", {
    opacity: 0,
    x: -30,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });

  gsap.from(".cv-right", {
    opacity: 0,
    x: 30,
    duration: 1,
    delay: 0.6,
    ease: "power2.out"
  });
});

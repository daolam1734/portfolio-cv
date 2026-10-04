import './style.scss';
import * as bootstrap from 'bootstrap';
import gsap from 'gsap';

document.addEventListener("DOMContentLoaded", () => {
  // GSAP Animations for Chibi Elements
  
  // Bounce animation
  gsap.to(".chibi-bounce", {
    y: -15,
    scale: 1.05,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut"
  });

  // Float animation
  gsap.to(".chibi-float", {
    y: -10,
    rotation: 8,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });

  // Wiggle animation
  gsap.to(".chibi-wiggle", {
    rotation: 15,
    duration: 1.25,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut"
  });

  // Pulse animation
  gsap.to(".chibi-pulse", {
    scale: 1.1,
    opacity: 1,
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut"
  });

  // Optional: Add entrance animation for the main layout
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

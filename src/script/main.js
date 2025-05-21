// Imports
import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Initialization Function
function init() {
  //  Hero Text Animation 
  const heroText = document.querySelectorAll(".hero-text");
  gsap.to(heroText, {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: "power1",
  });

  // Index Cards Scroll Animation 
  const indexCards = document.querySelectorAll(".indexCards");
  indexCards.forEach((section) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        invalidateOnRefresh: true,
        scrub: true,
        pin: section,
      },
    });

    tl.to(section, {
      transformOrigin: "center",
      scale: 0.5,
      duration: 4,
      ease: "power1",
    }).to(section, {
      autoAlpha: 0,
    });
  });

  //  Footer Items Fade In 
  gsap.to(".footer-items", {
    scrollTrigger: {
      trigger: ".lastCard",
      start: "bottom center-=200",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power1",
  });

  //  Footer Section Animation 
  gsap.from(".footer", {
    scrollTrigger: {
      trigger: ".lastCard",
      start: "top center",
      end: "bottom bottom",
      scrub: 0.1,
    },
    opacity: 0,
    duration: 0.2,
  });

  gsap.from(".footerLogo", {
    scrollTrigger: {
      trigger: ".lastCard",
      start: "top top+=100",
      end: "bottom bottom",
      scrub: 1,
    },
    opacity: 0,
  });

  //  Explain Section Animation 
  const explainTitle = document.querySelector(".explain-title");
  const explainText = document.querySelector(".explain-text");
  const explainSection = document.querySelector(".explain-section");

  if (explainSection && explainTitle && explainText) {
    const explainTl = gsap.timeline({
      scrollTrigger: {
        trigger: explainSection,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    explainTl
      .to(explainTitle, {
        y: 0,
        transformOrigin: "center",
        ease: "power1",
      })
      .to(
        explainText,
        {
          y: 0,
          transformOrigin: "center",
          ease: "power1",
        },
        0.3
      );
  }

  //  To The Point Section Animation 
  const toThePointSection = document.querySelector(".to-the-point");
  const toThePointText1 = document.querySelectorAll(".to-the-point-text-1");
  const toThePointText2 = document.querySelectorAll(".to-the-point-text-2");

  if (toThePointSection) {
    const tlToThePoint = gsap.timeline({
      scrollTrigger: {
        trigger: toThePointSection,
        start: "top center+=400",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    tlToThePoint
      .from(toThePointText1, {
        xPercent: 200,
        ease: "power4",
      })
      .from(
        toThePointText2,
        {
          xPercent: -200,
          ease: "power4",
        },
        0
      );
  }
}

// Menu Animation
const menuBtn = document.querySelector(".menuCB");
const menuLinks = document.querySelectorAll(".menulink");

menuBtn?.addEventListener("change", () => {
  if (menuBtn.checked) {
    gsap.from(menuLinks, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power1",
    });
  }
});

// Swup Page Transition
const swup = new Swup({
  plugins: [new SwupHeadPlugin()],
});

swup.hooks.on("content:replace", () => {
  init();
});

// Initial call
init();

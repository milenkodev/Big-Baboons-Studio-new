import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}



function  init() {
  const heroText = document.querySelectorAll(".hero-text");
  gsap.from(heroText, {
    yPercent: 100,
    opacity:0,
    stagger: 0.2,
    duration: 1.5,
    ease: "power1",
  });

  const indexCards = document.querySelectorAll(".indexCards");

  indexCards.forEach((section) => {
    const tlIndexCards = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        invalidateOnRefresh: true,
        scrub: true,
        pin: section,
      },
    });
    tlIndexCards
      .to(
        section,
        {
          transformOrigin: "center",
          scale: 0.5,
          duration: 4,
          ease: "power1",
        },
        0
      )
      .to(section, {
        autoAlpha: 0,
      });
  });


  gsap.to(".footer-items",
    {
      scrollTrigger: {
        trigger: ".lastCard",
        start: "bottom center-=200",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
      },
      y: 0,
      opacity:100,
      duration: 1,
      ease: "power1",
    });


  gsap.from(".footer", {
    scrollTrigger: {
      trigger: ".lastCard",
      start: "top center",
      end: "bottom bottom",
      scrub: 0.1,
      // markers: true,
    },
    opacity: 0,
    display: "hidden",
    duration: 0.2,
  });

  gsap.from(".footerLogo", {
    scrollTrigger: {
      trigger: ".lastCard",
      start: "top top+=100",
      end: "bottom bottom",
      scrub: 1,
      // markers: true,
    },
    opacity: 0,
  });

  const explainTitle = document.querySelector(".explain-title");
  const explainText = document.querySelector(".explain-text");
  const explainSection = document.querySelector(".explain-section");

  const explainTl = gsap.timeline({
    scrollTrigger: {
      trigger: explainSection,
      start: "top center",
      end: "bottom bottom",
      scrub: 1,
      // markers: true,
    },
  });



  explainTl
    .from(
      explainTitle,
      {
        yPercent: 100,
        transformOrigin: "center",
        ease: "power1",
      },
      0
    )
    .from(
      explainText,
      {
        yPercent: 100,
        transformOrigin: "center",
        // duration: 1.5,
        ease: "power1",
      },
      0.3
    );

  const toThePointSection = document.querySelector(".to-the-point");
  const toThePointText = document.querySelectorAll(".to-the-point-text-1");
  const toThePointText2 = document.querySelectorAll(".to-the-point-text-2");

  const tlttp = gsap.timeline({
    scrollTrigger: {
      trigger: toThePointSection,
      start: "top center+=400",
      end: "bottom bottom",
      scrub: 2,
      // markers: true,
    },
  });

  tlttp
    .from(
      toThePointText,
      {
        xPercent: 200,

        ease: "power4",
      },
      0
    )
    .from(
      toThePointText2,
      {
        xPercent: -200,
        ease: "power4",
      },
      0
    );
};
init();


if (!isSafari()) {
// Page transition
const swup = new Swup({ plugins: [new SwupHeadPlugin({})] });

  swup.hooks.on("content:replace", () => {
    init();
  });
}
// Set init() as callback for Swup hooks



// Menu links animation 
const menuBtn = document.querySelector(".menuCB");
const menuLinks = document.querySelectorAll(".menulink");

menuBtn?.addEventListener("change", () => {
  if ((menuBtn).checked) {
      gsap.from(menuLinks, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.2,
          scrub: true,
          ease: "power1",
      });
  }
});
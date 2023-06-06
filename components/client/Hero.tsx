"use client";

import Arches from "@/components/icons/Arches";
import Image from "next/image";
import coOrds from "@/public/assets/images/category/category_img_shirt.jpg";
import accessories from "@/public/assets/images/category/category_img_Accessories.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import {
  CategoriesWatermarkCenter,
  CategoriesWatermarkOuter,
  ScrollArrow,
  CategoryArrowRight,
} from "@/components/icons/Icons";

import Link from "next/link";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const categoryCoOrdsRef = useRef<HTMLDivElement>(null);
  const categoryAccessoriesRef = useRef<HTMLDivElement>(null);
  const coOrdsRef = useRef<HTMLImageElement>(null);
  const accessoriesRef = useRef<HTMLImageElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const accessoriesArrowRef = useRef<HTMLAnchorElement>(null);
  const coOrdsArrowRef = useRef<HTMLAnchorElement>(null);
  const archesRef = useRef<HTMLDivElement>(null);
  const scrollPromoRef = useRef<HTMLDivElement>(null);
  const CoOrdsRefMain = useRef<HTMLDivElement>(null);
  const AccessoriesRefMain = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tlHero = gsap.timeline();

    tlHero.fromTo(
      ".one",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      }
    );
    tlHero.fromTo(
      ".two",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      }
    );
    tlHero.fromTo(
      ".three",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      }
    );
    tlHero.fromTo(
      ".four",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      }
    );

    tlHero.fromTo(
      categoryCoOrdsRef.current,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );

    tlHero.fromTo(
      archesRef.current,
      {
        clipPath: "circle(0% at 50% 50%)",
        opacity: 0,
      },
      {
        clipPath: "circle(100% at 50% 50%)",
        duration: 1,
        opacity: 1,
        ease: "power2.out",
      }
    );

    tlHero.fromTo(
      watermarkRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power2.out",
      }
    );

    tlHero.fromTo(
      scrollPromoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power2.out",
      }
    );

    const tlScrollOne = gsap.timeline();

    tlScrollOne.fromTo(
      categoryCoOrdsRef.current,
      {
        width: "33.4vw",
        borderRadius: "1000px 1000px 0 0",
      },
      {
        width: "100vw",
        borderRadius: "0 0 0 0",
        scrollTrigger: {
          trigger: CoOrdsRefMain.current,
          //markers: true,
          start: "top 180px",
          end: "+=180",
          scrub: true,
        },
      }
    );

    tlScrollOne.fromTo(
      categoryCoOrdsRef.current,
      {},
      {
        scrollTrigger: {
          trigger: CoOrdsRefMain.current,
          //markers: true,
          start: "top top",
          end: "1400px top",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      }
    );

    const tlScrollTwo = gsap.timeline();
    tlScrollTwo.fromTo(
      categoryAccessoriesRef.current,
      {
        width: "33.4vw",
        borderRadius: "1000px 1000px 0 0",
      },
      {
        width: "100vw",
        borderRadius: "0 0 0 0",
        scrollTrigger: {
          trigger: AccessoriesRefMain.current,
          //markers: true,
          start: "top 180px",
          end: "+=180",
          scrub: true,
        },
      }
    );

    tlScrollOne.fromTo(
      categoryAccessoriesRef.current,
      {},
      {
        scrollTrigger: {
          trigger: AccessoriesRefMain.current,
          //markers: true,
          start: "top top",
          end: "800px top",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      }
    );
    tlScrollOne.fromTo(
      categoryAccessoriesRef.current,
      {},
      {
        borderRadius: "0 0 1000px 1000px",
        scrollTrigger: {
          trigger: AccessoriesRefMain.current,
          //markers: true,
          start: "752px bottom",
          end: "1000px bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="arches-container" ref={archesRef}>
        <Arches />
      </div>
      <div className="category-watermark-container" ref={watermarkRef}>
        <CategoriesWatermarkCenter />
        <CategoriesWatermarkOuter />
      </div>
      <div className="scroll-promoter-container" ref={scrollPromoRef}>
        <p>scroll</p>
        <ScrollArrow />
      </div>
      <div className="category_co-ords_main" ref={CoOrdsRefMain}>
        <div className="category_co-ords_container" ref={categoryCoOrdsRef}>
          <Image
            fill
            src={coOrds}
            style={{ objectFit: "cover" }}
            alt="footer-logo"
            ref={coOrdsRef}
          />
        </div>
      </div>
      <div className="link-container">
        <Link href="#" ref={coOrdsArrowRef} className="coOrdsArrowRef">
          <p>co-ords</p>
          <CategoryArrowRight />
        </Link>
      </div>
      <div className="category_accessories_main" ref={AccessoriesRefMain}>
        <div
          className="category_accessories_container"
          ref={categoryAccessoriesRef}
        >
          <Image
            fill
            src={accessories}
            style={{ objectFit: "cover" }}
            alt="footer-logo"
            ref={accessoriesRef}
          />
        </div>
      </div>
      <div className="link-container">
        <Link
          href="#"
          ref={accessoriesArrowRef}
          className="accessoriesArrowRef"
        >
          <p>accessories</p>
          <CategoryArrowRight />
        </Link>
      </div>
      <h3 className="stitchingImpact">
        <span className="one">stitching</span>{" "}
        <span className="two">impact</span>
      </h3>
      <h3 className="throughLives">
        <span className="three">through</span>{" "}
        <span className="four">lives</span>
      </h3>
    </section>
  );
};

export default Hero;

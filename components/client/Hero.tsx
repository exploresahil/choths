"use client";

import Arches from "@/components/icons/Arches";
import Image from "next/image";
import shirt from "@/public/assets/images/category/category_img_shirt.jpg";
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
  const shirtRef = useRef<HTMLImageElement>(null);
  const accessoriesRef = useRef<HTMLImageElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const accessoriesArrowRef = useRef<HTMLAnchorElement>(null);
  const coOrdsArrowRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      categoryCoOrdsRef.current,
      {
        width: "33.4vw",
        height: "100vh",
        borderRadius: "1000px 1000px 0 0",
      },
      {
        width: "100vw",
        height: "250vh",
        borderRadius: "0",

        scrollTrigger: {
          trigger: heroRef.current,
          //markers: true,
          start: "top 160px",
          end: "380px center",
          scrub: 0.1,
        },
      }
    );

    gsap.fromTo(
      coOrdsArrowRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: heroRef.current,
          //markers: true,
          start: "top 160px",
          end: "380px center",
          scrub: 0.1,
        },
      }
    );

    gsap.fromTo(
      shirtRef.current,
      {
        objectPosition: "center",
      },
      {
        objectPosition: "top",
        scrollTrigger: {
          trigger: heroRef.current,
          //markers: true,
          start: "top 160px",
          end: "bottom bottom",
          scrub: 0.1,
        },
      }
    );

    gsap.fromTo(
      categoryCoOrdsRef.current,
      {},
      {
        borderRadius: "0 0 1000px 1000px ",

        scrollTrigger: {
          trigger: heroRef.current,
          //markers: true,
          start: "1800px center",
          end: "2800px center",
          scrub: 0.1,
        },
      }
    );

    gsap.fromTo(
      categoryAccessoriesRef.current,
      {
        width: "33.4vw",
        height: "100vh",
        borderRadius: "1000px 1000px 0 0",
      },
      {
        width: "100vw",
        height: "180vh",
        borderRadius: "0",

        scrollTrigger: {
          trigger: heroRef.current,
          //markers: true,
          start: "1100px center",
          end: "1500px center",
          scrub: 0.1,
        },
      }
    );

    gsap.fromTo(
      accessoriesArrowRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: heroRef.current,
          //markers: true,
          start: "1100px center",
          end: "1500px center",
          scrub: 0.1,
        },
      }
    );

    gsap.fromTo(
      accessoriesRef.current,
      {
        objectPosition: "center",
      },
      {
        objectPosition: "50% 90%",
        scrollTrigger: {
          trigger: heroRef.current,
          //markers: true,
          start: "top 160px",
          end: "bottom bottom",
          scrub: 0.1,
        },
      }
    );

    gsap.fromTo(
      categoryAccessoriesRef.current,
      {},
      {
        borderRadius: "0 0 1000px 1000px ",

        scrollTrigger: {
          trigger: heroRef.current,
          //markers: true,
          start: "1800px center",
          end: "2800px center",
          scrub: 0.1,
        },
      }
    );

    const tl = gsap.timeline();

    tl.fromTo(
      watermarkRef.current,
      {
        fill: "#ad6e4d",
        opacity: "1",
      },
      {
        fill: "#ffffff",
        opacity: "1",
        scrollTrigger: {
          trigger: heroRef.current,
          //markers: true,
          start: "top 110px",
          end: "100px 110px",
          scrub: 0.1,
        },
      }
    );
    tl.fromTo(
      watermarkRef.current,
      {
        opacity: "1",
      },
      {
        opacity: "0",
        scrollTrigger: {
          trigger: heroRef.current,
          //markers: true,
          start: () => `bottom-=100px bottom`,
          end: "bottom bottom",
          scrub: 0.1,
        },
      }
    );
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="arches-container">
        <Arches />
      </div>
      <div className="category-watermark-container" ref={watermarkRef}>
        <CategoriesWatermarkCenter />
        <CategoriesWatermarkOuter />
      </div>
      <div className="scroll-promoter-container">
        <p>scroll</p>
        <ScrollArrow />
      </div>

      <div className="category_co-ords_container" ref={categoryCoOrdsRef}>
        <Image
          fill
          src={shirt}
          style={{ objectFit: "cover" }}
          alt="footer-logo"
          ref={shirtRef}
        />
        <Link href="#" ref={coOrdsArrowRef}>
          <p>co-ords</p>
          <CategoryArrowRight />
        </Link>
      </div>
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
        <Link href="#" ref={accessoriesArrowRef}>
          <p>accessories</p>
          <CategoryArrowRight />
        </Link>
      </div>

      <h3>stitching impact</h3>
      <h3>
        through <span>lives</span>
      </h3>
    </section>
  );
};

export default Hero;

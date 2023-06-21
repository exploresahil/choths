"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import CircularSlider from "@fseehawer/react-circular-slider";
import { useEffect } from "react";
import Link from "next/link";

import {
  AboutLine,
  CategoriesWatermarkCenter,
  CategoriesWatermarkOuter,
  CircularText,
  MissionArrow,
  ScrollArrow,
  SolutionImpactLogo,
  SolutionScrollLine,
  FoundersInsta,
  FoundersLinkedin,
  SanyuktaHeader,
  AmodHeader,
  HetalHeader,
} from "@/components/icons/Icons";

import AboutBg from "@/public/assets/images/about/AboutBg.png";
import AboutWindowShirt from "@/public/assets/images/about/AboutWindowShirt.png";
import SolutionBg from "@/public/assets/images/about/SolutionBg.png";
import Amod from "@/public/assets/images/founders/Amod.png";
import Hetal from "@/public/assets/images/founders/Hetal.png";
import Sanyukta from "@/public/assets/images/founders/Sanyukta.png";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tlAbout = gsap.timeline();
    const tlSolution = gsap.timeline();

    tlAbout.fromTo(
      ".about-section",
      {},
      {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top top",
          end: "1650vh top",
          scrub: true,
          // markers: true,
          pin: true,
        },
      }
    );

    tlAbout.fromTo(
      ".about-bg-container",
      {
        width: "50vw",
      },
      {
        width: "30vw",
        scrollTrigger: {
          trigger: ".about-bg-container",
          // markers: true,
          start: "top top",
          end: "1800px top",
          scrub: true,
        },
      }
    );

    tlAbout.fromTo(
      ".about-content",
      {
        width: "50vw",
      },
      {
        width: "70vw",
        y: "-1200px",
        scrollTrigger: {
          trigger: "#about-bg-container",
          // markers: true,
          start: "top top",
          end: "1600px top",
          scrub: true,
        },
      }
    );

    tlAbout.fromTo(
      ".about-content-main",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: "#about-bg-container",
          // markers: true,
          start: "top top",
          end: "400px top",
          scrub: true,
        },
      }
    );

    tlAbout.fromTo(
      ".about-percent-one",
      {
        y: 500,
      },
      {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#about-bg-container",
          // markers: true,
          start: "top top",
          end: "300px top",
          scrub: true,
        },
      }
    );

    tlAbout.fromTo(
      ".about-percent-two",
      {
        y: 600,
      },
      {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#about-bg-container",
          // markers: true,
          start: "100px top",
          end: "400px top",
          scrub: true,
        },
      }
    );

    tlAbout.fromTo(
      ".about-percent-three",
      {
        y: 700,
      },
      {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#about-bg-container",
          // markers: true,
          start: "200px top",
          end: "500px top",
          scrub: true,
        },
      }
    );

    tlAbout.fromTo(
      ".about-window-container",
      {
        width: "25vw",
        height: "50vh",
        right: 0,
        borderRadius: "1000px 1000px 0 0",
        top: 0,
      },
      {
        width: "100vw",
        height: "110vh",
        right: "15vw",
        borderRadius: "0 0 0 0",
        top: "15.1vh",
        scrollTrigger: {
          trigger: ".about-window-container",
          // markers: true,
          start: "center+=18vh center",
          end: "bottom+=20vh center",
          scrub: true,
        },
      }
    );

    tlSolution.fromTo(
      ".solution-section",
      {},
      {
        scrollTrigger: {
          trigger: ".solution-section",
          // markers: true,
          start: "top top",
          end: "2200px bottom",
          scrub: true,
        },
      }
    );

    tlSolution.fromTo(
      ".solution-main",
      {
        x: 0,
      },
      {
        x: "-166.66vw",
        scrollTrigger: {
          trigger: ".solution-section",
          // markers: true,
          start: "top top",
          end: "2800px bottom",
          scrub: true,
          pin: true,
        },
      }
    );

    tlSolution.fromTo(
      ".solution-side-scroll-main",
      {
        x: "100vw",
      },
      {
        x: "-66.66vw",
        scrollTrigger: {
          trigger: ".solution-section",
          // markers: true,
          start: "top top",
          end: "2800px bottom",
          scrub: true,
        },
      }
    );
  });

  return (
    <>
      <div className="about-section">
        <div className="about-watermark-container">
          <CategoriesWatermarkCenter />
          <CategoriesWatermarkOuter />
        </div>
        <div className="about-bg-container">
          <Image
            fill
            src={AboutBg}
            style={{ objectFit: "cover" }}
            alt="about-bg"
          />
        </div>
        <div className="about-content">
          <div className="about-content-main">
            <div className="about-content-heading" id="about-content-heading">
              <h1>The Kapda Project</h1>
              <h1>
                <span>Mission</span>
              </h1>
            </div>
            <div className="about-content-text">
              <p>
                We&apos;re on a mission to make the planet a cleaner and greener
                place to live in. <span>YOU</span> play an important role in
                this mission and here&apos;s how we can do it
                <AboutLine />
              </p>
            </div>
            <div className="about-scroll-arrow">
              <ScrollArrow />
            </div>
          </div>
          <div className="about-percent-section">
            <div className="about-percent-one">
              <CircularSlider
                label=" "
                min={0}
                max={100}
                appendToValue="%"
                labelColor="#194841"
                knobDraggable={false}
                knobSize={1}
                hideKnob={true}
                progressColorFrom="#194841"
                progressColorTo="#194841"
                progressSize={25}
                trackColor="#194841"
                trackSize={10}
                dataIndex={52}
                valueFontSize="1.8em"
                verticalOffset="8px"
              />
              <p>LOREM IPSUM SIT DOLOR AMET EPISCUM</p>
            </div>
            <div className="about-percent-two">
              <CircularSlider
                label=" "
                min={0}
                max={100}
                appendToValue="%"
                labelColor="#194841"
                knobDraggable={false}
                knobSize={1}
                hideKnob={true}
                progressColorFrom="#194841"
                progressColorTo="#194841"
                progressSize={25}
                trackColor="#194841"
                trackSize={10}
                dataIndex={52}
                valueFontSize="1.8em"
                verticalOffset="8px"
              />
              <p>LOREM IPSUM SIT DOLOR AMET EPISCUM</p>
            </div>
            <div className="about-percent-three">
              <CircularSlider
                label=" "
                min={0}
                max={100}
                appendToValue="%"
                labelColor="#194841"
                knobDraggable={false}
                knobSize={1}
                hideKnob={true}
                progressColorFrom="#194841"
                progressColorTo="#194841"
                progressSize={25}
                trackColor="#194841"
                trackSize={10}
                dataIndex={52}
                valueFontSize="1.8em"
                verticalOffset="8px"
              />
              <p>LOREM IPSUM SIT DOLOR AMET EPISCUM</p>
            </div>
          </div>
          <div className="about-window-section">
            <div className="about-window-container">
              <Image
                src={AboutWindowShirt}
                alt="about-window-shirt"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="about-window-text">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniamelit esse
            </p>
          </div>
        </div>
      </div>
      <div className="solution-section">
        <div className="solution-main">
          <div className="solution-heading">
            <h2>OUR SOLUTION</h2>
            <h1>
              IMPACT ON VARIOUS <span>LEVELS OF SOCIETY</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam.
            </p>
          </div>
          <div className="solution-bg-container">
            <Image src={SolutionBg} alt="solution-bg" />
          </div>
          <div className="solution-impact-logo">
            <SolutionImpactLogo />
          </div>
        </div>
        <div className="solution-side-scroll-main">
          <div className="solution-scroll-one">
            <h2>01</h2>
            <h1>SOURCING</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper
            </p>
          </div>
          <SolutionScrollLine />
          <div className="solution-scroll-two">
            <h2>02</h2>
            <h1>PRODUCTION</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper
            </p>
          </div>
          <SolutionScrollLine />
          <div className="solution-scroll-three">
            <h2>03</h2>
            <h1>PACKAGING</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper
            </p>
          </div>
          <SolutionScrollLine />
          <div className="solution-scroll-four">
            <h2>04</h2>
            <h1>PACKAGING</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper
            </p>
          </div>
          <SolutionScrollLine />
          <div className="solution-scroll-five">
            <h2>05</h2>
            <h1>PACKAGING</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper
            </p>
          </div>
        </div>
      </div>
      <div className="founders-section">
        <h1>Meet The Team</h1>
        <div className="founders-main">
          <div className="founders-one">
            <div className="founders-one-header">
              <SanyuktaHeader />
            </div>
            <div className="founders-img-container">
              <Image src={Sanyukta} alt="graphic-design-head" />
            </div>
            <h2>Sanyukta Adhikary</h2>
            <h3>Graphic Design Head</h3>
            <div className="founders-socials">
              <Link
                href="https://www.instagram.com/sanyukta.jpg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FoundersInsta />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sanyukta-adhikary/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FoundersLinkedin />
              </Link>
            </div>
          </div>
          <div className="founders-two">
            <div className="founders-two-header">
              <AmodHeader />
            </div>
            <div className="founders-img-container">
              <Image src={Amod} alt="founder" />
            </div>
            <h2>Amod Kulkarni</h2>
            <h3>Founder</h3>
            <div className="founders-socials">
              <Link
                href="https://www.instagram.com/amodeepakulkarni/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FoundersInsta />
              </Link>
              <Link
                href="https://www.linkedin.com/in/amod-kulkarni-66517315a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FoundersLinkedin />
              </Link>
            </div>
          </div>
          <div className="founders-three">
            <div className="founders-three-header">
              <HetalHeader />
            </div>
            <div className="founders-img-container">
              <Image src={Hetal} alt="fashion-designer" />
            </div>
            <h2>Hetal Verma</h2>
            <h3>Fashion Designer</h3>
            <div className="founders-socials">
              <Link href="" target="_blank" rel="noopener noreferrer">
                <FoundersInsta />
              </Link>
              <Link href="" target="_blank" rel="noopener noreferrer">
                <FoundersLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sustain-section">
        <div className="sustain-circular-text-container">
          <CircularText />
        </div>
        <div className="sustain-main">
          <div className="sustain-heading">
            <h3>WE AIM TO MAKE</h3>
            <h2>SUSTAINABILITY</h2>
            <h1>THE NORM</h1>
          </div>
          <div className="sustain-text">
            <p>
              Upcycled slow fashion that inspires everyone to consume
              consciously. Explore our newest collection and be a part of this
              change.
            </p>
          </div>
          <button type="button">
            <h3>EXPLORE</h3>
            <MissionArrow />
          </button>
        </div>
      </div>
    </>
  );
};

export default About;

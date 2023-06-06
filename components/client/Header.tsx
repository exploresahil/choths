"use client";

import Image from "next/image";
import NavLinks from "@/components/client/NavLinks";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import Bag from "@/components/icons/Bag";
import User from "@/components/icons/User";
import Arrow from "@/components/icons/Arrow";
import Mail from "@/components/icons/Mail";
import Call from "@/components/icons/Call";
import Insta from "@/components/icons/Insta";
import Menu from "@/components/icons/Menu";
import MenuClose from "@/components/icons/MenuClose";
import logo from "@/public/assets/logos/header-logo.svg";

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <ScrollLink
        to="bodyTop"
        offset={-180}
        className="logo-container"
        smooth={true}
        duration={1000}
        spy={true}
      >
        <Image fill src={logo} style={{ objectFit: "contain" }} alt="logo" />
      </ScrollLink>
      <div className="user-menu">
        <div className="user-menu-ecommercs">
          <button>
            <Bag />
          </button>
          <div className="line" />
          <button>
            <User />
          </button>
        </div>
        <div
          className={`bgDarkMenu ${isOpen ? "fadeIn" : ""}`}
          onClick={handleMenuCloseClick}
        />
        <button className="menu-button" onClick={handleMenuClick}>
          {isOpen ? <MenuClose /> : <Menu />}
        </button>
        <nav className={`${isOpen ? "navOpen" : ""}`}>
          <div className={`menu ${isOpen ? "fadeInMenu" : ""}`}>
            <div className="left section">
              <ul>
                <NavLinks
                  pageLink="#"
                  title="shirt kurta"
                  classTitle="nav-item"
                />
                <NavLinks
                  pageLink="#"
                  title="crop tops"
                  classTitle="nav-item"
                />
                <NavLinks pageLink="#" title="co-ords" classTitle="nav-item" />
                <NavLinks
                  pageLink="#"
                  title="samosa tote bag"
                  classTitle="nav-item"
                />
                <NavLinks
                  pageLink="#"
                  title="laptop sleeves"
                  classTitle="nav-item"
                />
              </ul>
            </div>
            <div className="center section">
              <ul>
                <NavLinks pageLink="#" title="about" classTitle="nav-item" />
                <NavLinks pageLink="#" title="contact" classTitle="nav-item" />
                <NavLinks
                  pageLink="#"
                  title="terms & conditions"
                  classTitle="nav-item"
                />
              </ul>
            </div>
            <div className="right section">
              <div className="text">
                <div className="dot" />
                <div className="title">
                  <h2>coming soon!</h2>
                  <p>
                    Be the first to know about our latest collections, upcoming
                    events and special discounts.
                  </p>
                </div>
              </div>
              <form action="#">
                <h2>sign up for our newsletter</h2>
                <div className="name">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <button type="submit">
                  <h3>JOIN THE MOVEMENT</h3>
                  <Arrow />
                </button>
              </form>
              <div className="socials">
                <Link href="#">
                  <Call />
                </Link>
                <Link href="#">
                  <Mail />
                </Link>
                <Link href="#">
                  <Insta />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

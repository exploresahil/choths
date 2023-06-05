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
import { useState, useRef, useEffect, useCallback } from "react";
import { getHeaders } from "@/sanity/sanity-utils";

const Header = async () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement | any>(null);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const menuOutSide = menuRef.current;

    const handleClickOutsideMenu = (e: any) => {
      if (menuOutSide && !menuOutSide.contains(e.target)) {
        handleMenuClose();
      }
    };

    document.body.addEventListener("click", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, [handleMenuClose]);

  const headersSchema = await getHeaders();

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
        <Image
          fill
          src={headersSchema[0]!.image.url}
          style={{ objectFit: "contain" }}
          alt="logo"
        />
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
        <button className="menu" onClick={handleMenuOpen}>
          <Menu />
        </button>
      </div>
      <nav
        style={{
          backgroundColor: `rgba(0, 0, 0, ${!menuOpen ? 0 : 0.5})`,
          transform: menuOpen ? "translateX(0)" : "translateX(100vw)",
        }}
      >
        <div
          className="menu"
          style={{
            transform: menuOpen
              ? "translate(0, -50%)"
              : "translate(100vw, -50%)",
          }}
          ref={menuRef}
        >
          <button className="menu-close" onClick={handleMenuClose}>
            <MenuClose />
          </button>
          <div className="left section">
            <ul>
              <NavLinks
                pageLink="#"
                title="shirt kurta"
                classTitle="nav-item"
              />
              <NavLinks pageLink="#" title="crop tops" classTitle="nav-item" />
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
              <input type="email" name="email" id="email" placeholder="Email" />
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
    </header>
  );
};

export default Header;

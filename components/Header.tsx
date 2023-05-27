/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
"use client";

import Image from "next/image";
import NavLinks from "@/components/NavLinks";
import Link from "next/link";

import logo from "@/public/assets/logos/header-logo.svg";

import Bag from "@/components/icons/Bag";
import User from "@/components/icons/User";
import Arrow from "@/components/icons/Arrow";
import Mail from "@/components/icons/Mail";
import Call from "@/components/icons/Call";
import Insta from "@/components/icons/Insta";
import Menu from "@/components/icons/Menu";
import MenuClose from "@/components/icons/MenuClose";
import { useState, useRef, useEffect } from "react";

export default () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement | any>(null);
  const menuOutSide = menuRef.current;

  const handleClickOutsideMenu = (e: any) => {
    if (menuOutSide && !menuRef?.current?.contains(e.target)) {
      handleMenuClose();
    }
  };

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, [handleMenuClose]);

  return (
    <header>
      <div className="logo-container">
        <Image fill src={logo} style={{ objectFit: "contain" }} alt="logo" />
      </div>
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

"use client";

import NavLinks from "@/components/client/NavLinks";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Bag,
  User,
  Arrow,
  Mail,
  Call,
  Insta,
  Menu,
  MenuClose,
  TkpLogo,
} from "@/components/icons/Icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuCloseClick = () => {
    setIsOpen(false);
  };

  const logoclick = () => {
    setIsOpen(false);
    router.push("/");
  };

  const router = useRouter();

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
        <TkpLogo onClick={logoclick} />
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
                <li className="title">SHOP</li>
                <NavLinks
                  pageLink="#"
                  title="shirt kurta"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
                <NavLinks
                  pageLink="#"
                  title="crop tops"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
                <NavLinks
                  pageLink="#"
                  title="co-ords"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
                <NavLinks
                  pageLink="#"
                  title="samosa tote bag"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
                <NavLinks
                  pageLink="#"
                  title="laptop sleeves"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
              </ul>
            </div>
            <div className="center section">
              <ul>
                <li className="title">INFO</li>
                <NavLinks
                  pageLink="/about"
                  title="about"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
                <NavLinks
                  pageLink="/contact"
                  title="contact"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
                <NavLinks
                  pageLink="/blogs"
                  title="blog"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
                <NavLinks
                  pageLink="/policies/privacy"
                  title="privacy policy"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
                <NavLinks
                  pageLink="/policies/refund"
                  title="refund policy"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
                <NavLinks
                  pageLink="/policies/shipping"
                  title="shipping policy"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
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
        <nav className={`nav-mobile ${isOpen ? "navOpen" : ""}`}>
          <div className={`menu ${isOpen ? "fadeInMenu" : ""}`}>
            <div className="left section">
              <ul>
                <li className="title">SHOP</li>
                <NavLinks
                  pageLink="#"
                  title="shirt kurta"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
                <NavLinks
                  pageLink="#"
                  title="crop tops"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
                <NavLinks
                  pageLink="#"
                  title="co-ords"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
                <NavLinks
                  pageLink="#"
                  title="samosa tote bag"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
                <NavLinks
                  pageLink="#"
                  title="laptop sleeves"
                  classTitle="nav-item"
                  onClick={handleMenuCloseClick}
                />
              </ul>
            </div>
            <div className="menu-second">
              <div className="center section">
                <ul>
                  <li className="title">INFO</li>
                  <NavLinks
                    pageLink="/about"
                    title="about"
                    classTitle="nav-item"
                    onClick={handleMenuCloseClick}
                  />
                  <NavLinks
                    pageLink="/contact"
                    title="contact"
                    classTitle="nav-item"
                    onClick={handleMenuCloseClick}
                  />
                  <NavLinks
                    pageLink="/blogs"
                    title="blog"
                    classTitle="nav-item"
                    onClick={handleMenuCloseClick}
                  />
                  <NavLinks
                    pageLink="/policies/privacy"
                    title="privacy policy"
                    classTitle="nav-item"
                    onClick={handleMenuCloseClick}
                  />
                  <NavLinks
                    pageLink="/policies/refund"
                    title="refund policy"
                    classTitle="nav-item"
                    onClick={handleMenuCloseClick}
                  />
                  <NavLinks
                    pageLink="/policies/shipping"
                    title="shipping policy"
                    classTitle="nav-item"
                    onClick={handleMenuCloseClick}
                  />
                </ul>
              </div>
              <div className="right section">
                <div className="text">
                  <div className="dot" />
                  <div className="title">
                    <h2>coming soon!</h2>
                    <p>
                      Be the first to know about our latest collections,
                      upcoming events and special discounts.
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
              </div>
            </div>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;

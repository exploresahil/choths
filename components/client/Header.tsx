"use client";

import NavLinks from "@/components/client/NavLinks";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiSearch } from "react-icons/fi";

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
import Cart from "./Cart";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCartClickOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClickClose = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    let prevScrollPos = window.scrollY || document.documentElement.scrollTop;
    const handleScroll = () => {
      const currentScrollPos =
        window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(currentScrollPos > 0 && currentScrollPos > prevScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline();

      tl.fromTo(
        "#tkpLogo",
        {
          fill: "black",
        },
        {
          fill: "white",
          scrollTrigger: {
            trigger: "#logo-container",
            //markers: true,
            start: "top top",
            end: "180px top",
            scrub: 0.5,
          },
        }
      );

      tl.fromTo(
        "#tkpLogo",
        {},
        {
          fill: "black",
          scrollTrigger: {
            trigger: "#logo-container",
            //markers: true,
            start: "50% top",
            end: "50% top",
            scrub: 0.5,
          },
        }
      );
    }
  }, [pathname]);

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

  const handleProductsClick = (selectedCategory: any) => {
    router.push(`/products?category=${selectedCategory}`);
    setIsOpen(false);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/products?search=${searchQuery}`);
    setSearchQuery("");
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
        <TkpLogo onClick={logoclick} id="tkpLogo" />
      </ScrollLink>
      <div className={`search-container ${isScrolled ? "searchDown" : ""}`}>
        <form action="#" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FiSearch size={14} />
          </button>
        </form>
      </div>
      <div className="user-menu">
        <div className="user-menu-ecommercs">
          <button onClick={handleCartClickOpen}>
            <Bag />
          </button>
          <div className="line" />
          <button
            onClick={() => {
              router.push("/login");
            }}
          >
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
        <nav className={`nav-d ${isOpen ? "navOpen" : ""}`}>
          <div className={`menu ${isOpen ? "fadeInMenu" : ""}`}>
            <div className="left section">
              <ul>
                <li className="title">SHOP</li>
                <li>
                  <a
                    href="#"
                    className="nav-item"
                    onClick={() => handleProductsClick("Shirt Kurta")}
                  >
                    shirt kurta
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-item"
                    onClick={() => handleProductsClick("Crop Tops")}
                  >
                    crop tops
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-item"
                    onClick={() => handleProductsClick("Co-Ords")}
                  >
                    co-ords
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-item"
                    onClick={() => handleProductsClick("Samosa Tote Bag")}
                  >
                    samosa tote bag
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-item"
                    onClick={() => handleProductsClick("Laptop Sleeves")}
                  >
                    laptop sleeves
                  </a>
                </li>
                <NavLinks
                  pageLink="#"
                  title="View All"
                  classTitle="nav-item"
                  onClick={() => handleProductsClick("view all")}
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
                <li>
                  <a
                    href="#"
                    className="nav-item"
                    onClick={() => handleProductsClick("Shirt Kurta")}
                  >
                    shirt kurta
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-item"
                    onClick={() => handleProductsClick("Crop Tops")}
                  >
                    crop tops
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-item"
                    onClick={() => handleProductsClick("Co-Ords")}
                  >
                    co-ords
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-item"
                    onClick={() => handleProductsClick("Samosa Tote Bag")}
                  >
                    samosa tote bag
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-item"
                    onClick={() => handleProductsClick("Laptop Sleeves")}
                  >
                    laptop sleeves
                  </a>
                </li>
                <NavLinks
                  pageLink="#"
                  title="View All"
                  classTitle="nav-item"
                  onClick={() => handleProductsClick("view all")}
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
      {isCartOpen && <Cart onCartCloseClick={handleCartClickClose} />}
    </header>
  );
};

export default Header;

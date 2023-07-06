"use client";

import Image from "next/image";

import FooterBackground from "@/public/assets/images/FooterBackground.png";
import NavLinks from "./NavLinks";
import { FooterLogo } from "../icons/FooterLogo";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <footer>
      <div className="footer-bg-container">
        <Image
          fill
          src={FooterBackground}
          style={{ objectFit: "cover" }}
          alt="footer-background"
        />
      </div>
      <div className="footer-components">
        <div className="links-container">
          <div className="left section">
            <ul>
              <li className="title">Shop</li>
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
              <NavLinks
                pageLink="/products"
                title="view all"
                classTitle="nav-item"
              />
            </ul>
          </div>
          <div className="links-section">
            <div className="center section">
              <ul>
                <li className="title">Policy</li>
                <NavLinks
                  pageLink="#"
                  title="Privacy Policy"
                  classTitle="nav-item"
                />
                <NavLinks
                  pageLink="#"
                  title="Refund Policy"
                  classTitle="nav-item"
                />
                <NavLinks
                  pageLink="#"
                  title="Shipping Policy"
                  classTitle="nav-item"
                />
              </ul>
            </div>
            <div className="right section">
              <ul>
                <li className="title">Site Map</li>
                <NavLinks
                  pageLink="/about"
                  title="About Us"
                  classTitle="nav-item"
                />
                <NavLinks
                  pageLink="/contact"
                  title="Contact Us"
                  classTitle="nav-item"
                />
                <NavLinks
                  pageLink="/blogs"
                  title="Blog"
                  classTitle="nav-item"
                />
              </ul>
            </div>
          </div>
        </div>

        <FooterLogo
          className="footer-logo"
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
      <div className="footer-text">
        <h2>THE PRODUCT OF - CUPDA PROJECT PVT. LTD. ™</h2>
      </div>
    </footer>
  );
}

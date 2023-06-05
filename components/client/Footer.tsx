"use client";

import Image from "next/image";
import Link from "next/link";

import FooterLogo from "@/public/assets/logos/footer-logo.svg";
import FooterBackground from "@/public/assets/images/FooterBackground.png";

import Mail from "@/components/icons/Mail";
import Call from "@/components/icons/Call";
import Insta from "@/components/icons/Insta";

export default function Footer() {
  return (
    <footer>
      <div className="footer-bg-container">
        <Image
          fill
          src={FooterBackground}
          style={{ objectFit: "cover", objectPosition: "top" }}
          alt="footer-background"
        />
      </div>
      <div className="footer-components">
        <div className="footer-logo-container">
          <Image
            fill
            src={FooterLogo}
            style={{ objectFit: "contain" }}
            alt="footer-logo"
          />
        </div>
        <div className="footer-text">
          <h2>ALL RIGHTS RESERVED | THE KAPDA PROJECT</h2>
        </div>
        <div className="footer-socials">
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
    </footer>
  );
}

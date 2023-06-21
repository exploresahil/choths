import Image from "next/image";
import Link from "next/link";

import {
  ContactInstaColor,
  ContactArrow,
  ContactPhone,
  ContactMail,
  ContactNewsletterArrow,
} from "@/components/icons/Icons";

import ContactBg from "@/public/assets/images/contact/ContactBg.png";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-bg-container">
        <Image
          fill
          src={ContactBg}
          style={{ objectFit: "cover" }}
          alt="contact-bg"
        />
      </div>
      <div className="contact-details">
        <h1>Get in touch</h1>
        <div className="contact-options">
          <div className="contact-options-wrapper">
            <Link href="#">
              <div className="contact-phone">
                <div className="contact-phone-left">
                  <ContactPhone />
                  <h2>+91-7709809311</h2>
                </div>
                <div className="contact-right">
                  <ContactArrow />
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="contact-mail">
                <div className="contact-mail-left">
                  <ContactMail />
                  <h2>team@thekapdaproject.com</h2>
                </div>
                <div className="contact-right">
                  <ContactArrow />
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="contact-insta">
                <div className="contact-insta-left">
                  <ContactInstaColor />
                  <h2>@thekapdaproject</h2>
                </div>
                <div className="contact-right">
                  <ContactArrow />
                </div>
              </div>
            </Link>
          </div>
          <div className="contact-newsletter">
            <form className="contact-newsletter-form">
              <h2>SIGN UP FOR OUR NEWSLETTER</h2>
              <div className="name">
                <input type="text" placeholder="FIRST NAME" />
                <input type="text" placeholder="LAST NAME" />
              </div>
              <input type="email" name="email" id="email" placeholder="EMAIL" />
              <button type="submit">
                <h3>JOIN THE MOVEMENT</h3>
                <ContactNewsletterArrow />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

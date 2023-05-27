import Arrow from "@/components/icons/Arrow";
import NewsletterArrow from "@/components/icons/NewsletterArrow"
import "./newsletter.scss";

export default function Newsletter() {
  return (
    <>
      <form className="newsletter-form">
        <h2>SIGN UP FOR OUR NEWSLETTER</h2>
        <div className="name">
          <input type="text" placeholder="FIRST NAME" />
          <input type="text" placeholder="LAST NAME" />
        </div>
        <input type="email" name="email" id="email" placeholder="EMAIL" />
        <button type="submit">
          <h3>JOIN THE MOVEMENT</h3>
          <NewsletterArrow />
        </button>
      </form>
    </>
  );
}

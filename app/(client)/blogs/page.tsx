"use client";

import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/components/client/NewsLetter";

import {
  BlogsArrow,
  CategoriesWatermarkCenter,
  CategoriesWatermarkOuter,
} from "@/components/icons/Icons";

import BlogsFeaturedImg from "@/public/assets/images/blogs/BlogsFeaturedImg.png";
import ArticlesImgOne from "@/public/assets/images/blogs/ArticlesImgOne.png";
import ArticlesImgTwo from "@/public/assets/images/blogs/ArticlesImgTwo.png";
import FAQs from "@/components/client/FAQs";

const Blogs = () => {
  return (
    <div className="blogs-main">
      <div className="blogs-watermark-container">
        <CategoriesWatermarkCenter />
        <CategoriesWatermarkOuter />
      </div>
      <div className="blogs-featured-section">
        <div className="featured-img-container">
          <Image src={BlogsFeaturedImg} alt="blogs-featured-img" />
        </div>
        <div className="featured-content">
          <h2>UPCYCLING 101</h2>
          <h1>Embracing Upcycled Fashion</h1>
          <p>Discover the beauty of upcycled fashion with the kapda project</p>
          <div className="blogs-read-more-container">
            <Link href="">
              <div className="blogs-read-more">
                <p>READ MORE</p>
                <BlogsArrow />
              </div>
            </Link>
          </div>
        </div>
        d
      </div>
      <div className="blogs-filter-section">
        <div className="filter-container">
          <button type="button">
            <h3>UPCYCLING 101</h3>
          </button>
        </div>
        <div className="filter-container">
          <button type="button">
            <h3>INDUSTRY NEWNESS</h3>
          </button>
        </div>
        <div className="filter-container">
          <button type="button">
            <h3>BEHIND THE SCENES</h3>
          </button>
        </div>
        <div className="filter-container">
          <button type="button">
            <h3>SHOP HACKS</h3>
          </button>
        </div>
      </div>
      <div className="blogs-articles-section">
        <div className="articles-container">
          <div className="articles-img-container">
            <Image src={ArticlesImgOne} alt="articles-img-one" />
          </div>
          <div className="articles-content">
            <h2>BEHIND THE SCENES</h2>
            <h1>A Commitment to Ethical Fashion</h1>
            <p>Redifining Fashion with Ethics and Elegance</p>
            <div className="articles-read-more-container">
              <Link href="">
                <div className="articles-read-more">
                  <p>READ MORE</p>
                  <BlogsArrow />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="blogs-faqs-section">
        <FAQs />
      </div>
      <div className="blogs-newsletter-section">
        <h1>STAY UPDATED</h1>
        <div className="newsletter-container">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Blogs;

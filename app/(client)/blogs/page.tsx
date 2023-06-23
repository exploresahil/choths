"use client";

import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import { getBlogs, getFeatured } from "@/sanity/sanity-utils";
import Newsletter from "@/components/client/NewsLetter";
import FAQs from "@/components/client/FAQs";

import {
  BlogsArrow,
  CategoriesWatermarkCenter,
  CategoriesWatermarkOuter,
} from "@/components/icons/Icons";

import BlogsFeaturedImg from "@/public/assets/images/blogs/BlogsFeaturedImg.png";

async function Blogs() {
  const blogs = await getBlogs();
  const featured = await getFeatured();

  return (
    <div className="blogs-main">
      <div className="blogs-watermark-container">
        <CategoriesWatermarkCenter />
        <CategoriesWatermarkOuter />
      </div>
      {featured.map((featured) => (
        <div key={featured._id} className="blogs-featured-section">
          <div className="blogs-featured-img-container">
            <Image
              fill
              src={featured.image.url}
              alt={featured.image.alt}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="blogs-featured-content">
            <h2>{featured.topic}</h2>
            <div className="blogs-featured-title">
              <PortableText value={featured.title} />
            </div>
            <div className="blogs-featured-description">
              <PortableText value={featured.description} />
            </div>
            <div className="blogs-read-more-container">
              <Link href="/blogs/featured">
                <div className="blogs-read-more">
                  <p>READ MORE</p>
                  <BlogsArrow />
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
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
        {blogs.map((blog) => (
          <div key={blog._id} className="articles-container">
            <div className="articles-img-container">
              {blog.image && (
                <Image
                  fill
                  src={blog.image.url}
                  style={{ objectFit: "cover" }}
                  alt={blog.image.alt}
                />
              )}
            </div>
            <div className="articles-content">
              <div className="articles-topic">{blog.topic}</div>
              <div className="articles-title">
                <PortableText value={blog.title} />
              </div>
              <div className="articles-description">
                <PortableText value={blog.description} />
              </div>
              <div className="articles-read-more-container">
                <Link href={`/blogs/${blog.slug}`}>
                  <div className="articles-read-more">
                    <p>READ MORE</p>
                    <BlogsArrow />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
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
}

export default Blogs;

"use client";

import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import {
  getBlogs,
  getUpcycleBlogs,
  getIndustryBlogs,
  getBtsBlogs,
  getShopBlogs,
  getFeatured,
} from "@/sanity/sanity-utils";
import {
  AllBlogs,
  UpcycleBlogs,
  BtsBlogs,
  ShopBlogs,
  IndustryBlogs,
} from "@/components/client/BlogsList";
import Newsletter from "@/components/client/NewsLetter";
import FAQs from "@/components/client/FAQs";

import {
  BlogsArrow,
  CategoriesWatermarkCenter,
  CategoriesWatermarkOuter,
} from "@/components/icons/Icons";
import { useState } from "react";

async function Blogs() {
  const [upcycle, setUpcycle] = useState(false);
  const [industry, setIndustry] = useState(false);
  const [bts, setBts] = useState(false);
  const [shop, setShop] = useState(false);

  const allBlogs = await getBlogs();
  const upcycleBlogs = await getUpcycleBlogs();
  const industryBlogs = await getIndustryBlogs();
  const btsBlogs = await getBtsBlogs();
  const shopBlogs = await getShopBlogs();
  const featured = await getFeatured();

  console.log(upcycle);
  console.log(industry);
  console.log(bts);
  console.log(shop);

  return (
    <div className="blogs-main">
      <div className="blogs-watermark-container">
        <CategoriesWatermarkCenter />
        <CategoriesWatermarkOuter />
      </div>
      {featured.map((featured) => (
        <div key={featured._id} className="blogs-featured-section">
          <div className="blogs-featured-img-container">
            {featured.image && (
              <Image
                fill
                src={featured.image.url}
                alt={featured.image.alt}
                style={{ objectFit: "cover" }}
              />
            )}
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
          <button
            type="button"
            onClick={() => {
              setUpcycle(!upcycle);
              setIndustry(false);
              setBts(false);
              setShop(false);
            }}
          >
            <h3>UPCYCLING 101</h3>
          </button>
        </div>
        <div className="filter-container">
          <button
            type="button"
            onClick={() => {
              setUpcycle(false);
              setIndustry(!industry);
              setBts(false);
              setShop(false);
            }}
          >
            <h3>INDUSTRY NEWNESS</h3>
          </button>
        </div>
        <div className="filter-container">
          <button
            type="button"
            onClick={() => {
              setUpcycle(false);
              setIndustry(false);
              setBts(!bts);
              setShop(false);
            }}
          >
            <h3>BEHIND THE SCENES</h3>
          </button>
        </div>
        <div className="filter-container">
          <button
            type="button"
            onClick={() => {
              setUpcycle(false);
              setIndustry(false);
              setBts(false);
              setShop(!shop);
            }}
          >
            <h3>SHOP HACKS</h3>
          </button>
        </div>
      </div>

      {upcycle == false &&
        industry == false &&
        bts == false &&
        shop == false && <AllBlogs />}
      {upcycle == true && <UpcycleBlogs />}
      {industry == true && <IndustryBlogs />}
      {bts == true && <BtsBlogs />}
      {shop == true && <ShopBlogs />}

      {/* <div className="blogs-articles-section">
        {allBlogs.map((blog) => (
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
                <a href={`/blogs/${blog.slug}`}>
                  <div className="articles-read-more">
                    <p>READ MORE</p>
                    <BlogsArrow />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div> */}

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

"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { getFeatured } from "@/sanity/sanity-utils";
import FAQs from "@/components/client/FAQs";

import {
  CategoriesWatermarkCenter,
  CategoriesWatermarkOuter,
} from "@/components/icons/Icons";

import Newsletter from "@/components/client/NewsLetter";

export default async function Featured() {
  const featured = await getFeatured();

  return (
    <div className="blog-main">
      <div className="blog-watermark-container">
        <CategoriesWatermarkCenter />
        <CategoriesWatermarkOuter />
      </div>
      {featured.map((featured) => (
        <div key={featured._id} className="blog-section">
          <div className="blog-img-container">
            <Image fill src={featured.image.url} alt={featured.image.alt} style={{ objectFit: "cover" }} />
          </div>
          <div className="blog-content">
            <div className="blog-heading">
              <h2>{featured.topic}</h2>
              <div className="blog-title">
                <PortableText value={featured.title} />
              </div>
            </div>
            <div className="blog-description">
              <PortableText value={featured.description} />
            </div>
            <div className="blog-text">
              <PortableText value={featured.content} />
            </div>
          </div>
        </div>
      ))}
      <div className="blog-faqs-section">
        <FAQs />
      </div>
      <div className="blog-newsletter-section">
        <h1>STAY UPDATED</h1>
        <div className="newsletter-container">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}

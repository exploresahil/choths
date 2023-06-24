"use client";

import FAQs from "@/components/client/FAQs";
import Newsletter from "@/components/client/NewsLetter";
import {
  CategoriesWatermarkCenter,
  CategoriesWatermarkOuter,
} from "@/components/icons/Icons";
import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { blog: string };
};

export default async function Blog({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);

  return (
    <div className="blog-main">
      <div className="blog-watermark-container">
        <CategoriesWatermarkCenter />
        <CategoriesWatermarkOuter />
      </div>
      <div className="blog-section">
        <div className="blog-img-container">
          {blog.image && (
            <Image
              fill
              src={blog.image.url}
              alt={blog.image.alt}
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <div className="blog-content">
          <div className="blog-heading">
            <h2>{blog.topic}</h2>
            <div className="blog-title">
              <PortableText value={blog.title} />
            </div>
          </div>
          <div className="blog-description">
            <PortableText value={blog.description} />
          </div>
          <div className="blog-text">
            <PortableText value={blog.content} />
          </div>
        </div>
      </div>
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

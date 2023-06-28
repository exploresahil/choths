/* eslint-disable import/no-anonymous-default-export */
"use client";

import Image from "next/image";
import {
  getBlogs,
  getUpcycleBlogs,
  getIndustryBlogs,
  getBtsBlogs,
  getShopBlogs,
} from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { BlogsArrow } from "../icons/Icons";

export async function AllBlogs() {
  const allBlogs = await getBlogs();

  return (
    <div className="blogs-articles-section">
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
    </div>
  );
}

export async function UpcycleBlogs() {
  const upcycleBlogs = await getUpcycleBlogs();

  return (
    <div className="blogs-articles-section">
      {upcycleBlogs.map((blog) => (
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
    </div>
  );
}

export async function IndustryBlogs() {
  const industryBlogs = await getIndustryBlogs();

  return (
    <div className="blogs-articles-section">
      {industryBlogs.map((blog) => (
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
    </div>
  );
}

export async function BtsBlogs() {
  const btsBlogs = await getBtsBlogs();

  return (
    <div className="blogs-articles-section">
      {btsBlogs.map((blog) => (
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
    </div>
  );
}

export async function ShopBlogs() {
  const shopBlogs = await getShopBlogs();

  return (
    <div className="blogs-articles-section">
      {shopBlogs.map((blog) => (
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
    </div>
  );
}

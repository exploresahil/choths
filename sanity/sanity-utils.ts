import { process } from "@/sanity/types/Process";
import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/client-config";
import { headerSchema } from "@/sanity/types/Header";
import { blogsSchema } from "@/sanity/types/Blogs";
import { featuredSchema } from "@/sanity/types/Featured";
import { topicsSchema } from "@/sanity/types/Topics";
import { faqsSchema } from "@/sanity/types/FAQs";
import { aboutSchema } from "@/sanity/types/About";
import { policiesSchema } from "@/sanity/types/Policies";
import { contactSchema } from "@/sanity/types/Contact";

export async function getProcesses(): Promise<process[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "process"] | order(number asc){
      _id,
      _createdAt,
      number,
      processName,
      "image": {
        "url": image.asset->url,
      },
      imageAlt,
      description,
    }`
  );
}

export async function getHeaders(): Promise<headerSchema[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "header"]{
      _id,
      _createdAt,
      headerName,
      "image": {
        "url": image.asset->url,
      },
      imageAlt,
    }`
  );
}

export async function getBlogs(): Promise<blogsSchema[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blogs"] | order(_createdAt desc){
      _id,
      _createdAt,
      "topic": {
        "_id": topic->_id,
        "_createdAt": topic->_createdAt,
        "name": topic->name,
        "slug": topic->slug,
      },
      name,
      "slug": slug.current,
      "image": {
        "url": image.asset->url,
        "alt": image.asset->alt,
      },
      title,
      description,
      content,
    }`
  );
}

export async function getBlog(slug: string): Promise<blogsSchema> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blogs" && slug.current == $slug][0]{
      _id,
      _createdAt,
      "topic": {
        "_id": topic->_id,
        "_createdAt": topic->_createdAt,
        "name": topic->name,
        "slug": topic->slug,
      },
      name,
      "slug": slug.current,
      "image": {
        "url": image.asset->url,
        "alt": image.asset->alt,
      },
      title,
      description,
      content,
    }`,
    { slug }
  );
}

export async function getFeatured(): Promise<featuredSchema[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "featured"]{
      _id,
      _createdAt,
      "topic": {
        "_id": topic->_id,
        "_createdAt": topic->_createdAt,
        "name": topic->name,
        "slug": topic->slug,
      },
      "image": {
        "url": image.asset->url,
        "alt": image.asset->alt,
      },
      title,
      description,
      content,
    }`
  );
}

export async function getTopics(): Promise<topicsSchema[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "topics"] | order(_createdAt asc){
      _id,
      _createdAt,
      name,
      "slug": slug.current,
    }`
  );
}

export async function getFAQs(): Promise<faqsSchema[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "faqs"] | order(_createdAt asc){
      _id,
      _createdAt,
      question,
      answer,
    }`
  );
}

export async function getAbout(): Promise<aboutSchema[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about"] {
      _id,
      _createdAt,
      title,
      description,
      "image": {
        "url": image.asset->url,
      },
      circularProgress,
      expandingWindow {
        "image": {
          "url": image.asset->url,
        },
        text,
      },
      sideScroll {
        headingSmall,
        headingBig,
        text,
        "image": {
          "url": image.asset->url,
        },
        scrollableTabs,
      },
      team[] {
        heading,
        "image": {
          "url": image.asset->url,
        },
        name,
        job,
        instagram,
        linkedin,
      },
    }`
  );
}

export async function getPolicies(): Promise<policiesSchema[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "policies"] {
      _id,
      _createdAt,
      refund,
      shipping,
      privacy,
    }`
  )
}

export async function getContact(): Promise<contactSchema[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "contact"] {
      _id,
      _createdAt,
      "image": {
        "url": image.asset->url,
      },
      phone,
      email,
      instagram,
    }`
  )
}

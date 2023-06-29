import { process } from "@/sanity/types/Process";
import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/client-config";
import { headerSchema } from "@/sanity/types/Header";
import { blogsSchema } from "@/sanity/types/Blogs";
import { featuredSchema } from "./types/Featured";
import { topicsSchema } from "./types/Topics";

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

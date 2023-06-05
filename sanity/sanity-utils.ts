import { Category } from "@/types/Category";
import { Product } from "@/types/Product";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "8oozh43c",
  dataset: "production",
  apiVersion: "2023-05-26",
});

export async function getProducts(): Promise<Product[]> {
  return client.fetch(
    groq`*[_type == "product"] | order(_createdAt asc) {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": {
        "url": image.asset->url,
        "alt": image.asset->alt,
      },
      url,
      content,
    }`
  );
}

export async function getCategories(): Promise<Category[]> {
  return client.fetch(
    groq`*[_type == "category"] | order(_createdAt asc) {
      _id,
      _createdAt,
      name,
      "image": {
        "url": image.asset->url,
        "alt": image.asset->alt,
      },
      url,
    }`
  );
}

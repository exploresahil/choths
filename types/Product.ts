import { PortableTextBlock } from "sanity";

export type Product = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: {
    url: string;
    alt: string; // make the alt field optional
  };
  url: string;
  content: PortableTextBlock[];
}
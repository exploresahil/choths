import { PortableTextBlock, Slug } from "sanity";

export type blogsSchema = {
  _id: string;
  _createdAt: Date;
  topic: string;
  name: string;
  title: PortableTextBlock[];
  slug: string;
  image: {
    url: string;
    alt: string;
  };
  description: PortableTextBlock[];
  content: PortableTextBlock[];
}
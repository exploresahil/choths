import { PortableTextBlock } from "sanity";

export type featuredSchema = {
  _id: string;
  _createdAt: Date;
  topic: {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
  };
  title: PortableTextBlock[];
  image: {
    url: string;
    alt: string;
  };
  description: PortableTextBlock[];
  content: PortableTextBlock[];
};

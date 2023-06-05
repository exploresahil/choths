import { PortableTextBlock } from "sanity";

export type process = {
  _id: string;
  _createdAt: Date;
  number: string;
  processName: string;
  image: {
    url: string;
    alt: string; // make the alt field optional
  };
  description: string;
};

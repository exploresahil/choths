import { PortableTextBlock } from "sanity";

export type products = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  images: [
    image: {
      _id: string;
      url: string;
    }
  ];
  price: string;
  details: PortableTextBlock[];
  description: PortableTextBlock[];
  size: string[

  ];
  category: {
    name: string;
    slug: string;
  };
  type: string[

  ]
};

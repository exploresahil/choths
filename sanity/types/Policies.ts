import { PortableTextBlock } from "sanity";

export type policiesSchema = {
  map(arg0: () => import("react").JSX.Element): import("react").ReactNode;
  _id: string;
  _createdAt: Date;
  refund: {
    title: string;
    description: PortableTextBlock[];
    content: PortableTextBlock[];
  };
  shipping: {
    title: string;
    description: PortableTextBlock[];
    content: PortableTextBlock[];
  };
  privacy: {
    title: string;
    description: PortableTextBlock[];
    content: PortableTextBlock[];
  };
};

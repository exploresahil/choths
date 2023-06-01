export type Category = {
  _id: string;
  _createdAt: Date;
  name: string;
  image: {
    url: string;
    alt: string;
  };
  url: string;
};

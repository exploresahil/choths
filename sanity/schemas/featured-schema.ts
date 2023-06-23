const featuredSchema = {
  name: "featured",
  title: "Featured Blog",
  type: "document",
  fields: [
    {
      name: "topic",
      title: "Topic",
      type: "string",
      options: {
        list: [
          { title: "UPCYCLING 101", value: "UPCYCLING 101" },
          { title: "INDUSTRY NEWNESS", value: "INDUSTRY NEWNESS" },
          { title: "BEHIND THE SCENES", value: "BEHIND THE SCENES" },
          { title: "SHOP HACKS", value: "SHOP HACKS" },
        ],
      },
    },
    {
      name: "title",
      title: "Title",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default featuredSchema;

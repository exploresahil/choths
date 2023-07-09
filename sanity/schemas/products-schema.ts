const products = {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "size",
      title: "Size",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "checkbox",
        list: [
          { title: "S", value: "S" },
          { title: "M", value: "M" },
          { title: "L", value: "L" },
        ],
      },
    },
    {
      name: "type",
      title: "Type",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "checkbox",
        list: [
          { title: "SOLID", value: "Solid" },
          { title: "STRIPES", value: "Stripes" },
          { title: "PRINTED", value: "Printed" },
        ],
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};

export default products;

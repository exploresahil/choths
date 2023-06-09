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
      type: "string",
      initialValue: "",
      options: {
        list: [
          { title: "Solid", value: "Solid" },
          { title: "Stripes", value: "Stripes" },
          { title: "Printed", value: "Printed" },
        ],
      },
      validation: (Rule: any) =>
        Rule.required().custom((value: any) => {
          if (!["Solid", "Stripes", "Printed"].includes(value)) {
            return "Please select a valid type option.";
          }
          return true;
        }),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Shirt Kurta", value: "Shirt Kurta" },
          { title: "Crop Tops", value: "Crop Tops" },
          { title: "Co-Ords", value: "Co-Ords" },
          { title: "Samosa Tote Bag", value: "Samosa Tote Bag" },
          { title: "Laptop Sleeves", value: "Laptop Sleeves" },
        ],
      },
      validation: (Rule: any) =>
        Rule.required().custom((value: any) => {
          if (
            ![
              "Shirt Kurta",
              "Crop Tops",
              "Co-Ords",
              "Samosa Tote Bag",
              "Laptop Sleeves",
            ].includes(value)
          ) {
            return "Please select a valid category option.";
          }
          return true;
        }),
    },
    {
      name: "searchTags",
      title: "Search Tags",
      type: "slug",
      options: {
        source: (document: any) =>
          `${document.name}, ${document.type}, ${document.category}`,
        slugify: (input: any) => input.toLowerCase().replace(/\s+/g, " "),
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

export default products;

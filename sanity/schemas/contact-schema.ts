const contactSchema = {
  name: "contact",
  title: "Contact Info",
  type: "document",
  fields: [
    {
      name: "phone",
      title: "Phone No.",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "instagram",
      title: "Instagram Link",
      type: "string",
    }
  ]
}

export default contactSchema;
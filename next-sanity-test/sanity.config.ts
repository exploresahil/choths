import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import StudioNavbar from "@/components/studio/StudioNavbar";
import Logo from "@/components/studio/Logo";
import schemas from "./sanity/schemas";
import { myTheme } from "./theme";

const config = defineConfig({
  projectId: "03oed9zq",
  dataset: "production",
  title: "next sanity test",
  apiVersion: "2023-06-05",
  basePath: "/studio",
  plugins: [deskTool()],
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  schema: { types: schemas },
  theme: myTheme,
});

export default config;

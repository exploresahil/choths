import { process } from "@/sanity/types/Process";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProcesses(): Promise<process[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "process"] | order(_createdAt desc){
      _id,
      _createdAt,
      number,
      processName,
      "image": {
        "url": image.asset->url,
        "alt": image.asset->alt,
      },
      description,
    }`
  );
}

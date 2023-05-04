import {createClient} from "next-sanity";

export  const client = createClient({
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,
    useCdn: true,
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string
})
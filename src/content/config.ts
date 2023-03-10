import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().max(60, "Seo title max 60 characters").optional(),
    description: z.string().max(160, "Max length for SEO description"),
    exerpt: z.string(),
    date: z.date(),
    author: z.enum(["Duskreaper", "MaybeLaterx", "PharmyB"]),

    category: z
      .enum([
        "redstone",
        "game-dev",
        "game-design",
        "sound",
        "resource-pack",
        "teamwork",
      ])
      // .transform((str) => str.replaceAll(" ", "-"))
      .array()
      .nonempty(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

export const collections = { blog: blogCollection };

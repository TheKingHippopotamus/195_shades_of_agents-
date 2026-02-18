import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      options: {
        list: [
          { title: "FinTech", value: "FinTech" },
          { title: "HealthTech", value: "HealthTech" },
          { title: "E-commerce", value: "E-commerce" },
          { title: "SaaS", value: "SaaS" },
          { title: "EdTech", value: "EdTech" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "challenge",
      title: "Challenge",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "approach",
      title: "Approach",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "results",
      title: "Results",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "metrics",
      title: "Metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
            }),
            defineField({
              name: "improvement",
              title: "Improvement",
              type: "string",
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        },
      ],
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "teamAgents",
      title: "Team Agents",
      type: "array",
      of: [{ type: "string" }],
      description: "Agent codes that worked on this project",
      options: { layout: "tags" },
    }),
    defineField({
      name: "testimonial",
      title: "Client Testimonial",
      type: "object",
      fields: [
        defineField({
          name: "quote",
          title: "Quote",
          type: "text",
        }),
        defineField({
          name: "author",
          title: "Author",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "title",
      client: "client",
      industry: "industry",
      media: "coverImage",
    },
    prepare(selection) {
      const { title, client, industry } = selection;
      return {
        ...selection,
        subtitle: `${client || "Unknown client"} — ${industry || "No industry"}`,
      };
    },
  },
});

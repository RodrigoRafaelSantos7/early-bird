import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  formSubmissions: defineTable({
    email: v.string(),
    name: v.string(),
    message: v.string(),
  }),
});
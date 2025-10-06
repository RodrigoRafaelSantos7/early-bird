import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  formSubmissions: defineTable({
    email: v.string(),
  }).index("by_email", ["email"]),
});

import { v } from "convex/values";
import { internal } from "./_generated/api";
import { mutation, query } from "./_generated/server";

export const insert = mutation({
  args: {
    email: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    // Check if email already exists
    const existing = await ctx.db
      .query("formSubmissions")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existing) {
      throw new Error("Email already registered");
    }

    // Insert the submission
    await ctx.db.insert("formSubmissions", args);

    // Schedule the email to be sent
    await ctx.scheduler.runAfter(
      0,
      internal.sendEmail.sendFormSubmissionEmail,
      {
        email: args.email,
      },
    );

    return null;
  },
});

export const get = query({
  args: {
    email: v.string(),
  },
  returns: v.union(v.id("formSubmissions"), v.null()),
  handler: async (ctx, args) => {
    const submission = await ctx.db
      .query("formSubmissions")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();
    return submission?._id ?? null;
  },
});

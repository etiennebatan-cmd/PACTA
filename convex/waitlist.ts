import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const add = mutation({
  args: {
    email: v.string(),
    userType: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const waitlistId = await ctx.db.insert("waitlist", {
      email: args.email.toLowerCase().trim(),
      userType: args.userType,
      createdAt: Date.now(),
    });
    return waitlistId;
  },
});

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("waitlist").order("desc").collect();
  },
});

export const updateStruggle = mutation({
  args: {
    id: v.id("waitlist"),
    struggle: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      struggle: args.struggle,
    });
  },
});
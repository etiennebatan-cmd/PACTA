import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlist: defineTable({
    email: v.string(),
    userType: v.optional(v.string()),
    struggle: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_email", ["email"]),
});
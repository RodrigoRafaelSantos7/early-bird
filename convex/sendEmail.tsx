"use node";

import { Resend } from "@convex-dev/resend";
import { pretty, render } from "@react-email/render";
import { v } from "convex/values";
import EarlyBirdEmail from "../emails/early-bird";
import { components } from "./_generated/api";
import { internalAction } from "./_generated/server";

export const resend: Resend = new Resend(components.resend, {
  testMode: false,
});

export const sendFormSubmissionEmail = internalAction({
  args: {
    email: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const html = await pretty(await render(<EarlyBirdEmail />));

    await resend.sendEmail(ctx, {
      from: "Blueprint Academy <noreply@blueprint-academy.com>",
      to: args.email,
      subject: "Parabéns por te registares!",
      html,
    });

    return null;
  },
});

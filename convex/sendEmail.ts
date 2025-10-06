"use node";

import { Resend } from "@convex-dev/resend";
import { pretty, render } from "@react-email/render";
import { v } from "convex/values";
import type { FormSubmissionEmail } from "../emails/form-submission";
import { components } from "./_generated/api";
import { action } from "./_generated/server";

export const resend: Resend = new Resend(components.resend, {
  testMode: false,
});

export const sendFormSubmissionEmail = action({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const html = await pretty(
      await render(
        <FormSubmissionEmail
          email={args.email}
          message={args.message}
          name={args.name}
        />
      )
    );

    await resend.sendEmail(ctx, {
      from: "Coral Infantil de Setúbal <noreply@coralinfantilsetubal.com>",
      to: "coralinfantildesetubal@gmail.com",
      subject: "Novo pedido de contacto",
      html,
    });
  },
});

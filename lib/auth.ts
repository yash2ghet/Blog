import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { sendMail } from "@/lib/mail";

const client = new MongoClient(process.env.DATABASE_URL!);

export const auth = betterAuth({
  database: mongodbAdapter(client.db(), {
    disableTransactions: true,
  } as any),

  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,

  emailAndPassword: {
    enabled: true,

    sendResetPassword: async ({ user, url }) => {
      await sendMail(
        user.email,
        "Reset your password",
        `
          Hello ${user.name ?? ""},

          Click the link below to reset your password:

          ${url}

          This link will expire automatically.

          If you didn't request a password reset, you can safely ignore this email.
        `
      );
    },
  },
});
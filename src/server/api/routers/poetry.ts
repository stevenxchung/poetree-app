import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { env } from "~/env.mjs";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const defaultUserId = "001";

export const poetryRouter = createTRPCRouter({
  viewContent: publicProcedure
    .input(
      z.object({
        contentPass: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      if (input.contentPass != env.CONTENT_PASS) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      const poem = await ctx.prisma.poemOfTheMonth.findUnique({
        where: { id: defaultUserId },
      });

      return poem;
    }),

  upsertPost: publicProcedure
    .input(
      z.object({
        content: z.string().min(1),
        authUser: z.string(),
        authPass: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (input.authUser != env.AUTH_USER || input.authPass != env.AUTH_PASS) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      const poem = await ctx.prisma.poemOfTheMonth.upsert({
        where: { id: defaultUserId },
        create: {
          content: input.content,
        },
        update: {
          content: input.content,
        },
      });

      return poem;
    }),
});

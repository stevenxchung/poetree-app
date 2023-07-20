import { TRPCError } from "@trpc/server";
import { getHTTPStatusCodeFromError } from "@trpc/server/http";
import { type NextApiRequest, type NextApiResponse } from "next";
import { appRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";

const createHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Create context and caller
    const ctx = createTRPCContext({ req, res });
    const caller = appRouter.createCaller(ctx);

    // Get headers and request body
    const authUser = req.headers["auth_user"] as string;
    const authPass = req.headers["auth_pass"] as string;
    const input: string = req.body as string;

    const poem = await caller.poetry.upsertPost({
      content: input,
      authUser,
      authPass,
    });

    res.status(200).json(poem);
  } catch (cause) {
    if (cause instanceof TRPCError) {
      // An error from tRPC occured
      const httpCode = getHTTPStatusCodeFromError(cause);
      return res.status(httpCode).json(cause);
    }
    // Another error occured
    console.error(cause);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default createHandler;

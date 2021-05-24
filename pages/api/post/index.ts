import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { filename, code } = req.body;

  const session = await getSession({ req });
  const result = await prisma.gist.create({
    data: {
      filename,
      code,
      author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}

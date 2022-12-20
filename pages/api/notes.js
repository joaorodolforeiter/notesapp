import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: req.body.title });
  }

  const notesData = JSON.parse(req.body);

  const savedNote = await prisma.note.create({
    data: notesData,
  });

  res.json({ savedNote });
}

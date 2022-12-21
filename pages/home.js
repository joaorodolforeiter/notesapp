import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import CreateNoteForm from "../components/CreateNoteForm/CreateNoteForm";
import AccountInfo from "../components/AccountInfo/AccountInfo";
import { useState } from "react";

import { motion } from "framer-motion";
import { PrismaClient } from "@prisma/client";
import { signOut, useSession } from "next-auth/react";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const notes = await prisma.note.findMany({
    include: {
      user: true,
    },
  });

  return { props: { initialNotes: notes } };
}

async function saveNote(note) {
  const response = await fetch("/api/notes", {
    method: "POST",
    body: JSON.stringify(note),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export default function Home(props) {
  const [notes, setNotes] = useState(props.initialNotes);
  const [showForm, setShowForm] = useState(false);
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const { data: session } = useSession({ required: true });

  return (
    <div className="h-screen flex flex-col">
      <Navbar
        profileImage={session?.user.image}
        onPlusClick={() => setShowForm(!showForm)}
        onImageClick={() => setShowAccountInfo(!showAccountInfo)}
      />

      {showAccountInfo && (
        <AccountInfo
          accountName={session?.user.name}
          accountEmail={session?.user.email}
          accountImage={session?.user.image}
          buttonOnClick={() => signOut()}
        />
      )}

      {showForm && (
        <CreateNoteForm
          onSubmit={async (data, e) => {
            try {
              await saveNote({ userId: session.user.id, ...data });
              setNotes([
                ...notes,
                {
                  ...data,
                  user: session.user,
                },
              ]);
              e.target.reset();
            } catch (err) {
              console.log(err);
            }
          }}
          className="fixed"
        />
      )}
      <motion.div
        className="h-full flex flex-col p-4 gap-4 overflow-y-scroll"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <div className="text-3xl text-slate-300 font-bold">Notes</div>
        {notes.map((note, index) => (
          <Card
            key={index}
            author={note.user.name}
            authorImage={note.user.image}
            title={note.title}
            text={note.text}
          />
        ))}
      </motion.div>
    </div>
  );
}

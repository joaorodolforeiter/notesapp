import { GithubLogo, Note } from "phosphor-react";
import { useSession, signIn, signOut } from "next-auth/react";
import { router } from 'next/router';

export default function login(props) {
  const { data: session } = useSession();
  if (session) {
    router.push('home');
  }
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex items-center">
        <Note className="text-slate-400 m-1" size={48} />
        <div className="text-slate-400 m-1 font-semibold text-2xl">
          Notesapp
        </div>
      </div>
      <button
        onClick={() => {
          signIn("github");
        }}
        className="flex rounded-md bg-slate-500 p-2 m-12 items-center"
      >
        <GithubLogo className="m-1" size={32} />
        <div className="m-1 text-xl font-bold"> Github </div>
      </button>
    </div>
  );
}

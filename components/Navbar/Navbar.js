import { Note, Plus } from "phosphor-react";

export default function Navbar(props) {
  return (
    <header className="flex w-full h-16 bg-slate-800 text-slate-300 items-center justify-between">
      <div className="flex items-center">
        <Note className="m-4" size={32} />
        <div className="font-semibold text-xl">Notesapp</div>
      </div>
      <div className="flex items-center">
        <button onClick={props.onPlusClick}>
          <Plus size={32} />
        </button>
        <button onClick={props.onImageClick}>
          <img
            className="w-10 h-10 m-3 rounded-full"
            src={props.profileImage}
            alt=""
          />
        </button>
      </div>
    </header>
  );
}

import { Note, Plus } from "phosphor-react";

export default function AccountInfo(props) {
  return (
    <div className="flex w-full h-128 bg-slate-800 text-slate-300">
      <img className="h-20 m-4 rounded-full" src={props.accountImage} alt="" />
      <div className="mt-4 flex flex-col w-full">
        <div className="text-2xl font-bold">{props.accountName}</div>
        <div>{props.accountEmail}</div>
        <button
          className="self-end p-2 m-4 w-16 rounded-md bg-slate-500 text-black"
          onClick={props.buttonOnClick}
        >
          Sair
        </button>
      </div>
    </div>
  );
}

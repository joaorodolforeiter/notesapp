import { useForm } from "react-hook-form";

export default function CreateNoteForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-full h-auto opacity-100 bg-slate-800 p-5 text-slate-300">
      <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>
        <input
          className="bg-transparent text-3xl outline-none mb-2"
          placeholder="Title..."
          type="text"
          {...register("title")}
        />
        <textarea
          className="bg-transparent outline-none h-32 resize-none"
          placeholder="Once apon a time..."
          maxLength={300}
          type="text"
          {...register("text")}
          id="text"
        />
        <input className="text-2xl self-end bg-slate-500 p-2 w-28 rounded-md" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default function Card(props) {
  return (
    <div className="rounded-md p-3 w-full h-auto bg-slate-500">
      <div className="flex items-center">
        <img className="w-10 rounded-full" src={props.authorImage} alt="" />
        <div className="ml-2 text-xl">{props.author}</div>
      </div>
      <div className="truncate font-bold w-56 text-3xl">{props.title}</div>
      <div className="break-words h-auto">{props.text}</div>
    </div>
  );
}

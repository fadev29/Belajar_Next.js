export default function Button(props) {
  return (
    <button
      className={`h-10 px-6 font-semibold bg-blue-500 hover:bg-blue-700 text-white w-full my-4 ${props.buttonClassname}`}
    >
      {props.children}
    </button>
  );
}

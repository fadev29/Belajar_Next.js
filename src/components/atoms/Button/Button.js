export default function Button({
  buttonClassname,
  type,
  children,
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`h-10 px-6 font-semibold bg-blue-500 hover:bg-blue-700 text-white  my-4 ${buttonClassname}`}
    >
      {children}
    </button>
  );
}

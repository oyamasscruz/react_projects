export default function Button({ children, ...props }) {
  return (
    <button className="py-2 px-4 bg-stone-800 text-white rounded-md" {...props}>
      {children}
    </button>
  );
}

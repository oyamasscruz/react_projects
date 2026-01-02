export default function Button({ children, ...props }) {
  return (
    <button
      className="py-2 px-6 bg-stone-700 text-stone-400 hover:bg-stone-600 rounded-md hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}

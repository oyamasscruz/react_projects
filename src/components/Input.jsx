export default function Input({ title, textarea, ...props }) {
  return (
    <>
      <label htmlFor="">{title}</label>
      {textarea ? (
        <textarea className="bg-stone-300" {...props} />
      ) : (
        <input className="bg-stone-300" {...props} />
      )}
    </>
  );
}

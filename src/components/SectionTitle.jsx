export default function SectionTitle({ children }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl font-semibold tracking-wide">{children}</h2>
      <span className="block mx-auto mt-3 h-0.5 w-12 rounded bg-accent" />
    </div>
  );
}

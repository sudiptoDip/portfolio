export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        {title}
        <span className="text-accent2">.</span>
      </h2>
      {subtitle && <p className="mx-auto mt-3 max-w-2xl text-slate-400">{subtitle}</p>}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent2" />
    </div>
  );
}

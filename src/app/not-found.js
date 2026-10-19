import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold text-white">404</h1>
      <p className="mt-3 text-slate-400">Page not found.</p>
      <Link href="/" className="btn-primary mt-6">
        Back to Home
      </Link>
    </section>
  );
}

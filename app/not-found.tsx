import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FDD3CF] px-6 text-center text-[#619294]">
      <div className="max-w-md rounded-[2rem] border border-[#619294]/20 bg-white/60 p-8 shadow-[0_20px_60px_rgba(97,146,148,0.14)]">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#619294]/70">Snoozers</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight">Book not found</h1>
        <p className="mt-3 text-base leading-7 text-[#619294]/80">This title is not in the current queue yet.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-[#EBBO5C] px-5 py-3 text-sm font-bold text-[#619294] transition hover:bg-[#f3c868]">
          Back to the queue
        </Link>
      </div>
    </main>
  );
}

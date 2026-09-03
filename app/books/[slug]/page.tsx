import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books } from "@/data/books";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = books.find((entry) => entry.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FDD3CF] text-[#619294]">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 rounded-full border border-[#619294]/30 bg-white/40 px-3 py-2 shadow-sm backdrop-blur-sm">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#FDD3CF] ring-2 ring-[#619294]/20">
              <Image src="/snoopy-icecream" alt="Snoopy eating ice cream" width={42} height={42} className="h-full w-full object-cover" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#619294]/80">Book Club</p>
              <h1 className="text-lg font-black tracking-tight text-[#619294]">Snoozers</h1>
            </div>
          </Link>
          <Link href="/" className="rounded-full border border-[#619294]/50 bg-[#C2D1D1] px-4 py-2 text-sm font-semibold text-[#619294] transition hover:bg-white/60">
            Back to queue
          </Link>
        </header>

        <section className="overflow-hidden rounded-[2rem] border border-[#619294]/20 bg-[#F7F5F1]/70 shadow-[0_20px_60px_rgba(97,146,148,0.14)] backdrop-blur-sm">
          <div className="grid gap-8 p-4 sm:p-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:p-10">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[280px] overflow-hidden rounded-[1.75rem] border border-[#619294]/20 bg-white/60 p-3 shadow-lg shadow-[#619294]/10">
                <Image
                  src={book.coverImage}
                  alt={`${book.title} cover`}
                  width={600}
                  height={800}
                  className="h-auto w-full rounded-[1.2rem] object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#619294]/70">Current pick</p>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{book.title}</h2>
                <p className="text-xl font-semibold text-[#619294]/80">by {book.author}</p>
                <p className="max-w-xl text-base leading-7 text-[#619294]/80">{book.blurb}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#EBBO5C] p-4 text-[#619294] shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#619294]/75">Sessions spent</p>
                  <p className="mt-2 text-3xl font-black">{book.sessionsSpent}</p>
                </div>
                <div className="rounded-2xl bg-[#C2D1D1] p-4 text-[#619294] shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#619294]/75">Favorite vibe</p>
                  <p className="mt-2 text-xl font-black">Warm + messy</p>
                </div>
                <div className="rounded-2xl bg-[#FDA0A4] p-4 text-[#619294] shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#619294]/75">Status</p>
                  <p className="mt-2 text-xl font-black">In progress</p>
                </div>
              </div>

              <section className="space-y-4">
                <h3 className="text-2xl font-black tracking-tight text-[#619294]">Session quotes</h3>
                <div className="space-y-3">
                  {book.quotes.map((quote, index) => (
                    <blockquote key={quote} className="rounded-2xl border border-[#619294]/15 bg-white/50 p-4 text-base leading-7 text-[#619294]">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-[#619294]/60">Quote {index + 1}</span>
                      “{quote}”
                    </blockquote>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-2xl font-black tracking-tight text-[#619294]">Member reviews</h3>
                <div className="grid gap-4 lg:grid-cols-3">
                  {book.reviews.map((review) => (
                    <article key={review.name} className="rounded-2xl border border-[#619294]/15 bg-[#FDD3CF]/50 p-4 shadow-sm">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#619294]/70">{review.name}</p>
                      <p className="mt-3 text-base leading-7 text-[#619294]">{review.review}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

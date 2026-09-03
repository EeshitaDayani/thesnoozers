import Image from "next/image";
import Link from "next/link";
import { books } from "@/data/books";

export default function Home() {
  const unreadBooks = books.filter((book) => book.sessionsSpent === 0);
  const readBooks = books.filter((book) => book.sessionsSpent > 0);

  return (
    <main className="min-h-screen bg-[#FDD3CF] text-[#619294]">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mx-auto mb-8 flex w-full max-w-3xl flex-col items-center justify-center gap-4 rounded-[2rem] p-4 text-center sm:p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#FDD3CF] ring-2 ring-[#619294]/15">
              <Image src="/snoopy-icecream" alt="Snoopy eating ice cream" width={64} height={64} className="h-full w-full object-cover" priority />
            </div>
            <h1 className="text-2xl font-black tracking-tight sm:text-3xl">Snoozers</h1>
          </div>
        </header>

        <section className="mb-8 rounded-[2rem] border border-[#619294]/20 bg-[#F7F5F1]/70 p-5 shadow-[0_20px_60px_rgba(97,146,148,0.10)] sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#619294]/70">Reading list</p>
            </div>
            <div className="rounded-2xl bg-[#EBBO5C] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#619294] shadow-sm">
              Unread
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {unreadBooks.map((book) => (
              <Link
                key={book.slug}
                href={`/books/${book.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-[#619294]/15 bg-white/50 shadow-[0_18px_40px_rgba(97,146,148,0.10)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(97,146,148,0.16)]"
              >
                <div className="flex h-full flex-col">
                  <div className="relative h-72 overflow-hidden bg-[#C2D1D1]">
                    <Image
                      src={book.coverImage}
                      alt={`${book.title} cover`}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#619294]/70">Unread</p>
                      <span className="rounded-full bg-[#FDA0A4]/70 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#619294]">
                        {book.sessionsSpent} sessions
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black leading-tight tracking-tight text-[#619294]">{book.title}</h3>
                      <p className="mt-1 text-sm font-medium text-[#619294]/70">by {book.author}</p>
                    </div>
                    <p className="text-sm leading-6 text-[#619294]/80">{book.blurb}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-12">
          <div className="mb-6 flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#619294]/70">Read</p>
            <div className="rounded-2xl bg-[#C2D1D1] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#619294] shadow-sm">
              Finished
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {readBooks.map((book) => (
              <Link
                key={book.slug}
                href={`/books/${book.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-[#619294]/15 bg-white/50 shadow-[0_18px_40px_rgba(97,146,148,0.10)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(97,146,148,0.16)]"
              >
                <div className="flex h-full flex-col">
                  <div className="relative h-72 overflow-hidden bg-[#C2D1D1]">
                    <Image
                      src={book.coverImage}
                      alt={`${book.title} cover`}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#619294]/70">Read</p>
                      <span className="rounded-full bg-[#FDA0A4]/70 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#619294]">
                        {book.sessionsSpent} sessions
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black leading-tight tracking-tight text-[#619294]">{book.title}</h3>
                      <p className="mt-1 text-sm font-medium text-[#619294]/70">by {book.author}</p>
                    </div>
                    <p className="text-sm leading-6 text-[#619294]/80">{book.blurb}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

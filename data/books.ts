export type MemberReview = {
  name: string;
  review: string;
};

export type BookEntry = {
  slug: string;
  title: string;
  author: string;
  coverImage: string;
  blurb: string;
  sessionsSpent: number;
  quotes: string[];
  reviews: MemberReview[];
};

export const books: BookEntry[] = [
  {
    slug: "revolutionary-russia",
    title: "Revolutionary Russia",
    author: "Orlando Figes",
    coverImage: "/revolutionary-russia.png",
    blurb:
      "An accessible and paradigm-shifting reconsideration of one of the defining events of the twentieth century..",
    sessionsSpent: 4,
    quotes: [
      "What do you mean? Excuse me, I am a very deep emotional person.",
      "Look at that quail egg!",
      "Why don’t we have any engineers or scientists? Gee, I wonder why. Oh, right, we killed them all!",
    ],
    reviews: [
      { name: "Eeshita", review: "Pretty vague description since I only read a 100 pages." },
      { name: "Ananya", review: "A deeply complex and thought-provoking review." },
      { name: "Gurnika", review: "Love the drama." },
    ],
  },
  {
    slug: "prisoners-of-geography",
    title: "Prisoners of Geography",
    author: "Tim Marshall",
    coverImage: "/prisoners-of-geography.webp",
    blurb:
      "A sharp, readable look at how physical geography shapes the politics and conflicts of the modern world.",
    sessionsSpent: 0,
    quotes: [
      "It made us realize how much history is shaped by the shape of the land itself.",
      "The explanations were simple but surprisingly big in scope.",
      "We kept circling back to the idea that borders are never just political—they’re geographic too.",
    ],
    reviews: [
      { name: "Eeshita", review: "Accessible and clever; it made complex geopolitics feel readable without losing the stakes." },
      { name: "Ananya", review: "I loved how quickly it connected places and politics in a way that felt immediate and useful." },
      { name: "Gurnika", review: "Very readable and a little unsettling, which made it perfect for discussion." },
    ],
  },
];

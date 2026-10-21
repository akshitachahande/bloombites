export type Branch = {
  id: string;
  name: string;
  image: string;
  alt: string;
  /** Opens directions; placeholder searches until real addresses are known. */
  mapsUrl: string;
};

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

/** Branches in desktop display order (left, centre/featured, right). */
export const BRANCHES: Branch[] = [
  {
    id: "soho",
    name: "Bloom Bites · SoHo",
    image: "/images/branches/soho.jpg",
    alt: "Café storefront with a green awning and outdoor seating",
    mapsUrl: maps("Bloom Bites SoHo New York"),
  },
  {
    id: "bk-lounge",
    name: "Bloom Bites · BK Lounge",
    image: "/images/branches/bk-lounge.jpg",
    alt: "Green “more matcha” lettering on a grey stone wall",
    mapsUrl: maps("Bloom Bites Brooklyn New York"),
  },
  {
    id: "lab",
    name: "Bloom Bites · Lab",
    image: "/images/branches/lab.jpg",
    alt: "White “matcha club” sign on a tiled café wall",
    mapsUrl: maps("Bloom Bites Lab New York"),
  },
];

/**
 * Selected Work data.
 *
 * To add a photograph: drop the file into /public/images/ and set its
 * path on the project, e.g. image: "/images/project-01.jpg".
 * While `image` is null the site renders a marked placeholder.
 */

export type Project = {
  index: string;
  title: string;
  category: string;
  year: string;
  location: string;
  image: string | null;
  alt: string;
  description: string;
  detail: string;
  /** Tailwind aspect-ratio utility for the visual frame */
  ratio: string;
  /** Alternate the editorial layout every other row */
  align: "left" | "right";
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Wedding Stories",
    category: "Wedding",
    year: "2025",
    location: "Mumbai",
    image: null, // -> "/images/project-01.jpg"
    alt: "Frames from a wedding story — place your image here",
    description:
      "Documentary-style wedding coverage that follows the day as it unfolds — candid, warm and never staged.",
    detail:
      "Weddings are made of small scenes that disappear in seconds. We capture the nervous laughter, the quiet glance, the hand that reaches out — cut together into a film that plays like a memory.",
    ratio: "aspect-[4/3]",
    align: "left",
  },
  {
    index: "02",
    title: "Fashion Films",
    category: "Fashion",
    year: "2024",
    location: "Mumbai",
    image: null, // -> "/images/project-02.jpg"
    alt: "Fashion editorial stills — place your image here",
    description:
      "Editorial shoots and short fashion films made for lookbooks, campaigns and brand launches.",
    detail:
      "From concept board to final cut — styling notes, light studies and movement directed around the garment. Designed for labels that want more than a catalogue.",
    ratio: "aspect-[3/4]",
    align: "right",
  },
  {
    index: "03",
    title: "Brand Stories",
    category: "Brand Film",
    year: "2024",
    location: "Mumbai",
    image: null, // -> "/images/project-03.jpg"
    alt: "Brand story visuals — place your image here",
    description:
      "Image and film work for brands that want to be seen the way they imagine themselves — cinematic, considered, real.",
    detail:
      "Strategy, stills and motion under one roof. We translate a brand's tone of voice into frames — a visual language their audience can feel and remember.",
    ratio: "aspect-[4/3]",
    align: "left",
  },
  {
    index: "04",
    title: "Music & Events",
    category: "Events",
    year: "2023",
    location: "Mumbai",
    image: null, // -> "/images/project-04.jpg"
    alt: "Live music and event coverage — place your image here",
    description:
      "High-energy coverage of gigs, launches and live events — shot to keep the electricity of the night.",
    detail:
      "Concerts, festivals, launches. We work in low light and fast motion, pulling out the moments most people miss while the crowd is looking somewhere else.",
    ratio: "aspect-[3/4]",
    align: "right",
  },
  {
    index: "05",
    title: "Portraits",
    category: "Portrait",
    year: "2025",
    location: "Mumbai",
    image: null, // -> "/images/project-05.jpg"
    alt: "Portrait photography — place your image here",
    description:
      "Studio and environmental portraits that give people room to be themselves in front of the lens.",
    detail:
      "A portrait is a negotiation between subject and camera. We slow it down, keep the direction light, and look for the version of you that appears between poses.",
    ratio: "aspect-[4/3]",
    align: "left",
  },
  {
    index: "06",
    title: "Cinematic Films",
    category: "Videography",
    year: "2023",
    location: "Mumbai",
    image: null, // -> "/images/project-06.jpg"
    alt: "Cinematic short film frames — place your image here",
    description:
      "Narrative shorts and visual essays — films built on mood, movement and light rather than words.",
    detail:
      "Mood-led storytelling with a documentary root. Colour graded like cinema, cut with breathing room — built for screens, from phones to theatre walls.",
    ratio: "aspect-[16/9]",
    align: "right",
  },
];
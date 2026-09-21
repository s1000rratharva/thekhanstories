export type Service = {
  index: string;
  title: string;
  note: string;
  items: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Photography",
    note: "Still frames with a cinematic point of view.",
    items: ["Portraits", "Weddings", "Events", "Fashion", "Brand Photography"],
  },
  {
    index: "02",
    title: "Videography",
    note: "Films that move the way real moments do.",
    items: ["Brand Films", "Wedding Films", "Music Videos", "Event Films", "Social Media Content"],
  },
  {
    index: "03",
    title: "Creative Direction",
    note: "Concept to frame — one quiet vision.",
    items: ["Visual Concepts", "Campaign Direction", "Storytelling", "Content Production"],
  },
];
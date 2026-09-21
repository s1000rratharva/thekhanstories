/**
 * Site-wide configuration.
 * Replace the placeholder values below with real contact details
 * and the social media handle when you have them.
 */
export const site = {
  name: "THEKHANSTORIES",
  wordmark: "THE KHAN STORIES",
  profession: "Photographer & Videographer",
  locationShort: "Mumbai, India",
  tagline:
    "Visual stories, films and photographs crafted with a cinematic point of view.",
  intro:
    "TheKhanStories is a Mumbai-based photography and filmmaking practice focused on capturing people, places, brands and moments through a cinematic visual language.",

  /* PLACEHOLDERS — replace with real values */
  contact: {
    email: "hello@thekhanstories.in", // TODO: replace with real email
    phone: "+91 00000 00000", // TODO: replace with real WhatsApp number
    instagram: "https://instagram.com/your-handle", // TODO: replace with real Instagram URL
  },

  nav: [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
  ],

  socials: [
    { label: "Instagram", href: "https://instagram.com/your-handle", icon: "instagram" },
    { label: "WhatsApp", href: "https://wa.me/910000000000", icon: "whatsapp" },
    { label: "Email", href: "mailto:hello@thekhanstories.in", icon: "email" },
  ] as const,
} as const;

export type Contact = {
  email: string;
  phone: string;
  instagram: string;
};
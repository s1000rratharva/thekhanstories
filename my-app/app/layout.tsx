import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THEKHANSTORIES — Photographer & Videographer | Mumbai",
  description:
    "Visual stories, films and photographs crafted with a cinematic point of view. The Khan Stories is a Mumbai-based photography and filmmaking practice.",
  keywords: [
    "photographer Mumbai",
    "videographer Mumbai",
    "wedding photographer",
    "brand films",
    "THEKHANSTORIES",
  ],
  openGraph: {
    title: "THEKHANSTORIES — Photographer & Videographer | Mumbai",
    description:
      "Visual stories, films and photographs crafted with a cinematic point of view.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Providers>
          <a
            href="#work"
            className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
          >
            Skip to content
          </a>
          {children}
        </Providers>
      </body>
    </html>
  );
}
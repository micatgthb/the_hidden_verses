import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thehiddenverses.someswans.de"),
  title: "The Hidden Verses — Baltic Lounge Lizard",
  description: "Deutsche Gedichte, verborgen in neuen englischen Jazzsongs. Ein Album von Baltic Lounge Lizard.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "The Hidden Verses — Baltic Lounge Lizard",
    description: "Deutsche Gedichte, verborgen in neuen englischen Jazzsongs.",
    images: [{ url: "/og.webp", width: 1732, height: 908, alt: "The Hidden Verses — Poetry, reimagined in jazz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hidden Verses — Baltic Lounge Lizard",
    description: "Poetry, reimagined in jazz.",
    images: ["/og.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

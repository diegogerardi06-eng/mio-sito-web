import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verde — Il futuro è nella nostra natura",
  description: "Sole, vento e acqua: un piccolo spazio per scoprire le energie rinnovabili e immaginare un futuro più verde.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>{children}</body></html>;
}

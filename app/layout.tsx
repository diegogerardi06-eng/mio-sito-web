import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forma — Idee chiare, esperienze straordinarie",
  description: "Uno studio digitale dimostrativo: strategia, design e sviluppo per dare forma alla tua prossima idea.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>{children}</body></html>;
}

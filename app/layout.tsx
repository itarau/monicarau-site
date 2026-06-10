import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mónica Rau · Consultora en Estrategia y Crecimiento · Santiago, Chile",
  description:
    "Mónica Rau es consultora en estrategia, crecimiento y transformación para empresas medianas en Chile. Diagnóstico estratégico, Business Case Lab y liderazgo ejecutivo fractional.",
  authors: [{ name: "Mónica Rau" }],
  robots: "index, follow",
  metadataBase: new URL("https://www.monicarau.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.monicarau.com/",
    title: "Mónica Rau · Consultora en Estrategia y Crecimiento · Chile",
    description:
      "Ayudo a empresas medianas en Chile a decidir dónde apostar y a convertir esa apuesta en resultados.",
    images: [{ url: "/og-image.jpg" }],
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mónica Rau · Consultora en Estrategia y Crecimiento · Chile",
    description: "Ayudo a empresas medianas en Chile a decidir dónde apostar y a ejecutarlo.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}

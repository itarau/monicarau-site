import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/seo/structured-data";

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
  title: "Consultora en Estrategia y Crecimiento | Mónica Rau · Santiago, Chile",
  description:
    "Mónica Rau es consultora en estrategia, crecimiento y transformación para empresas medianas en Chile. Diagnóstico estratégico, Business Case Lab y liderazgo ejecutivo fractional. Sin capas intermedias — solo resultados.",
  keywords: [
    "consultora estrategia Chile",
    "consultora crecimiento empresas medianas",
    "transformación organizacional Chile",
    "fractional executive Chile",
    "business case Chile",
    "consultora Santiago Chile",
    "estrategia de negocios Chile",
    "nuevos negocios Chile",
    "liderazgo ejecutivo part-time",
    "Mónica Rau consultora",
  ],
  authors: [{ name: "Mónica Rau", url: "https://www.monicarau.com" }],
  creator: "Mónica Rau",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  metadataBase: new URL("https://www.monicarau.com"),
  alternates: { canonical: "https://www.monicarau.com/" },
  openGraph: {
    type: "website",
    url: "https://www.monicarau.com/",
    siteName: "Mónica Rau — Consultora en Estrategia y Crecimiento",
    title: "Consultora en Estrategia y Crecimiento | Mónica Rau · Chile",
    description:
      "Ayudo a empresas medianas en Chile a decidir dónde apostar y a convertir esa apuesta en resultados concretos. Diagnóstico estratégico, Business Case Lab y liderazgo fractional.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mónica Rau — Consultora en Estrategia y Crecimiento, Santiago Chile",
      },
    ],
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    site: "@monicarau",
    creator: "@monicarau",
    title: "Consultora en Estrategia y Crecimiento | Mónica Rau · Chile",
    description:
      "Ayudo a empresas medianas en Chile a decidir dónde apostar y a ejecutarlo. Sin capas intermedias — solo resultados.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "CL-RM",
    "geo.placename": "Santiago, Chile",
    "geo.position": "-33.4489;-70.6693",
    ICBM: "-33.4489, -70.6693",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}

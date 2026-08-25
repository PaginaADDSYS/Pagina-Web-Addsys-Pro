import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.addsys.cl"),

  title: {
    default: "ADDSYS | Ingeniería sanitaria y soluciones de infraestructura",
    template: "%s | ADDSYS",
  },

  description:
    "ADDSYS desarrolla soluciones de ingeniería sanitaria, agua potable, aguas servidas, automatización y tecnología aplicada a infraestructura sanitaria.",

  keywords: [
    "ingeniería sanitaria",
    "agua potable",
    "aguas servidas",
    "infraestructura sanitaria",
    "automatización",
    "telemetría",
    "IoT",
    "ADDSYS",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "ADDSYS | Ingeniería sanitaria y soluciones de infraestructura",
    description:
      "Soluciones de ingeniería sanitaria, tecnología e infraestructura para proyectos urbanos, industriales y domiciliarios.",
    url: "/",
    siteName: "ADDSYS",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: "/Insights/hero-insight.png",
        width: 1200,
        height: 630,
        alt: "ADDSYS Ingeniería Sanitaria",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ADDSYS | Ingeniería sanitaria y soluciones de infraestructura",
    description:
      "Soluciones de ingeniería sanitaria, tecnología e infraestructura para proyectos urbanos, industriales y domiciliarios.",
    images: ["/Insights/hero-insight.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

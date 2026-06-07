import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://rnnp.lv"),
  title: {
    default: "RNNP | Horizontālā urbšana un beztranšeju komunikācijas",
    template: "%s | RNNP",
  },
  description:
    "RNNP piedāvā horizontālās urbšanas, beztranšeju cauruļvadu ierīkošanas, kabeļu līniju izbūves un inženierkomunikāciju izbūves pakalpojumus Latvijā.",
  applicationName: "RNNP",
  authors: [{ name: "RNNP" }],
  creator: "RNNP",
  publisher: "RNNP",
  verification: {
    google: "yGuvGlncY9DoIcDUeWZnNnYVuOtiP3-cIZHTYRLTgUU",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/",
    languages: {
      "lv-LV": "/",
      "ru-LV": "/ru",
      "x-default": "/",
    },
  },
  keywords: [
    "horizontālā urbšana",
    "horizontāli vadāmā urbšana",
    "beztranšeju metode",
    "beztranšeju cauruļvadi",
    "cauruļvadu ierīkošana",
    "kabeļu līniju izbūve",
    "inženierkomunikāciju izbūve",
    "ūdensvada pieslēgums",
    "kanalizācijas pieslēgums",
    "HDD urbšana Latvijā",
    "komunikāciju ievilkšana zem ceļa",
    "горизонтальное бурение",
    "горизонтально направленное бурение",
    "ГНБ Латвия",
    "прокол под дорогой",
    "бестраншейная прокладка труб",
    "прокладка кабеля под землей",
    "прокладка водопровода",
    "прокладка канализации",
    "инженерные коммуникации Латвия",
    "горизонтальное бурение Рига",
    "бурение под дорогой Латвия",
    "RNNP",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "lv_LV",
    alternateLocale: ["ru_LV"],
    url: "/",
    siteName: "RNNP",
    title: "RNNP | Horizontālā urbšana un beztranšeju komunikācijas",
    description:
      "Horizontālās urbšanas un beztranšeju inženierkomunikāciju izbūves pakalpojumi Latvijā.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RNNP | Horizontālā urbšana",
    description:
      "Beztranšeju cauruļvadu un kabeļu līniju ierīkošana Latvijā.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

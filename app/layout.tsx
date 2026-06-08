import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://rnnp.lv"),
  title: {
    default: "RNNP | Horizontālā urbšana un pazemes kabeļu trases",
    template: "%s | RNNP",
  },
  description:
    "RNNP piedāvā horizontālās urbšanas, beztranšeju cauruļvadu, kabeļu līniju un pazemes elektrokabeļu trašu pakalpojumus Latvijā.",
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
    "horizontālā urbšana Latvijā",
    "HDD urbšana Latvijā",
    "beztranšeju urbšana",
    "beztranšeju metode",
    "beztranšeju cauruļvadi",
    "komunikāciju izbūve bez tranšejas",
    "cauruļu ievilkšana zem ceļa",
    "kabeļu ievilkšana zem ceļa",
    "cauruļvadu ierīkošana",
    "aizsargcauruļu ievilkšana",
    "kabeļu līniju izbūve",
    "inženierkomunikāciju izbūve",
    "ūdensvada pieslēgums",
    "kanalizācijas pieslēgums",
    "elektrokabeļu trases",
    "pazemes kabeļu izbūve",
    "elektroapgādes pieslēgumi",
    "kabeļu trases saules parkiem",
    "elektrokabeļu izbūve saules paneļiem",
    "elektrokabeļu izbūve saules parkam",
    "pazemes kabeļi saules paneļu parkiem",
    "pazemes kabeļi vēja parkiem",
    "vēja parku elektrokabeļi",
    "vēja enerģijas objektu kabeļu trases",
    "elektropieslēgums saules parkam",
    "komunikāciju ievilkšana zem ceļa",
    "горизонтальное бурение",
    "горизонтально направленное бурение",
    "ГНБ Латвия",
    "прокол под дорогой",
    "прокол под дорогой Латвия",
    "бестраншейная прокладка труб",
    "бестраншейное бурение",
    "прокладка кабеля под землей",
    "подземная прокладка кабеля",
    "прокладка водопровода",
    "прокладка канализации",
    "кабельные трассы для солнечных парков",
    "прокладка кабеля для солнечных панелей",
    "кабельные трассы для ветропарков",
    "подземные кабели для ветропарков",
    "электроподключение солнечного парка",
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
    title: "RNNP | Horizontālā urbšana un pazemes kabeļu trases",
    description:
      "Horizontālās urbšanas, beztranšeju inženierkomunikāciju izbūves un pazemes elektrokabeļu trašu pakalpojumi Latvijā.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RNNP | Horizontālā urbšana un kabeļu trases",
    description:
      "Beztranšeju cauruļvadu, kabeļu līniju un pazemes elektrokabeļu trašu ierīkošana Latvijā.",
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

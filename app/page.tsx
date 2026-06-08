import type { Metadata } from "next";
import Image from "next/image";

const services = [
  {
    title: "Horizontāli vadāmā urbšana",
    text: "Komunikāciju izbūve zem ceļiem, ietvēm un teritorijām bez plašas tranšeju rakšanas.",
  },
  {
    title: "Cauruļvadu ierīkošana",
    text: "Aizsargcaurules, ūdensvada un kanalizācijas pieslēgumi privātiem un komerciāliem objektiem.",
  },
  {
    title: "Kabeļu līniju izbūve",
    text: "Risinājumi elektrības, sakaru un citu inženierkomunikāciju ievilkšanai.",
  },
  {
    title: "Elektrokabeļu trases saules un vēja projektiem",
    text: "Pazemes kabeļu ievilkšana, aizsargcaurules un urbumi elektroapgādes pieslēgumiem saules paneļu parkiem un vēja enerģijas objektiem.",
  },
];

const workSteps = [
  "Objekta apsekošana un trases izvērtēšana",
  "Darbu plānošana atbilstoši segumam un piekļuvei",
  "Piloturbums, paplašināšana un komunikāciju ievilkšana",
  "Sakārtota darba zonas nodošana pēc izbūves",
];

const highlights = [
  "Beztranšeju metode",
  "Minimāla ietekme uz segumu",
  "Piemērots pilsētvidei",
  "Darbi visā Latvijā",
];

const faqs = [
  {
    question: "Kas ir horizontāli vadāmā urbšana?",
    answer:
      "Tā ir beztranšeju metode, ar kuru caurules vai kabeļu aizsargcaurules iespējams ievilkt zem ceļiem, ietvēm, pagalmiem un citām teritorijām bez plašas seguma rakšanas.",
  },
  {
    question: "Kādiem darbiem piemērota beztranšeju metode?",
    answer:
      "Tā ir piemērota ūdensvada, kanalizācijas, elektrības, sakaru un citu inženierkomunikāciju pieslēgumiem, īpaši vietās, kur svarīgi saglabāt segumu un samazināt teritorijas bojāšanu.",
  },
  {
    question: "Kā saņemt piedāvājumu?",
    answer:
      "Sazinieties ar RNNP pa tālruni vai e-pastu, norādot objekta adresi, vēlamo komunikāciju veidu, aptuveno trases garumu un pieejamo informāciju par esošajiem tīkliem.",
  },
];

const equipmentImage = "/hdd-equipment-optimized.jpg";

const pipeInstallImage = "/pipe-installation-optimized.jpg";

export const metadata: Metadata = {
  title: "Horizontālā urbšana un pazemes kabeļu trases Latvijā",
  description:
    "RNNP veic horizontāli vadāmo urbšanu, beztranšeju cauruļvadu un kabeļu līniju izbūvi, kā arī pazemes elektrokabeļu trases saules parkiem un vēja enerģijas objektiem Latvijā.",
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
    "horizontala urbsana",
    "horizontala urbsana latvija",
    "horizontali vadama urbsana",
    "horizontali vadama urbsana latvija",
    "horizontālā urbšana Rīga",
    "horizontālā urbšana Pierīga",
    "horizontālā urbšana Bauska",
    "horizontālā urbšana Zemgale",
    "HDD urbšana Latvijā",
    "HDD urbšana",
    "HDD drilling Latvia",
    "horizontal directional drilling Latvia",
    "directional drilling Latvia",
    "trenchless drilling Latvia",
    "beztranšeju urbšana",
    "beztranšeju metode",
    "beztranšeju cauruļvadi",
    "bez tranšejas",
    "beztranseju urbsana",
    "beztranseju metode",
    "beztranseju komunikacijas",
    "beztranšeju komunikācijas",
    "beztranšeju darbi",
    "beztranšeju izbūve",
    "komunikāciju izbūve bez tranšejas",
    "komunikaciju izbuve bez transejas",
    "inženierkomunikācijas",
    "inzenierkomunikacijas",
    "inženierkomunikāciju izbūve Latvijā",
    "cauruļu ievilkšana zem ceļa",
    "caurules ievilksana zem cela",
    "caurules zem ceļa",
    "caurules zem cela",
    "cauruļu ievilkšana",
    "caurulu ievilksana",
    "kabeļu ievilkšana zem ceļa",
    "kabela ievilksana zem cela",
    "kabeļu ievilkšana",
    "kabelu ievilksana",
    "komunikāciju ievilkšana zem ceļa",
    "komunikaciju ievilksana zem cela",
    "urbums zem ceļa",
    "urbums zem cela",
    "urbšana zem ceļa",
    "urbsana zem cela",
    "caurdure zem ceļa",
    "caurdure zem cela",
    "prokols zem ceļa",
    "prokols zem cela",
    "cauruļvadu ierīkošana",
    "caurulvadu ierikosana",
    "aizsargcauruļu ievilkšana",
    "aizsargcaurulu ievilksana",
    "aizsargcaurules kabeļiem",
    "aizsargcaurules kabeliem",
    "ūdensvada pieslēgums",
    "udensvada pieslegums",
    "ūdensvada ievilkšana",
    "udensvada ievilksana",
    "kanalizācijas pieslēgums",
    "kanalizacijas pieslegums",
    "kanalizācijas caurules ievilkšana",
    "kanalizacijas caurules ievilksana",
    "kabeļu līniju izbūve",
    "kabelu liniju izbuve",
    "elektrības kabeļu izbūve",
    "elektribas kabelu izbuve",
    "sakaru kabeļu izbūve",
    "sakaru kabelu izbuve",
    "elektrokabeļu trases",
    "elektrokabelu trases",
    "pazemes kabeļu izbūve",
    "pazemes kabelu izbuve",
    "pazemes kabeļu ievilkšana",
    "pazemes kabelu ievilksana",
    "elektroapgādes pieslēgumi",
    "elektroapgades pieslegumi",
    "elektropieslēguma izbūve",
    "elektropiesleguma izbuve",
    "kabeļu trases saules parkiem",
    "kabelu trases saules parkiem",
    "elektrokabeļu izbūve saules parkam",
    "elektrokabelu izbuve saules parkam",
    "pazemes kabeļi saules paneļu parkiem",
    "pazemes kabeli saules panelu parkiem",
    "saules parka elektrokabeļi",
    "saules parka elektrokabeli",
    "saules paneļu parka kabeļu trases",
    "saules panelu parka kabelu trases",
    "pazemes kabeļi vēja parkiem",
    "pazemes kabeli veja parkiem",
    "vēja parku elektrokabeļi",
    "veja parku elektrokabeli",
    "vēja enerģijas objektu kabeļu trases",
    "veja energijas objektu kabelu trases",
    "vēja parka kabeļu trases",
    "veja parka kabelu trases",
    "inženierkomunikāciju izbūve",
    "underground cable installation Latvia",
    "underground utilities Latvia",
    "trenchless utilities Latvia",
    "solar park cable installation Latvia",
    "wind park cable installation Latvia",
    "RNNP",
  ],
  openGraph: {
    type: "website",
    locale: "lv_LV",
    alternateLocale: ["ru_LV"],
    url: "/",
    siteName: "RNNP",
    title: "RNNP | Horizontālā urbšana un pazemes kabeļu trases",
    description:
      "Beztranšeju cauruļvadu, kabeļu līniju un elektrokabeļu trašu izbūve saules parkiem un vēja enerģijas objektiem Latvijā.",
  },
};

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rnnp.lv";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: "RNNP",
        legalName: "SIA RNNP",
        alternateName: "РННП",
        url: siteUrl,
        telephone: "+37129829648",
        email: "rnnpinfo@gmail.com",
        image: `${siteUrl}${equipmentImage}`,
        logo: `${siteUrl}/logo.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: '"Doriņi", Skaistkalnes pagasts',
          addressLocality: "Bauskas novads",
          postalCode: "LV-3924",
          addressCountry: "LV",
        },
        areaServed: "Latvija",
        knowsLanguage: ["lv-LV", "ru-LV"],
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.text,
            areaServed: "Latvija",
          },
        })),
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#hdd-cable-service`,
        name: "Horizontālā urbšana un pazemes elektrokabeļu trases",
        alternateName: [
          "Beztranšeju urbšana",
          "Komunikāciju izbūve bez tranšejas",
          "Cauruļu ievilkšana zem ceļa",
          "Kabeļu ievilkšana zem ceļa",
          "Kabeļu trases saules parkiem",
          "Pazemes kabeļi vēja parkiem",
          "HDD urbšana Latvijā",
          "Horizontal directional drilling Latvia",
        ],
        provider: {
          "@id": `${siteUrl}/#business`,
        },
        areaServed: "Latvija",
        description:
          "RNNP veic horizontāli vadāmo urbšanu, cauruļvadu un kabeļu līniju izbūvi, kā arī pazemes elektrokabeļu trases saules parkiem un vēja enerģijas objektiem.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "RNNP",
        inLanguage: "lv-LV",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f6f8f4] text-[#252344]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="sticky top-0 z-50 border-b border-[#dfe7dc] bg-white/95 text-[#252344] shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <a href="#" className="flex min-w-0 items-center gap-3" aria-label="RNNP">
            <span className="grid h-14 w-24 shrink-0 place-items-center bg-white sm:h-16 sm:w-32">
              <Image
                src="/logo.png"
                alt="RNNP logo"
                width={256}
                height={128}
                className="max-h-full max-w-full object-contain"
              />
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 text-sm font-semibold text-[#514f70] lg:flex"
            aria-label="Galvenā navigācija"
          >
            <a className="hover:text-[#1f7a2e]" href="#services">
              Pakalpojumi
            </a>
            <a className="hover:text-[#1f7a2e]" href="#process">
              Process
            </a>
            <a className="hover:text-[#1f7a2e]" href="#contact">
              Kontakti
            </a>
            <a className="hover:text-[#1f7a2e]" href="/ru" hrefLang="ru-LV">
              RU
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="/ru"
              hrefLang="ru-LV"
              className="inline-flex min-h-11 items-center justify-center border border-[#dfe7dc] px-3 text-xs font-black text-[#252344] transition hover:border-[#1f7a2e] hover:text-[#1f7a2e] lg:hidden"
            >
              RU
            </a>
            <a
              href="tel:+37129829648"
              className="inline-flex min-h-11 items-center justify-center bg-[#1f7a2e] px-4 text-sm font-black text-white transition hover:bg-[#252344] sm:px-5"
            >
              Zvanīt
              <span className="hidden sm:inline">&nbsp;+371 29829648</span>
            </a>
          </div>
        </div>
      </header>

      <section className="bg-[#252344] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:pb-20">
          <div className="flex flex-col justify-center">
            <p className="w-fit bg-white/8 px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#62bd68]">
              Beztranšeju inženierkomunikācijas
            </p>
            <h1 className="mt-5 max-w-full text-[1.82rem] font-black leading-[1.14] tracking-normal [overflow-wrap:normal] min-[420px]:text-[2.05rem] sm:max-w-3xl sm:text-6xl sm:leading-[1.02] lg:text-7xl">
              Komunikāciju izbūve bez liekas rakšanas.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/88 sm:mt-6 sm:text-xl sm:leading-8">
              RNNP ierīko cauruļvadus un kabeļu līnijas ar beztranšeju metodi
              vietās, kur svarīga ir kārtība, precizitāte un minimāla ietekme
              uz segumu.
            </p>

            <div className="mt-7 grid gap-3 sm:flex">
              <a
                href="mailto:rnnpinfo@gmail.com"
                className="inline-flex min-h-12 items-center justify-center bg-[#1f7a2e] px-6 text-sm font-black text-white transition hover:bg-white hover:text-[#252344]"
              >
                Pieprasīt piedāvājumu
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center border border-white/24 px-6 text-sm font-bold text-white transition hover:border-white hover:bg-white/8"
              >
                Skatīt darbus
              </a>
            </div>
          </div>

          <div className="overflow-hidden bg-[#1f1e3e]">
            <Image
              src={equipmentImage}
              alt="Horizontālās urbšanas tehnika objektā"
              width={900}
              height={1350}
              priority
              fetchPriority="high"
              quality={60}
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), (max-width: 1279px) 45vw, 520px"
              className="h-[230px] w-full object-cover sm:h-[420px] lg:h-[560px]"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[#dfe7dc] bg-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-[#dfe7dc] px-0 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item} className="bg-white px-4 py-5 sm:px-6 lg:px-10">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-[#514f70]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1f7a2e]">
              Pakalpojumi
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight sm:text-5xl">
              Darbi, kas saglabā segumu, laiku un teritorijas kārtību.
            </h2>
          </div>

          <div className="grid gap-4">
            {services.map((service) => (
              <article
                key={service.title}
                  className="border border-[#dfe7dc] bg-white p-5 sm:p-6"
              >
                <h3 className="text-xl font-black text-[#252344]">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[#514f70]">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
          <div className="overflow-hidden bg-[#1f1e3e]">
            <Image
              src={pipeInstallImage}
              alt="HDPE caurules ievilkšana ar beztranšeju metodi"
              width={1000}
              height={750}
              quality={60}
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), (max-width: 1279px) 50vw, 630px"
              className="h-[260px] w-full object-cover sm:h-[420px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1f7a2e]">
              Tehnika un pieeja
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Mūsdienīga pieeja precīziem pieslēgumu darbiem.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#514f70] sm:text-lg sm:leading-8">
              Darbi tiek plānoti tā, lai samazinātu rakšanas apjomu, saglabātu
              segumu un atstātu objektu sakārtotu pēc komunikāciju izbūves.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfe7dc] bg-[#f6f8f4]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1f7a2e]">
              Darbu teritorija
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight sm:text-5xl">
              Horizontālā urbšana privātiem un biznesa objektiem Latvijā.
            </h2>
          </div>

          <div>
            <p className="text-base leading-7 text-[#514f70] sm:text-lg sm:leading-8">
              RNNP veic beztranšeju komunikāciju izbūvi privātmājām,
              uzņēmumiem, saimnieciskām teritorijām un pašvaldību objektiem.
              Visbiežāk darbi saistīti ar ūdensvada, kanalizācijas,
              elektrības, sakaru, saules parku, vēja enerģijas objektu un
              aizsargcauruļu ievilkšanu vietās, kur tranšejas rakšana būtu
              dārga, laikietilpīga vai bojātu segumu.
            </p>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1f7a2e]">
              Process
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight sm:text-5xl">
              Skaidrs darbu plāns no apsekojuma līdz ievilkšanai.
            </h2>
          </div>

          <div className="divide-y divide-[#dfe7dc] border-y border-[#dfe7dc] bg-white">
            {workSteps.map((item, index) => (
              <div key={item} className="grid grid-cols-[3rem_1fr] gap-4 p-5 sm:p-6">
                <span className="text-sm font-black text-[#1f7a2e]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-bold leading-7 text-[#252344] sm:text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1f7a2e]">
              Biežākie jautājumi
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Par horizontālo urbšanu un beztranšeju cauruļvadiem.
            </h2>
          </div>

          <div className="mt-8 divide-y divide-[#dfe7dc] border-y border-[#dfe7dc]">
            {faqs.map((faq) => (
              <article key={faq.question} className="py-6">
                <h3 className="text-xl font-black text-[#252344]">
                  {faq.question}
                </h3>
                <p className="mt-3 max-w-4xl text-base leading-7 text-[#514f70]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#252344] text-white">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#62bd68]">
              Kontakti
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
              Vajag pārvilkt cauruli vai kabeli bez tranšejas?
            </h2>
          </div>

          <div className="grid gap-4 self-center text-sm leading-6 text-white/88 sm:leading-7">
            <div className="grid gap-3 text-base font-black">
              <a
                href="tel:+37129829648"
                className="bg-[#1f7a2e] px-6 py-4 text-center text-white transition hover:bg-white hover:text-[#252344]"
              >
                +371 29829648
              </a>
              <a
                href="mailto:rnnpinfo@gmail.com"
                className="border border-white/22 px-6 py-4 text-center text-white transition hover:border-white"
              >
                rnnpinfo@gmail.com
              </a>
            </div>

            <div className="border-t border-white/16 pt-4 sm:pt-5">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#62bd68] lg:text-right">
                Rekvizīti
              </p>
              <dl className="grid gap-x-5 gap-y-1.5 sm:grid-cols-[8.5rem_1fr] sm:gap-y-2 lg:grid-cols-[9rem_1fr]">
                <dt className="text-white/70">Uzņēmums</dt>
                <dd className="font-bold text-white">SIA &quot;RNNP&quot;</dd>
                <dt className="text-white/70">Adrese</dt>
                <dd>Doriņi, Skaistkalnes pagasts, Bauskas novads, LV-3924</dd>
                <dt className="text-white/70">Reģ. nr.</dt>
                <dd>40203569493</dd>
                <dt className="text-white/70">PVN nr.</dt>
                <dd>LV40203569493</dd>
                <dt className="text-white/70">SWIFT</dt>
                <dd>HABALV22</dd>
                <dt className="text-white/70">IBAN</dt>
                <dd className="break-all">LV08HABA0551058012081</dd>
                <dt className="text-white/70">Papildu tel.</dt>
                <dd>
                  <a className="hover:text-[#62bd68]" href="tel:+37123305833">
                    +371 23 305 833
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

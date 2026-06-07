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
      <header className="border-b border-[#dfe7dc] bg-white text-[#252344]">
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
            <a className="hover:text-[#2f9439]" href="#services">
              Pakalpojumi
            </a>
            <a className="hover:text-[#2f9439]" href="#process">
              Process
            </a>
            <a className="hover:text-[#2f9439]" href="#contact">
              Kontakti
            </a>
            <a className="hover:text-[#2f9439]" href="/ru" hrefLang="ru-LV">
              RU
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="/ru"
              hrefLang="ru-LV"
              className="inline-flex min-h-11 items-center justify-center border border-[#dfe7dc] px-3 text-xs font-black text-[#252344] transition hover:border-[#2f9439] hover:text-[#2f9439] lg:hidden"
            >
              RU
            </a>
            <a
              href="tel:+37129829648"
              className="inline-flex min-h-11 items-center justify-center bg-[#2f9439] px-4 text-sm font-black text-white transition hover:bg-[#252344] sm:px-5"
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
            <h1 className="mt-5 max-w-full break-words text-[1.82rem] font-black leading-[1.14] tracking-normal hyphens-auto [overflow-wrap:anywhere] min-[420px]:text-[2.05rem] sm:max-w-3xl sm:text-6xl sm:leading-[1.02] lg:text-7xl">
              Inženierkomunikācijas bez liekas rakšanas.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/74 sm:mt-6 sm:text-xl sm:leading-8">
              RNNP ierīko cauruļvadus un kabeļu līnijas ar beztranšeju metodi
              vietās, kur svarīga ir kārtība, precizitāte un minimāla ietekme
              uz segumu.
            </p>

            <div className="mt-7 grid gap-3 sm:flex">
              <a
                href="mailto:rnnpinfo@gmail.com"
                className="inline-flex min-h-12 items-center justify-center bg-[#2f9439] px-6 text-sm font-black text-white transition hover:bg-white hover:text-[#252344]"
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
              quality={70}
              sizes="(min-width: 1024px) 56vw, 100vw"
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
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f9439]">
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
              quality={70}
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="h-[260px] w-full object-cover sm:h-[420px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f9439]">
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
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f9439]">
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
              elektrības, sakaru un aizsargcauruļu ievilkšanu vietās, kur
              tranšejas rakšana būtu dārga, laikietilpīga vai bojātu segumu.
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
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f9439]">
              Process
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight sm:text-5xl">
              Skaidrs darbu plāns no apsekojuma līdz ievilkšanai.
            </h2>
          </div>

          <div className="divide-y divide-[#dfe7dc] border-y border-[#dfe7dc] bg-white">
            {workSteps.map((item, index) => (
              <div key={item} className="grid grid-cols-[3rem_1fr] gap-4 p-5 sm:p-6">
                <span className="text-sm font-black text-[#2f9439]">
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
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f9439]">
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
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#62bd68]">
              Kontakti
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
              Vajag pārvilkt cauruli vai kabeli bez tranšejas?
            </h2>
          </div>

          <div className="grid gap-5 self-center text-sm leading-7 text-white/76">
            <div className="grid gap-3 text-base font-black">
              <a
                href="tel:+37129829648"
                className="bg-[#2f9439] px-6 py-4 text-center text-white transition hover:bg-white hover:text-[#252344]"
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

            <div className="border-t border-white/16 pt-5">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#62bd68] lg:text-right">
                Rekvizīti
              </p>
              <dl className="grid gap-x-5 gap-y-2 sm:grid-cols-[8.5rem_1fr] lg:grid-cols-[9rem_1fr]">
                <dt className="text-white/48">Uzņēmums</dt>
                <dd className="font-bold text-white">SIA &quot;RNNP&quot;</dd>
                <dt className="text-white/48">Adrese</dt>
                <dd>Doriņi, Skaistkalnes pagasts, Bauskas novads, LV-3924</dd>
                <dt className="text-white/48">Reģ. nr.</dt>
                <dd>40203569493</dd>
                <dt className="text-white/48">PVN nr.</dt>
                <dd>LV40203569493</dd>
                <dt className="text-white/48">SWIFT</dt>
                <dd>HABALV22</dd>
                <dt className="text-white/48">IBAN</dt>
                <dd className="break-all">LV08HABA0551058012081</dd>
                <dt className="text-white/48">Papildu tel.</dt>
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

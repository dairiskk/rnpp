import type { Metadata } from "next";
import Image from "next/image";

const services = [
  {
    title: "Горизонтально направленное бурение",
    text: "Прокладка коммуникаций под дорогами, тротуарами, дворами и благоустроенными территориями без широкой траншеи.",
  },
  {
    title: "Бестраншейная прокладка труб",
    text: "Защитные трубы, водопроводные и канализационные подключения для частных и коммерческих объектов.",
  },
  {
    title: "Прокладка кабельных линий",
    text: "Решения для электричества, связи и других инженерных коммуникаций под землей.",
  },
];

const workSteps = [
  "Осмотр объекта и оценка трассы",
  "Планирование работ с учетом покрытия и доступа",
  "Пилотное бурение, расширение и протяжка коммуникаций",
  "Аккуратная сдача рабочей зоны после выполнения работ",
];

const highlights = [
  "Бестраншейный метод",
  "Минимальное влияние на покрытие",
  "Подходит для городской среды",
  "Работы по всей Латвии",
];

const faqs = [
  {
    question: "Что такое горизонтально направленное бурение?",
    answer:
      "Это бестраншейный метод, который позволяет протянуть трубы или защитные трубы для кабеля под дорогами, тротуарами, дворами и другими территориями без масштабного вскрытия покрытия.",
  },
  {
    question: "Для каких работ подходит прокол под дорогой?",
    answer:
      "Метод подходит для водопровода, канализации, электрики, связи и других инженерных коммуникаций, особенно там, где важно сохранить асфальт, брусчатку или благоустройство.",
  },
  {
    question: "Как получить предложение?",
    answer:
      "Свяжитесь с RNNP по телефону или e-mail и укажите адрес объекта, тип коммуникации, примерную длину трассы и доступную информацию о существующих сетях.",
  },
];

const equipmentImage = "/hdd-equipment-optimized.jpg";

const pipeInstallImage = "/pipe-installation-optimized.jpg";

export const metadata: Metadata = {
  title: "Горизонтальное бурение и прокол под дорогой в Латвии",
  description:
    "RNNP выполняет горизонтально направленное бурение, прокол под дорогой, бестраншейную прокладку труб, кабелей, водопровода и канализации в Латвии.",
  alternates: {
    canonical: "/ru",
    languages: {
      "lv-LV": "/",
      "ru-LV": "/ru",
      "x-default": "/",
    },
  },
  keywords: [
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
  ],
  openGraph: {
    type: "website",
    locale: "ru_LV",
    alternateLocale: ["lv_LV"],
    url: "/ru",
    siteName: "RNNP",
    title: "RNNP | Горизонтальное бурение в Латвии",
    description:
      "Бестраншейная прокладка труб, кабельных линий, водопровода и канализации в Латвии.",
  },
};

export default function RussianPage() {
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
        url: `${siteUrl}/ru`,
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
        areaServed: "Латвия",
        knowsLanguage: ["lv-LV", "ru-LV"],
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/ru#hdd-service`,
        name: "Горизонтальное бурение и бестраншейная прокладка коммуникаций",
        alternateName: [
          "ГНБ Латвия",
          "Прокол под дорогой",
          "Бестраншейная прокладка труб",
        ],
        provider: {
          "@id": `${siteUrl}/#business`,
        },
        areaServed: "Латвия",
        description:
          "RNNP выполняет горизонтальное бурение, прокол под дорогой, бестраншейную прокладку труб, кабельных линий, водопровода и канализации в Латвии.",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/ru#faq`,
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
    <main lang="ru" className="min-h-screen bg-[#f6f8f4] text-[#252344]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-[#dfe7dc] bg-white text-[#252344]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <a href="/ru" className="flex min-w-0 items-center gap-3" aria-label="RNNP">
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
            aria-label="Главная навигация"
          >
            <a className="hover:text-[#2f9439]" href="#services">
              Услуги
            </a>
            <a className="hover:text-[#2f9439]" href="#process">
              Процесс
            </a>
            <a className="hover:text-[#2f9439]" href="#contact">
              Контакты
            </a>
            <a className="hover:text-[#2f9439]" href="/" hrefLang="lv-LV">
              LV
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="/"
              hrefLang="lv-LV"
              className="inline-flex min-h-11 items-center justify-center border border-[#dfe7dc] px-3 text-xs font-black text-[#252344] transition hover:border-[#2f9439] hover:text-[#2f9439] lg:hidden"
            >
              LV
            </a>
            <a
              href="tel:+37129829648"
              className="inline-flex min-h-11 items-center justify-center bg-[#2f9439] px-4 text-sm font-black text-white transition hover:bg-[#252344] sm:px-5"
            >
              Позвонить
              <span className="hidden sm:inline">&nbsp;+371 29829648</span>
            </a>
          </div>
        </div>
      </header>

      <section className="bg-[#252344] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:pb-20">
          <div className="flex flex-col justify-center">
            <p className="w-fit bg-white/8 px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#62bd68]">
              Бестраншейные инженерные коммуникации
            </p>
            <h1 className="mt-5 max-w-3xl text-[2.05rem] font-black leading-[1.1] tracking-normal [overflow-wrap:anywhere] sm:text-6xl sm:leading-[1.02] lg:text-7xl">
              Коммуникации без лишней раскопки.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/74 sm:mt-6 sm:text-xl sm:leading-8">
              RNNP прокладывает трубы и кабельные линии бестраншейным методом
              в местах, где важны аккуратность, точность и минимальное влияние
              на покрытие.
            </p>

            <div className="mt-7 grid gap-3 sm:flex">
              <a
                href="mailto:rnnpinfo@gmail.com"
                className="inline-flex min-h-12 items-center justify-center bg-[#2f9439] px-6 text-sm font-black text-white transition hover:bg-white hover:text-[#252344]"
              >
                Запросить предложение
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center border border-white/24 px-6 text-sm font-bold text-white transition hover:border-white hover:bg-white/8"
              >
                Смотреть услуги
              </a>
            </div>
          </div>

          <div className="overflow-hidden bg-[#1f1e3e]">
            <Image
              src={equipmentImage}
              alt="Техника для горизонтального бурения на объекте"
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
              Услуги
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight sm:text-5xl">
              Работы, которые сохраняют покрытие, время и порядок на объекте.
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
              alt="Протяжка HDPE трубы бестраншейным методом"
              width={1000}
              height={750}
              quality={70}
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="h-[260px] w-full object-cover sm:h-[420px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f9439]">
              Техника и подход
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              Современный подход для точных подключений.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#514f70] sm:text-lg sm:leading-8">
              Работы планируются так, чтобы сократить объем земляных работ,
              сохранить покрытие и оставить объект аккуратным после прокладки
              коммуникаций.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfe7dc] bg-[#f6f8f4]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f9439]">
              Территория работ
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight sm:text-5xl">
              Горизонтальное бурение для частных и коммерческих объектов.
            </h2>
          </div>

          <div>
            <p className="text-base leading-7 text-[#514f70] sm:text-lg sm:leading-8">
              RNNP выполняет бестраншейную прокладку коммуникаций для частных
              домов, предприятий, хозяйственных территорий и муниципальных
              объектов. Чаще всего это водопровод, канализация, электричество,
              связь и защитные трубы в местах, где траншея была бы дорогой,
              долгой или повредила бы покрытие.
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
              Процесс
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight sm:text-5xl">
              Понятный план работ от осмотра до протяжки.
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
              Частые вопросы
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              О горизонтальном бурении и бестраншейной прокладке труб.
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
              Контакты
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
              Нужно протянуть трубу или кабель без траншеи?
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
                Реквизиты
              </p>
              <dl className="grid gap-x-5 gap-y-2 sm:grid-cols-[8.5rem_1fr] lg:grid-cols-[9rem_1fr]">
                <dt className="text-white/48">Компания</dt>
                <dd className="font-bold text-white">SIA &quot;RNNP&quot;</dd>
                <dt className="text-white/48">Адрес</dt>
                <dd>Doriņi, Skaistkalnes pagasts, Bauskas novads, LV-3924</dd>
                <dt className="text-white/48">Рег. №</dt>
                <dd>40203569493</dd>
                <dt className="text-white/48">PVN / VAT №</dt>
                <dd>LV40203569493</dd>
                <dt className="text-white/48">SWIFT</dt>
                <dd>HABALV22</dd>
                <dt className="text-white/48">IBAN</dt>
                <dd className="break-all">LV08HABA0551058012081</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

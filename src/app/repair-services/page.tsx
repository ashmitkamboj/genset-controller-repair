import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const repairShowcases = [
  {
    title: "Mahindra Powerol GC1211 Controller",
    brand: "Mahindra GC1211",
    model: "GC1211 / Sedemac",
    image: "/repair-services/images/mahindra-gc1211.png",
    alt: "Mahindra Powerol GC1211 Genset Controller",
    description: "Display repair, button keypad replacement, and relay control repair for GC1211 & GC1111 series.",
  },
  {
    title: "Cummins Electronic Control Panel (ECP)",
    brand: "Cummins ECP",
    model: "ECP Series",
    image: "/repair-services/images/cummins-ecp.png",
    alt: "Cummins Electronic Control Panel",
    description: "Complete refurbishing of LED indicators, parameter display units, and key switch circuits.",
  },
  {
    title: "Cummins PowerCommand PCC3300 Base Board",
    brand: "Cummins PCC3300",
    model: "PCC3300 Card",
    image: "/repair-services/images/cummins-pcc3300.png",
    alt: "Cummins PowerCommand PCC3300 Main Board Repair",
    description: "Component-level repair of main motherboard cards, power supplies, and communication ICs.",
  },
  {
    title: "KOEL Green Kirloskar Genset Controller",
    brand: "Kirloskar KG",
    model: "KG Series / KOEL",
    image: "/repair-services/images/koel-green-kirloskar.png",
    alt: "KOEL Green Kirloskar Genset Controller",
    description: "LCD screen replacement, runtime counter fix, fault trip diagnostics, and auto-start logic repair.",
  },
  {
    title: "Cummins PowerStart PS0500 Controller",
    brand: "Cummins PS0500",
    model: "PS0500 Series",
    image: "/repair-services/images/cummins-powerstart-ps0500.png",
    alt: "Cummins PowerStart PS0500 Controller",
    description: "Battery voltage readout fix, hour meter reset/calibration, and power supply diagnostics.",
  },
  {
    title: "Cummins PowerStart PS0600 Controller",
    brand: "Cummins PS0600",
    model: "PS0600 Series",
    image: "/repair-services/images/cummins-powerstart-ps0600.png",
    alt: "Cummins PowerStart PS0600 Controller",
    description: "Resolution of Remote E-Stop errors, Fault 1434, LCD backlight repair, and membrane switch fix.",
  },
];

const services = [
  {
    title: "Repair of Mahindra Genset Controllers",
    href: "/repair-services/mahindra",
    count: "GC1211, GC1111, GC2111, SUN409, SUN904",
  },
  {
    title: "Repair of Kirloskar Genset Controllers",
    href: "/repair-services/kirloskar",
    count: "KG Series, Sedemac GC2111, GC2112, KG645, KG640",
  },
  {
    title: "Repair of Ashok Leyland Controller",
    href: "/repair-services/ashok-leyland",
    count: "GC1201, GC1202 Series",
  },
  {
    title: "Repair of Cummins, Sudhir, Jakson Genset Controller",
    href: "/repair-services/cummins-sudhir-jakson",
    count: "PS0500, PS0600, HMI211, HMI320, PCC1302, PCC3300, ECP, ECPG",
  },
  {
    title: "Repair of Other Controllers",
    href: "/repair-services/other",
    count: "Deep Sea (DSE 7320), ComAp InteliCompact, Crompton Greaves (CGI 14N)",
  },
];

export default function RepairServicesPage() {
  return (
    <>
      <Navbar />
      <main className="services-page">
        <section className="services-hero border-b border-[var(--line)] bg-[rgba(237,248,243,0.4)]">
          <div className="site-container services-hero-inner">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--ink-muted)] mb-4 uppercase tracking-wider">
              <Link href="/" className="hover:text-[var(--teal)] transition">Home</Link>
              <span>/</span>
              <span className="text-[var(--teal)]">Repair Services</span>
            </div>
            <p className="eyebrow">Controller repair specialists</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--teal)] tracking-tight leading-tight">
              Repair of all kinds of Genset Controllers, Base-cards and HMIs
            </h1>
            <p className="services-intro mt-4 text-lg md:text-xl text-[var(--ink-muted)] max-w-3xl">
              We offer expert component-level repairs, display screen replacements, motherboard card refurbishing, and diagnostic testing for all major generator controller brands.
            </p>
          </div>
        </section>

        {/* 6 Controller Photos Gallery Grid - Clean Brand Tags */}
        <section className="site-container py-12 md:py-16" aria-label="Controller Showcase Gallery">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[var(--line)]">
            <div>
              <p className="eyebrow mb-1">Tested & Refurbished Units</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                Our Controller Repair Gallery
              </h2>
            </div>
            <p className="text-sm font-semibold text-[var(--ink-muted)] mt-2 md:mt-0">
              Showing popular controller models repaired at our Delhi/Gurugram lab
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {repairShowcases.map((item, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.85)] shadow-md transition hover:-translate-y-1 hover:shadow-xl hover:border-[var(--teal)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-[var(--teal)] px-2.5 py-1 text-xs font-bold text-white shadow tracking-wide">
                    {item.brand}
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-md bg-black/75 backdrop-blur-sm px-2.5 py-1 text-xs font-mono font-semibold text-yellow-300">
                    {item.model}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--teal)] transition">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


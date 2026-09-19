import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const dseGallery = [
  {
    title: "Deep Sea Electronics DSE 7320 MKII Genset Controller",
    tag: "DSE 7320 MKII",
    image: "/repair-services/other/dse7320-front.png",
    alt: "Deep Sea Electronics DSE 7320 MKII Auto Mains Failure Genset Controller",
    description: "Component-level repair for Deep Sea DSE 7320 MKII, DSE 7310, DSE 6120, and DSE 4520 series controllers including LCD glass, membrane buttons, and power board fix.",
  },
  {
    title: "DSE Controller Engine Status & 'No Speed Signal' Alarm Diagnostics",
    tag: "Alarm Diagnostics",
    image: "/repair-services/other/dse-alarm-screen.png",
    alt: "Deep Sea DSE Display showing Engine Status Alarm No Speed Signal MANUAL Mode",
    description: "Troubleshooting and clearing false alarm trips including 'No Speed Signal', MPU pickup sensor faults, overspeed shutdowns, and CAN bus communication errors.",
  },
];

const comapGallery = [
  {
    title: "ComAp InteliCompact NT Generator Controller Front Panel",
    tag: "InteliCompact NT",
    image: "/repair-services/other/intelicompact-front.png",
    alt: "ComAp InteliCompact NT Generator Controller Panel",
    description: "Servicing of ComAp InteliCompact NT, InteliLite NT, and InteliDrive controllers. Fixes non-responsive membrane keys, start/stop buttons, and mode selectors.",
  },
  {
    title: "ComAp InteliCompact NT Live Display Parameter Screen",
    tag: "Live Screen Test",
    image: "/repair-services/other/intelicompact-powered.png",
    alt: "ComAp InteliCompact NT Controller Live Powered Screen Display",
    description: "LCD screen display replacement and parameter readout calibration showing Ready, Brks Off, Cos 0.00, RPM, kW, and breaker status.",
  },
  {
    title: "ComAp & DSE Graphical LCD Display Screen Component Unit",
    tag: "LCD Display Glass",
    image: "/repair-services/other/comap-lcd-display.png",
    alt: "ComAp Graphical Green LCD Screen Display Component",
    description: "Component replacement for damaged, pixelated, or dim green backlight LCD display glass panels for ComAp and Deep Sea controllers.",
  },
  {
    title: "ComAp Motherboard PCB Circuit & Diagnostic Board",
    tag: "Motherboard PCB",
    image: "/repair-services/other/comap-dse-pcb.png",
    alt: "ComAp Controller Internal Motherboard PCB Circuit Repair",
    description: "Diagnostic repair of main microcontroller IC, coin cell battery replacement, DB9 serial communication ports, filter capacitors, and terminal connectors.",
  },
];

const cromptonGreavesGallery = [
  {
    title: "Crompton Greaves CGI 14N Over Current Relay Controller",
    tag: "CGI 14N Relay",
    image: "/repair-services/other/crompton-greaves-cgi14n.png",
    alt: "Crompton Greaves CGI 14N Over Current Relay Panel",
    description: "Repair and calibration for Crompton Greaves (CG) CGI 14N digital overcurrent protection relays, trip circuit monitoring, error LED indicators, and navigation keys.",
  },
];

const kirloskarGreenGallery = [
  {
    title: "Kirloskar Green Genset Control Panel Unit",
    tag: "Kirloskar Green",
    image: "/repair-services/other/kirloskar-green-front.png",
    alt: "Kirloskar Green Generator Control Panel Unit",
    description: "Electronic servicing for Kirloskar Green compact generator controllers, alarm acknowledgment (Ack) push buttons, warning LEDs, and start/stop circuits.",
  },
];

export default function OtherControllersRepairPage() {
  return (
    <>
      <Navbar />
      <main className="services-page">
        {/* Hero Banner Section */}
        <section className="services-hero border-b border-[var(--line)] bg-[rgba(237,248,243,0.4)]">
          <div className="site-container services-hero-inner">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--ink-muted)] mb-4 uppercase tracking-wider">
              <Link href="/" className="hover:text-[var(--teal)] transition">Home</Link>
              <span>/</span>
              <Link href="/repair-services" className="hover:text-[var(--teal)] transition">Repair Services</Link>
              <span>/</span>
              <span className="text-[var(--teal)]">Deep Sea, ComAp, Crompton Greaves & Other Controllers</span>
            </div>
            <p className="eyebrow">Universal Genset Controller Repair</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--teal)] tracking-tight leading-tight">
              Repair of Deep Sea, ComAp, Crompton Greaves & Other Controllers
            </h1>
            <p className="services-intro mt-4 text-base md:text-lg text-[var(--ink-muted)] max-w-3xl">
              Component-level repairs for Deep Sea Electronics (DSE), ComAp InteliCompact & InteliLite, Crompton Greaves (CG) relays, Greaves Cotton, and universal generator controllers.
            </p>
          </div>
        </section>

        {/* SECTION 1: Repair of Deep Sea Electronics (DSE) Genset Controllers */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
              Repair of Deep Sea Electronics (DSE) Genset Controllers
            </h2>
            <ul className="mt-4 space-y-3 text-base md:text-lg text-[var(--ink-muted)]">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Component-level repair for Deep Sea Electronics (DSE 7320 MKII, DSE 7310, DSE 6120, DSE 4520) controllers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Resolving <strong className="text-[var(--teal)] font-bold">&quot;No Speed Signal&quot;</strong> trip errors, damaged LCD displays, power supply board faults, and button failures.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>All serviced DSE controllers undergo bench testing and come backed with a <strong>6-month repair warranty</strong>.</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dseGallery.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.75)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-[var(--teal)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded bg-slate-800 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider shadow">
                    {item.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg md:text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--teal)] transition">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: Repair of ComAp InteliCompact & InteliLite Controllers */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
              Repair of ComAp InteliCompact & InteliLite Controllers
            </h2>
            <ul className="mt-4 space-y-3 text-base md:text-lg text-[var(--ink-muted)]">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Component repair and screen replacements for ComAp InteliCompact NT and InteliLite generator controllers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Troubleshooting graphical LCD screen corruption, non-responsive keys, communication port failures, and power IC diagnostics.</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comapGallery.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.75)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-[var(--teal)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded bg-emerald-700 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider shadow">
                    {item.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg md:text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--teal)] transition">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Repair of Crompton Greaves (CG) Over Current Relays */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
              Repair of Crompton Greaves (CG) Over Current Relays
            </h2>
            <ul className="mt-4 space-y-3 text-base md:text-lg text-[var(--ink-muted)]">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Component repair and bench calibration for Crompton Greaves (CG) CGI 14N digital overcurrent protection relays.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Resolving false trip signals, display readout errors, error LED indicators, and relay output contact failures.</span>
              </li>
            </ul>
          </div>

          <div className="max-w-2xl">
            {cromptonGreavesGallery.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.75)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-[var(--teal)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded bg-blue-800 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider shadow">
                    {item.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg md:text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--teal)] transition">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Repair of Kirloskar Green & Universal Controllers */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
              Repair of Kirloskar Green & Universal Engine Controllers
            </h2>
            <ul className="mt-4 space-y-3 text-base md:text-lg text-[var(--ink-muted)]">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Electronic repairs for universal generator control panels including Kirloskar Green, Greaves Cotton, Smartgen, and Woodward controllers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Fast turnaround servicing with comprehensive diagnostic bench testing and nationwide courier support.</span>
              </li>
            </ul>
          </div>

          <div className="max-w-2xl">
            {kirloskarGreenGallery.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.75)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-[var(--teal)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded bg-[var(--teal)] px-3 py-1 text-xs font-bold text-white uppercase tracking-wider shadow">
                    {item.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg md:text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--teal)] transition">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

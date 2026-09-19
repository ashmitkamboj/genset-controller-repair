import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const ashokLeylandGallery = [
  {
    title: "Ashok Leyland LEYPOWER GC 1202 Front Panel",
    tag: "GC1202 Control Panel",
    image: "/repair-services/ashok-leyland/gc1202-front.png",
    alt: "Ashok Leyland LeyPower GC 1202 Genset Controller Front Panel",
    description: "Front display glass, membrane push-buttons, alarm status LED, and configuration interface.",
  },
  {
    title: "GC1201 / GC1202 Motherboard PCB Component Repair",
    tag: "Motherboard PCB",
    image: "/repair-services/ashok-leyland/gc1202-pcb.png",
    alt: "Ashok Leyland GC1201 GC1202 Main Circuit Board PCB Diagnostics",
    description: "Micro-controller MCU repair, USB programming port interface, power supply filter capacitors, and relay drivers.",
  },
];

export default function AshokLeylandRepairPage() {
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
              <span className="text-[var(--teal)]">Ashok Leyland</span>
            </div>
            <p className="eyebrow">Ashok Leyland LeyPower Controller Specialists</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--teal)] tracking-tight leading-tight">
              Repair of Ashok Leyland Controller
            </h1>
            <p className="services-intro mt-4 text-base md:text-lg text-[var(--ink-muted)] max-w-3xl">
              Specialized component-level repair, LCD display panel servicing, and motherboard diagnostics for Ashok Leyland LeyPower generator controllers.
            </p>
          </div>
        </section>

        {/* SECTION 1: GC1201, GC1202 Ashok Leyland Controllers */}
        {/* Primary Service Line */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
              Repair of GC1201 & GC1202 Ashok Leyland Genset Controllers
            </h2>
            <ul className="mt-4 space-y-3 text-base md:text-lg text-[var(--ink-muted)]">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Component-level repair for Ashok Leyland LeyPower GC1201 and GC1202 series controllers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Repairing blank display issues, key switch starting failures, parameter corruption, and output relay trigger faults.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>All serviced controllers are bench-tested and come backed by a <strong>6-month repair warranty</strong>.</span>
              </li>
            </ul>
          </div>

          {/* 2-Image Showcase Gallery */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[var(--teal)] mb-2">
              GC1201 / GC1202 Repair Showcase & PCB Diagnostics
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ashokLeylandGallery.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.85)] shadow-md transition hover:-translate-y-1 hover:shadow-xl hover:border-[var(--teal)]"
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

        {/* Additional Models Support */}
        <section className="site-container py-12 border-b border-[var(--line)]">
          <div className="rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.75)] p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-3">
              Sedemac, Deep Sea Electronics (DSE) & Datakom Units for Ashok Leyland Gensets
            </h3>
            <p className="text-base md:text-lg text-[var(--ink-muted)] leading-relaxed">
              In addition to GC1201 and GC1202 LeyPower models, we also service and repair all third-party controller brands fitted on Ashok Leyland generators including Sedemac, Deep Sea (DSE), and Datakom units.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const mahindraSection1Gallery = [
  {
    title: "Mahindra Powerol GC1211 Controller Panel",
    tag: "GC1211 Unit",
    image: "/repair-services/mahindra/gc1211-front.png",
    alt: "Powerol by Mahindra GC1211 Controller Front Panel",
    description: "Front display membrane, start/stop buttons, and LED alarm indicator setup.",
  },
  {
    title: "Mahindra Powerol GC1111 Controller Panel",
    tag: "GC1111 Unit",
    image: "/repair-services/mahindra/gc1111-front.png",
    alt: "Powerol by Mahindra GC1111 Controller Front Panel",
    description: "Compact GC1111 controller front panel with auto/manual and configuration buttons.",
  },
  {
    title: "Firmware Checksum Error Diagnostic & Reflashing",
    tag: "Firmware / ECU Repair",
    image: "/repair-services/mahindra/firmware-checksum-error.png",
    alt: "Mahindra Controller Display showing Firmware Checksum Error",
    description: "Resolution of 'Firmware Checksum Error - Update Firmware' code via EEPROM/MCU reprograming.",
  },
  {
    title: "GC1211 / GC1111 Internal Display PCB Board",
    tag: "Display Board",
    image: "/repair-services/mahindra/gc1211-pcb-display.png",
    alt: "GC1211 Controller Internal Display Board Repair",
    description: "Repair of LCD display glass, backlighting, micro-switches, and battery backup cell.",
  },
  {
    title: "Sedemac Main Circuit Board PCB Diagnostics",
    tag: "Motherboard Repair",
    image: "/repair-services/mahindra/gc1211-pcb-main.png",
    alt: "Sedemac Main Circuit Board PCB Component Repair",
    description: "Micro-controller repair, power supply capacitor replacement, and relay driver troubleshooting.",
  },
  {
    title: "Rear Terminal Wiring & USB Programming Interface",
    tag: "Interface & Terminals",
    image: "/repair-services/mahindra/gc1211-wiring-diagram.png",
    alt: "Sedemac GC1211 Rear Terminal Diagram and USB Port",
    description: "Inspection of Genset I/P, Mains I/P, RS-485, CAN, Digital I/O, and USB port connectivity.",
  },
  {
    title: "Batch Testing: Mahindra GC1211 Front Units",
    tag: "Bulk Bench Testing",
    image: "/repair-services/mahindra/gc1211-batch-front.png",
    alt: "Batch repair and testing of Mahindra GC1211 controllers",
    description: "Simultaneous bench testing of multiple Mahindra GC1211 controllers prior to dispatch.",
  },
  {
    title: "Batch Inspection: Rear Casing & Terminal Blocks",
    tag: "Quality Control",
    image: "/repair-services/mahindra/gc1211-batch-rear.png",
    alt: "Batch rear terminal inspection of Mahindra Sedemac controllers",
    description: "Comprehensive multi-point quality control testing for output relays and sensor inputs.",
  },
];

export default function MahindraRepairPage() {
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
              <span className="text-[var(--teal)]">Mahindra</span>
            </div>
            <p className="eyebrow">Mahindra Powerol Controller Specialists</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--teal)] tracking-tight leading-tight">
              Repair of Mahindra Genset Controllers
            </h1>
            <p className="services-intro mt-4 text-base md:text-lg text-[var(--ink-muted)] max-w-3xl">
              Specialized component-level repairs, display screen replacements, firmware reflashing, and bench testing for Mahindra Powerol generator controllers.
            </p>
          </div>
        </section>

        {/* SECTION 1: GC1211, GC1111, GC1112 SEDEMAC Controllers */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
              Repair of GC1211, GC1111 & GC1112 SEDEMAC Genset Controllers
            </h2>
            <ul className="mt-4 space-y-3 text-base md:text-lg text-[var(--ink-muted)]">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Component-level repair for Mahindra Sedemac GC1211, GC1111, and GC1112 generator controllers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Resolution of LCD display screen faults, firmware checksum error reflashing, and power board component replacement.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>All repaired controllers undergo bench testing and come backed with a <strong>6-month repair warranty</strong>.</span>
              </li>
            </ul>
          </div>

          {/* Section 1 Image Gallery */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[var(--teal)] mb-2">
              GC1211 / GC1111 / GC1112 Repair Showcase
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mahindraSection1Gallery.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.75)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-[var(--teal)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-emerald-950/10">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 rounded bg-[var(--teal)] px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider shadow">
                    {item.tag}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--teal)] transition">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: GC2111, GC2112 Sedemac Genset Controllers */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
              Repair of GC2111, GC2112 Sedemac Genset Controllers for Mahindra, Eicher, Kirloskar OEMs
            </h2>
            <ul className="mt-4 space-y-3 text-base md:text-lg text-[var(--ink-muted)]">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Specialized AMF controller servicing for SEDEMAC GC2111 and GC2112 units on Mahindra Powerol, Eicher, and Kirloskar gensets.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Diagnosis and repair of display blanking, CAN bus communications, mains sensing, and starter relay drivers.</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.85)] shadow-md transition hover:border-[var(--teal)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/repair-services/mahindra/gc2111-front.png"
                  alt="SEDEMAC GC2111 Controller Front Panel"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded bg-amber-500 px-2.5 py-1 text-xs font-bold text-black uppercase shadow">
                  GC2111 Front Unit
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)]">
                  SEDEMAC GC2111 Front Control Interface
                </h3>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.85)] shadow-md transition hover:border-[var(--teal)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/repair-services/mahindra/gc2111-pcb.png"
                  alt="SEDEMAC GC2111 Motherboard PCB Component Repair"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded bg-[var(--teal)] px-2.5 py-1 text-xs font-bold text-white uppercase shadow">
                  Motherboard PCB
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)]">
                  GC2111 / GC2112 Motherboard Electronics Diagnostic
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SUN409 & SUN904 Genset Controllers of Mahindra */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
              Repair of SUN409 & SUN904 Genset Controllers of Mahindra
            </h2>
            <ul className="mt-4 space-y-3 text-base md:text-lg text-[var(--ink-muted)]">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Complete repair and recalibration support for Mahindra Powerol SUN409 (GCS-409) and SUN904 industrial control stations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Ignition key switch servicing, bargraph meter recalibration, and digital 7-segment display repair.</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 group overflow-hidden rounded-xl border border-orange-200 bg-white shadow-md transition hover:border-orange-400">
              <div className="relative aspect-square w-full overflow-hidden bg-orange-50">
                <Image
                  src="/repair-services/mahindra/sun409-gcs409.png"
                  alt="Mahindra Powerol SUN409 / GCS-409 Orange Controller Station"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded bg-orange-600 px-2.5 py-1 text-xs font-bold text-white uppercase shadow">
                  SUN409 / GCS-409
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-[var(--foreground)]">
                  Mahindra Powerol GCS-409 Station
                </h3>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.85)] p-6 shadow-sm">
                <h4 className="text-lg font-bold text-[var(--teal)] mb-2">
                  Key Switch & Key Cylinder Servicing
                </h4>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  Replacement and repair of ignition key switch lock mechanisms (Off, Run, Start), preventing intermittent generator starting issues.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.85)] p-6 shadow-sm">
                <h4 className="text-lg font-bold text-[var(--teal)] mb-2">
                  Bargraph LED Meter & Digital Parameter Display Recalibration
                </h4>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  Precision calibration of LED bar indicators for oil pressure (bar), coolant temperature (°C), fuel percentage (%), and 7-segment digital displays for RPM, Hours, and Battery DCA.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.85)] p-6 shadow-sm">
                <h4 className="text-lg font-bold text-[var(--teal)] mb-2">
                  7-Segment Digital Display & Sensor Input Circuit Repair
                </h4>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  Expert troubleshooting of Low Lube Oil Pressure (LOP), High Water Temperature (HWT), Low Fuel Level (LFL), and Charge Fail (CHF) sensor monitoring circuits.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

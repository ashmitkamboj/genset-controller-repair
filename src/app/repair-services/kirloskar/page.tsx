import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const kirloskarPart1Gallery = [
  {
    title: "KOEL Green KG934 Engine Temp Display Fix",
    tag: "Temperature Display",
    image: "/repair-services/kirloskar/kg934-engine-temp.png",
    alt: "KOEL Green Panel showing Engine Temperature Lo Lo °C",
    description: "Resolution of 'Engine Temperature Lo Lo °C' readout error and coolant sensor circuit calibration.",
  },
  {
    title: "KG934 / KG545 LCD Display PCB Board Repair",
    tag: "Display Board",
    image: "/repair-services/kirloskar/kg934-pcb-display.png",
    alt: "KG934 LCD Display Board with backlit glass and micro-buttons",
    description: "Replacement of broken LCD glass screens, backlight LEDs, and tactile micro-buttons.",
  },
  {
    title: "KOEL Green Sensor Fault Diagnostics",
    tag: "Sensor Fault Error",
    image: "/repair-services/kirloskar/kg934-sensor-fault.png",
    alt: "KOEL Green Panel showing Sensor Fault O.Pres. Open",
    description: "Repair of 'Sensor Fault O.Pres. Open' oil pressure sensor input channels and alarm logic.",
  },
];

const kirloskarPart2Gallery = [
  {
    title: "KG645 / KG640 Motherboard PCB Diagnostics",
    tag: "Motherboard Repair",
    image: "/repair-services/kirloskar/kg645-pcb-main.png",
    alt: "Kirloskar KG645 Main Motherboard PCB Component Repair",
    description: "Component-level repair of microcontrollers, power supply capacitors, and terminal headers.",
  },
  {
    title: "KG645 Engine Runtime & Trip Counter Meter",
    tag: "Runtime Meter",
    image: "/repair-services/kirloskar/kg645-eng-runtime.png",
    alt: "KOEL Green Panel showing Engine Run Time, Starts, and Trips",
    description: "Restoration of 'ENG RUN TIME', generator start counter, and fault trip history counters.",
  },
  {
    title: "Battery Voltage Sensing & Calibration Diagnosis",
    tag: "Voltage Calibration",
    image: "/repair-services/kirloskar/kg645-battery-volt-calib.png",
    alt: "KG645 Display showing Battery Volt 69.1v calibration readout",
    description: "Calibration repair for incorrect 'BATTERY VOLT 69.1 v' high-voltage measurement errors.",
  },
];

export default function KirloskarRepairPage() {
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
              <span className="text-[var(--teal)]">Kirloskar</span>
            </div>
            <p className="eyebrow">KOEL Green & Kirloskar Controller Specialists</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--teal)] tracking-tight leading-tight">
              Repair of Kirloskar Genset Controllers
            </h1>
            <p className="services-intro mt-4 text-base md:text-lg text-[var(--ink-muted)] max-w-3xl">
              Professional repair, LCD display replacement, sensor channel recalibration, and motherboard servicing for Kirloskar KOEL Green series generator controllers.
            </p>
          </div>
        </section>

        {/* PART 1: KG934, KG545 Series */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
              Repair of Kirloskar Genset Controllers (KG934, KG545 Series)
            </h2>
            <ul className="mt-4 space-y-3 text-base md:text-lg text-[var(--ink-muted)]">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Troubleshooting and component repair for KOEL Green KG934 and KG545 series controllers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Fixing sensor fault errors including <strong className="text-[var(--teal)] font-bold">&quot;Sensor Fault O.Pres. Open&quot;</strong> and <strong className="text-[var(--teal)] font-bold">&quot;Engine Temperature Lo Lo °C&quot;</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Replacement of display glass, backlighting, and sensor input channels with a <strong>6-month repair warranty</strong>.</span>
              </li>
            </ul>
          </div>

          {/* Part 1 Gallery (3 Images) */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-[var(--teal)]">
              KG934 & KG545 Diagnostics
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kirloskarPart1Gallery.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.75)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-[var(--teal)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 rounded bg-[var(--teal)] px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow">
                    {item.tag}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-base md:text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--teal)] transition">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PART 2: KG645, KG640 Series */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
              Repair of Kirloskar KG645 & KG640 Genset Controllers
            </h2>
            <ul className="mt-4 space-y-3 text-base md:text-lg text-[var(--ink-muted)]">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Motherboard and microcontroller repair for Kirloskar KG645 and KG640 controllers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/10 text-xs font-bold text-[var(--teal)]">✓</span>
                <span>Fixing battery voltage readout errors like <strong className="text-[var(--teal)] font-bold">&quot;BATTERY VOLT 69.1 v&quot;</strong>, restoring engine run time counters, and replacing power supply ICs.</span>
              </li>
            </ul>
          </div>

          {/* Part 2 Gallery (3 Images) */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-[var(--teal)]">
              KG645 & KG640 Diagnostics
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kirloskarPart2Gallery.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[rgba(249,252,249,0.75)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-[var(--teal)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 rounded bg-blue-700 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow">
                    {item.tag}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-base md:text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--teal)] transition">
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

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const cumminsPs500Gallery = [
  {
    title: "Cummins PowerStart PS0500 Front Panel",
    tag: "PS0500 Control Panel",
    image: "/repair-services/cummins-sudhir-jakson/ps0500-front.png",
    alt: "Cummins PowerStart PS0500 Controller Front Panel",
    description: "Display readout showing BattVolts=12.1 and GensetHrs, manual/start/auto/stop membrane buttons & status LEDs.",
  },
  {
    title: "Cummins PowerStart PS0500 Motherboard PCB",
    tag: "Motherboard PCB",
    image: "/repair-services/cummins-sudhir-jakson/ps0500-pcb.png",
    alt: "Cummins PowerStart PS0500 Internal Circuit Board PCB Component Repair",
    description: "Component-level repair of main microcontroller IC, heavy-duty power regulation heat-sink, capacitors, and terminal blocks.",
  },
];

const cumminsPs600Gallery = [
  {
    title: "Cummins PowerStart PS0600 Shutdown Fault Display",
    tag: "Fault 1434 / E-Stop",
    image: "/repair-services/cummins-sudhir-jakson/ps0600-front.png",
    alt: "Cummins PowerStart PS0600 Display showing Shutdown Fault 1434 Remote E-Stop",
    description: "Diagnostic repair of 'FAULT SHUTDOWN / SHUTDOWN FAULT: 1434 REMOTE E-STOP' error codes and LCD backlight.",
  },
  {
    title: "Cummins PowerStart PS0600 Rear Casing & Harness Terminals",
    tag: "Rear Terminals",
    image: "/repair-services/cummins-sudhir-jakson/ps0600-rear.png",
    alt: "Cummins PowerStart PS0600 Rear Casing and Wiring Terminal Connectors",
    description: "Inspection and repair of rear enclosure connectors, multi-pin wiring harnesses, and live terminal protection blocks.",
  },
];

const cumminsHmi211Gallery = [
  {
    title: "Cummins PowerCommand HMI211 Display Panels",
    tag: "HMI211 Front Unit",
    image: "/repair-services/cummins-sudhir-jakson/hmi211-front.png",
    alt: "Cummins PowerCommand HMI211 Display Front Panel Pair",
    description: "Front display panel setup showing Not In Auto, Shutdown, Warning, Remote Start, Auto & Manual Run status.",
  },
  {
    title: "HMI211 Rear Enclosure & Dual Harness Connector Block",
    tag: "Dual Connector",
    image: "/repair-services/cummins-sudhir-jakson/hmi211-rear.png",
    alt: "Cummins PowerCommand HMI211 Rear Casing and Dual Connectors",
    description: "Inspection and repair of rear dual 8-pin harness connectors, housing enclosure, and communication pins.",
  },
  {
    title: "HMI211 Internal LCD Display PCB Board Diagnostics",
    tag: "LCD Board Repair",
    image: "/repair-services/cummins-sudhir-jakson/hmi211-pcb.png",
    alt: "HMI211 Internal LCD Display Board PCB Repair",
    description: "Repair of LCD glass display module, diagnostic LEDs, rotary alarm buzzer, and SMD circuitry.",
  },
];

const cumminsHmi320Gallery = [
  {
    title: "Cummins PowerCommand HMI320 Display Panel",
    tag: "HMI320 Front Unit",
    image: "/repair-services/cummins-sudhir-jakson/hmi320-front.png",
    alt: "Cummins PowerCommand HMI320 Display Panel in DEMO Mode",
    description: "Large LCD graphical display panel repair showing History/About parameters, CB Open/Close buttons & Not in Auto status.",
  },
  {
    title: "HMI320 Rear Enclosure & Terminal Interface",
    tag: "Rear Connectors",
    image: "/repair-services/cummins-sudhir-jakson/hmi320-rear.png",
    alt: "Cummins PowerCommand HMI320 Rear Casing and Connector Port",
    description: "Repair of rear enclosure port cutouts, multi-pin header pins, and communication bus connections.",
  },
];

const cumminsPcc1302Gallery = [
  {
    title: "Cummins PowerCommand PCC1302 / PCC1301 Base Card Board",
    tag: "Base Card PCB",
    image: "/repair-services/cummins-sudhir-jakson/pcc1302-pcb-main.png",
    alt: "Cummins PowerCommand PCC1302 Base Card Motherboard PCB Repair",
    description: "Component-level motherboard repair of aluminum cooling heat-sink, power capacitors, micro-relays, and inductors.",
  },
  {
    title: "PCC1302 / PCC1301 Base-Card Bench Test Unit",
    tag: "Bench Test Unit",
    image: "/repair-services/cummins-sudhir-jakson/pcc1302-pcb-bench.png",
    alt: "Cummins PowerCommand Base Card PCB Bench Unit",
    description: "Rigorous bench diagnostic testing of PCC1302 and PCC1301 base cards prior to field re-installation.",
  },
  {
    title: "Cummins PowerCommand PCC3300 PCB Board Card",
    tag: "PCC3300 Motherboard",
    image: "/repair-services/cummins-sudhir-jakson/cummins-pcc3300.png",
    alt: "Cummins PowerCommand PCC3300 Base Board Circuit Repair",
    description: "Motherboard PCB repair for PCC3300, PCC2100, PCC1301, and PCC1302 PowerCommand series.",
  },
  {
    title: "Cummins Electronic Control Panel (ECP)",
    tag: "ECP Series",
    image: "/repair-services/cummins-sudhir-jakson/cummins-ecp.png",
    alt: "Cummins Electronic Control Panel ECP Unit",
    description: "Refurbishing of analog parameters, engine speed key switch, LED indicators, and fault status indicators.",
  },
];

const cumminsPcc3300Gallery = [
  {
    title: "Cummins PowerCommand PCC3300 Base-Card PCB Dual Setup",
    tag: "PCC3300 PCB Pair",
    image: "/repair-services/cummins-sudhir-jakson/pcc3300-dual-pcb.png",
    alt: "Cummins PowerCommand PCC3300 Base-Card PCB Dual Board Setup",
    description: "Component-level motherboard repair for PCC3300 dual base-card boards including power regulation, relay drivers, and conformal coating repair.",
  },
  {
    title: "Cummins PowerCommand PCC3300 Motherboard PCB Circuit",
    tag: "PCC3300 Motherboard",
    image: "/repair-services/cummins-sudhir-jakson/pcc3300-single-pcb.png",
    alt: "Cummins PowerCommand PCC3300 Generator Base-Card Motherboard Circuit Close-Up",
    description: "Diagnostic bench testing of PCC3300 main processing ICs, CT current sensing coils, high-voltage heat sink, and multi-pin terminal blocks.",
  },
];

const cumminsAuxGallery = [
  {
    title: "Cummins PCC3300 Base Board & AUX105 Expansion Module Setup",
    tag: "AUX105 Bench Unit",
    image: "/repair-services/cummins-sudhir-jakson/aux105-pcc3300-bench.png",
    alt: "Cummins PCC3300 Base Board and AUX105 Expansion Module Bench Test Setup",
    description: "Integrated bench diagnostic testing of AUX105 auxiliary expansion module paired with PCC3300 generator base card.",
  },
  {
    title: "Cummins AUX Series Auxiliary Expansion Module Card",
    tag: "AUX Card Unit",
    image: "/repair-services/cummins-sudhir-jakson/aux-series-card.png",
    alt: "Cummins AUX105 AUX104 Auxiliary Expansion Module Board with Heat Sink",
    description: "Component-level repair of AUX105, AUX104, AUX103, AUX102, AUX101 expansion cards, heavy-duty heat sink transistors, and power terminals.",
  },
];

const cumminsPcc3320Gallery = [
  {
    title: "Cummins PowerCommand PCC3320 Generator Base-Card Motherboard",
    tag: "PCC3320 Base Card",
    image: "/repair-services/cummins-sudhir-jakson/pcc3320-pcb.png",
    alt: "Cummins PowerCommand PCC3320 Genset Base-Card PCB Board Circuit Repair",
    description: "Motherboard circuit diagnostic repair for PCC3320 base-cards, current sensing CT channels, terminal connector blocks, relay outputs, and high-voltage power stage.",
  },
];

const cumminsEcpgGallery = [
  {
    title: "Cummins Inc. ECPG Electronic Control Panel (Live Powered Test)",
    tag: "ECPG Display Unit",
    image: "/repair-services/cummins-sudhir-jakson/ecpg-front-powered.png",
    alt: "Cummins Inc ECPG Electronic Control Panel Live Powered Parameter Display",
    description: "Diagnostic repair of digital 7-segment LED display readout (0078), parameter indicator LEDs, and fault alarm warnings.",
  },
  {
    title: "Cummins ECPG Front Control Interface & Scan Key Panel",
    tag: "Front Interface",
    image: "/repair-services/cummins-sudhir-jakson/ecpg-front-panel.png",
    alt: "Cummins ECPG Control Panel Front Faceplate",
    description: "Refurbishing of key switch (Off/Run/Start), engine speed toggle (Rated/Idle), parameter scan push button, and legend markings.",
  },
  {
    title: "Cummins ECPG Rear Enclosure, Heavy Aluminum Heat Sink & Ports",
    tag: "Rear Circular Connectors",
    image: "/repair-services/cummins-sudhir-jakson/ecpg-rear-casing.png",
    alt: "Cummins ECPG Rear Enclosure Connectors A B C and Data Link Port",
    description: "Inspection and connector pin replacement for Connector A, Connector B, Connector C circular MIL plugs, Data Link port, and heat sink cooling fins.",
  },
  {
    title: "Cummins ECPG Internal Main Motherboard PCB Component Repair",
    tag: "Main Power Board",
    image: "/repair-services/cummins-sudhir-jakson/ecpg-internal-main-pcb.png",
    alt: "Cummins ECPG Internal Main Potted PCB Circuit Repair",
    description: "Component-level repair of potted high-reliability main motherboard circuit, power capacitors, ribbon cable harness, and output drivers.",
  },
  {
    title: "Cummins ECPG Logic Controller Board & DIP Switch Module",
    tag: "Logic Board",
    image: "/repair-services/cummins-sudhir-jakson/ecpg-internal-display-pcb.png",
    alt: "Cummins ECPG Internal Logic Controller Board and DIP Switches",
    description: "Refurbishing of logic board processor, configuration DIP switches, rotary key switch wiring harness, and internal potted protective layers.",
  },
];

const cumminsEcpGallery = [
  {
    title: "Cummins India Limited ECP Controller (Powered Diagnostics Test)",
    tag: "ECP Powered Panel",
    image: "/repair-services/cummins-sudhir-jakson/ecp-front-powered.png",
    alt: "Cummins India Limited ECP Electronic Control Panel Powered ON",
    description: "Diagnostic bench test of 7-segment digital LED parameter display (0000), LCWL (Low Coolant Water Level) warning LED, and battery charge status.",
  },
  {
    title: "Cummins ECP Control Interface & Key Switch Panel",
    tag: "ECP Front Interface",
    image: "/repair-services/cummins-sudhir-jakson/ecp-front-panel.png",
    alt: "Cummins India Limited ECP Control Interface Front Panel",
    description: "Repair and calibration of VOLTS, WT °C, OIL Kg/cm², RPM, HOURS readout channels, Sensor Fault / Oil SW Fault indicators, and key switch mechanism.",
  },
  {
    title: "Cummins ECP Rear Enclosure & Dual Circular Wiring Harness Ports",
    tag: "Dual MIL Connectors",
    image: "/repair-services/cummins-sudhir-jakson/ecp-rear-casing.png",
    alt: "Cummins ECP Rear Metal Enclosure with Dual Circular Harness Ports",
    description: "Servicing and pin rebuilding for dual heavy-duty circular multi-pin connectors, grounded metal rear casing, and harness wiring interface.",
  },
];

const cumminsPowercomGallery = [
  {
    title: "Cummins Powercom Genset Controller Front Panel Display",
    tag: "Powercom Panel",
    image: "/repair-services/cummins-sudhir-jakson/powercom-front-panel.png",
    alt: "Cummins Powercom Genset Controller Front Panel Display Unit",
    description: "Repair of graphical LCD glass display module, membrane navigation keys, Off/Run/Crank key switch, and status/fault warning LEDs.",
  },
  {
    title: "Powercom Display & Interface PCB Board (ACMD Module)",
    tag: "Display PCB Board",
    image: "/repair-services/cummins-sudhir-jakson/powercom-display-pcb.png",
    alt: "Cummins Powercom Display and Interface PCB Board ACMD Module",
    description: "Component-level repair for ACMD display board (Part No. 0300-6086), DB9 Data Link serial port, ribbon cable connectors, and power supply section.",
  },
  {
    title: "Cummins Powercom Red Conformal Potted Main Base PCB",
    tag: "Powercom Base PCB",
    image: "/repair-services/cummins-sudhir-jakson/powercom-main-pcb.png",
    alt: "Cummins Powercom Red Conformal Coated Main Base PCB Board",
    description: "Motherboard repair for red potted Powercom base PCB, Connector A circular MIL plug, Connector B & C terminal blocks, and relay drive circuits.",
  },
];





export default function CumminsRepairPage() {
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
              <span className="text-[var(--teal)]">Cummins, Sudhir & Jakson</span>
            </div>
            <p className="eyebrow">Cummins, Sudhir & Jakson Controller Repair</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--teal)] tracking-tight leading-tight">
              Repair of Cummins, Sudhir, Jakson Genset Controller
            </h1>
            <p className="services-intro mt-4 text-base md:text-lg text-[var(--ink-muted)] max-w-3xl">
              Component-level repairs, LCD screen replacements, HMI211 & HMI320 servicing, PCC base card motherboard refurbishing, and AUX expansion card repairs.
            </p>
          </div>
        </section>

        {/* SECTION 1: Repair of PS500 Genset Controller */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">
              Repair of Cummins PowerStart PS500 (PS0500) Controller
            </h2>
            <ul className="space-y-3 text-base md:text-lg text-[var(--ink-muted)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Battery voltage readout errors &amp; corrupted hour meter displays (&quot;BattVolts / GensetHrs&quot;)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Unresponsive keypad membrane buttons &amp; main power circuit board component repair</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Backed by an industry-leading <strong>6-month repair warranty</strong></span>
              </li>
            </ul>
          </div>

          {/* Section 1 Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cumminsPs500Gallery.map((item, index) => (
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
                <div className="p-5">
                  <h4 className="text-base md:text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--teal)] transition">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: Repair of PS600, PS0601, PS0602 Genset Controller */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">
              Repair of Cummins PowerStart PS600, PS0601 & PS0602 Controllers
            </h2>
            <ul className="space-y-3 text-base md:text-lg text-[var(--ink-muted)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>False emergency shutdown trips including <strong className="text-[var(--teal)] font-bold">&quot;SHUTDOWN FAULT: 1434 REMOTE E-STOP&quot;</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Dim or broken LCD backlight display glass replacement &amp; rear multi-pin connector repair</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cumminsPs600Gallery.map((item, index) => (
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
                  <div className="absolute top-3 left-3 rounded bg-red-700 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider shadow">
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

        {/* SECTION 3: Repair of HMI211 Genset Display */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">
              Repair of Cummins PowerCommand HMI211 Display
            </h2>
            <ul className="space-y-3 text-base md:text-lg text-[var(--ink-muted)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Blank LCD display screens &amp; status LED indicator failures</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Dual 8-pin rear connector pin damage &amp; unresponsive membrane keypad buttons</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cumminsHmi211Gallery.map((item, index) => (
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
                  <div className="absolute top-2 left-2 rounded bg-purple-700 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow">
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

        {/* SECTION 4: Repair of HMI320 Genset Display */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">
              Repair of Cummins PowerCommand HMI320 Display
            </h2>
            <ul className="space-y-3 text-base md:text-lg text-[var(--ink-muted)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Frozen LCD screens &amp; stuck DEMO mode errors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Circuit Breaker (CB Open/Close) control buttons &amp; rear communication ports</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cumminsHmi320Gallery.map((item, index) => (
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
                  <div className="absolute top-3 left-3 rounded bg-indigo-700 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider shadow">
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

        {/* SECTION 5: Repair of PCC1302, PCC1301 Genset Base-card */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">
              Repair of Cummins PowerCommand PCC1302 & PCC1301 Base Cards
            </h2>
            <ul className="space-y-3 text-base md:text-lg text-[var(--ink-muted)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Burnt power supply filter inductors &amp; heat-sink voltage regulators</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Micro-relays &amp; communication IC motherboard component-level PCB repair</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cumminsPcc1302Gallery.map((item, index) => (
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
                <div className="p-5">
                  <h4 className="text-base md:text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--teal)] transition">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: Repair of PCC3300 Genset Base-card */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">
              Repair of Cummins PowerCommand PCC3300 Base Card
            </h2>
            <ul className="space-y-3 text-base md:text-lg text-[var(--ink-muted)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Power stage circuits &amp; CT current sensing input channels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Conformal coating breakdown, relay output drivers &amp; communication bus ICs</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cumminsPcc3300Gallery.map((item, index) => (
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
                <div className="p-5">
                  <h4 className="text-base md:text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--teal)] transition">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: Repair of AUX105, AUX104, AUX103, AUX102, AUX101 Genset Base-card */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">
              Repair of Cummins AUX101 to AUX105 Expansion Cards
            </h2>
            <ul className="space-y-3 text-base md:text-lg text-[var(--ink-muted)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Power MOSFETs &amp; heavy-duty aluminum heat-sink modules</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Terminal blocks &amp; communication link interfaces to PCC base cards</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cumminsAuxGallery.map((item, index) => (
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
                <div className="p-5">
                  <h4 className="text-base md:text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--teal)] transition">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8: Repair of PCC3320 Genset Base-card */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">
              Repair of Cummins PowerCommand PCC3320 Base Card
            </h2>
            <ul className="space-y-3 text-base md:text-lg text-[var(--ink-muted)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Power regulation failures &amp; CT current loop diagnostics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Terminal block corrosion, burnt relay contacts &amp; CAN bus faults</span>
              </li>
            </ul>
          </div>

          <div className="max-w-2xl">
            {cumminsPcc3320Gallery.map((item, index) => (
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
                  <div className="absolute top-3 left-3 rounded bg-cyan-800 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider shadow">
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

        {/* SECTION 9: Repair of ECPG Genset Controller */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">
              Repair of Cummins ECPG Control Panel
            </h2>
            <ul className="space-y-3 text-base md:text-lg text-[var(--ink-muted)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Digital 7-segment display segment errors &amp; key switch ignition contacts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>False fault alarms (Overspeed, LLOP, HWT) &amp; circular MIL connector pin damage</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cumminsEcpgGallery.map((item, index) => (
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
                  <div className="absolute top-2 left-2 rounded bg-amber-800 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow">
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

        {/* SECTION 10: Repair of ECP Genset Controller */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">
              Repair of Cummins ECP Control Panel
            </h2>
            <ul className="space-y-3 text-base md:text-lg text-[var(--ink-muted)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Digital segment errors &amp; false sensor fault trips (HWT, OS, LLOP, LCWL)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Key switch ignition issues, push button unresponsiveness &amp; circular wiring harness connectors</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cumminsEcpGallery.map((item, index) => (
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
                  <div className="absolute top-2 left-2 rounded bg-orange-800 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow">
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

        {/* SECTION 11: Repair of Powercom Genset Display */}
        <section className="site-container py-12 md:py-16 border-b border-[var(--line)]">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">
              Repair of Cummins Powercom Genset Display
            </h2>
            <ul className="space-y-3 text-base md:text-lg text-[var(--ink-muted)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>Broken LCD glass replacement &amp; key switch contact repair</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] text-xs font-bold">✓</span>
                <span>ACMD display boards (Part No. 0300-6086) &amp; main red potted base PCBs</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cumminsPowercomGallery.map((item, index) => (
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
                  <div className="absolute top-2 left-2 rounded bg-yellow-800 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow">
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
      </main>
      <Footer />
    </>
  );
}


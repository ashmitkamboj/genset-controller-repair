import Image from "next/image";
import Link from "next/link";

const repairServices = [
  "Repair of Mahindra Genset Controllers",
  "Repair of Kirloskar Genset Controllers",
  "Repair of Ashok Leyland Controller",
  "Repair of Cummins, Sudhir, Jakson Genset Controller",
  "Repair of Other Controllers",
];

export function Navbar() {
  return (
    <header className="site-header">
      <div className="site-container nav-shell">
        <Link className="brand" href="/" aria-label="Genset Controller Repair home">
          <Image className="brand-logo" src="/images/logo.png" alt="Genset Controller Repair" width={128} height={128} priority />
          <span className="brand-copy">
            <strong>Genset</strong>
            <span>Controller Repair</span>
          </span>
        </Link>

        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            <Link className="active" href="/">Home</Link>
            <details>
              <summary>Repair Services <span aria-hidden="true">⌄</span></summary>
              <div className="mobile-submenu">
                {repairServices.map((service) => (
                  <Link href="#repair-services" key={service}>{service}</Link>
                ))}
              </div>
            </details>
            <Link href="#videos">Videos</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </details>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link className="active" href="/">Home</Link>
          <details className="services-menu">
            <summary>Repair Services <span aria-hidden="true">⌄</span></summary>
            <div className="services-dropdown">
              {repairServices.map((service) => (
                <Link href="#repair-services" key={service}>{service}</Link>
              ))}
            </div>
          </details>
          <Link href="#videos">Videos</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
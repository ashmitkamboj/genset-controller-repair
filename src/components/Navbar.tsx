"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isServicesPage = pathname === "/repair-services";

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
            <Link className={!isServicesPage ? "active" : ""} href="/">Home</Link>
            <Link className={isServicesPage ? "active" : ""} href="/repair-services">Repair Services</Link>
            <Link href="/#contact-form">Contact</Link>
          </nav>
        </details>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link className={!isServicesPage ? "active" : ""} href="/">Home</Link>
          <Link className={isServicesPage ? "active" : ""} href="/repair-services">Repair Services</Link>
          <Link href="/#contact-form">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
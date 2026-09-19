"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesPage = pathname.startsWith("/repair-services") || pathname.startsWith("/repair-of-");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceCategories = [
    { title: "Mahindra Controllers", href: "/repair-services/mahindra", tag: "GC1211, SUN409, SUN904" },
    { title: "Kirloskar Controllers", href: "/repair-services/kirloskar", tag: "KG Series, Sedemac, KG645" },
    { title: "Ashok Leyland Controllers", href: "/repair-services/ashok-leyland", tag: "GC1201, GC1202 Series" },
    { title: "Cummins, Sudhir & Jakson", href: "/repair-services/cummins-sudhir-jakson", tag: "PS0500, PS0600, PCC3300, ECP" },
    { title: "Deep Sea, ComAp & Others", href: "/repair-services/other", tag: "DSE 7320, InteliCompact, CG" },
    { title: "All Repair Services Overview", href: "/repair-services", tag: "View Complete Showcase Gallery" },
  ];

  return (
    <header className="site-header relative z-50">
      <div className="site-container nav-shell">
        <Link className="brand" href="/" aria-label="Genset Controller Repair home">
          <Image className="brand-logo" src="/images/logo.png" alt="Genset Controller Repair" width={128} height={128} priority />
          <span className="brand-copy">
            <strong>Genset</strong>
            <span>Controller Repair</span>
          </span>
        </Link>

        {/* Mobile Navigation */}
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            <Link className={pathname === "/" ? "active" : ""} href="/">Home</Link>
            
            <div className="py-2.5 border-y border-[var(--line)] my-1.5">
              <span className="px-3 text-xs font-extrabold uppercase tracking-wider text-[var(--teal)] block mb-1.5">
                Repair Services
              </span>
              {serviceCategories.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-semibold rounded ${
                    pathname === item.href ? "text-[var(--teal)] bg-emerald-50 font-bold" : "text-[var(--foreground)] hover:text-[var(--teal)]"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <Link href="/#contact-form">Contact</Link>
          </nav>
        </details>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link className={pathname === "/" ? "active" : ""} href="/">Home</Link>

          {/* Repair Services Dropdown */}
          <div
            className="relative inline-block"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/repair-services"
              className={`flex items-center gap-1.5 py-6 ${isServicesPage ? "active" : ""}`}
            >
              <span className="font-semibold text-[15px]">Repair Services</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-[var(--teal)]" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Dropdown Menu Box */}
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-80 md:w-96 z-50">
                <div className="overflow-hidden rounded-xl border border-[var(--glass-border)] bg-white/95 shadow-2xl backdrop-blur-md p-3 text-left">
                  <div className="px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-[var(--teal)] border-b border-[var(--line)] mb-2">
                    Select Controller Brand
                  </div>

                  <div className="space-y-1">
                    {serviceCategories.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`group flex flex-col px-3.5 py-2.5 rounded-lg transition ${
                            isActive
                              ? "bg-[var(--teal)]/10 text-[var(--teal)] font-bold"
                              : "text-[var(--foreground)] hover:bg-emerald-50 hover:text-[var(--teal)]"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm md:text-base leading-snug">{item.title}</span>
                            <span className="text-xs text-[var(--ink-muted)] group-hover:text-[var(--teal)] transition font-bold">↗</span>
                          </div>
                          <span className="text-xs text-[var(--ink-muted)] font-medium mt-0.5">{item.tag}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/#contact-form">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
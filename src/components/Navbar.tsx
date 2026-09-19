"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesPage = pathname.startsWith("/repair-services") || pathname.startsWith("/repair-of-");

  // Close menus on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close desktop dropdown when clicking outside
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
    { title: "All Services Overview", href: "/repair-services", tag: "View Complete Showcase Gallery" },
  ];

  return (
    <header className="site-header sticky top-0 z-50 bg-[var(--glass-surface)] border-b border-[var(--glass-border)] backdrop-blur-md">
      <div className="site-container nav-shell">
        <Link className="brand" href="/" aria-label="Genset Controller Repair home">
          <Image className="brand-logo" src="/images/logo.png" alt="Genset Controller Repair" width={128} height={128} priority />
          <span className="brand-copy">
            <strong>Genset</strong>
            <span>Controller Repair</span>
          </span>
        </Link>

        {/* Hamburger Toggle Button (Mobile) */}
        <button
          type="button"
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-white/80 text-[var(--teal)] shadow-sm focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Slide-down Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 border-b border-[var(--line)] bg-white/95 shadow-xl backdrop-blur-md p-4 space-y-3 z-50">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-bold transition ${
                pathname === "/" ? "bg-[var(--teal)]/10 text-[var(--teal)]" : "text-[var(--foreground)] hover:text-[var(--teal)]"
              }`}
            >
              Home
            </Link>

            <div className="rounded-xl border border-[var(--line)] bg-emerald-50/50 p-3">
              <span className="block px-2 text-xs font-extrabold uppercase tracking-wider text-[var(--teal)] mb-2">
                Repair Services
              </span>
              <div className="space-y-1">
                {serviceCategories.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex flex-col px-3 py-2 rounded-lg text-sm transition ${
                        isActive
                          ? "bg-[var(--teal)] text-white font-bold"
                          : "text-[var(--foreground)] hover:bg-emerald-100/70 hover:text-[var(--teal)] font-semibold"
                      }`}
                    >
                      <span className="font-bold">{item.title}</span>
                      <span className={`text-[11px] ${isActive ? "text-emerald-100" : "text-[var(--ink-muted)]"}`}>
                        {item.tag}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              href="/#contact-form"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-bold text-[var(--foreground)] hover:text-[var(--teal)] transition"
            >
              Contact Us
            </Link>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 color-[var(--ink-muted)] text-[0.94rem] font-semibold" aria-label="Primary navigation">
          <Link className={pathname === "/" ? "active text-[var(--teal)]" : "hover:text-[var(--teal)] transition"} href="/">Home</Link>

          {/* Repair Services Dropdown */}
          <div
            className="relative inline-block"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/repair-services"
              className={`flex items-center gap-1.5 py-6 ${isServicesPage ? "active text-[var(--teal)]" : "hover:text-[var(--teal)] transition"}`}
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
                          onClick={() => setDropdownOpen(false)}
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

          <Link className="hover:text-[var(--teal)] transition" href="/#contact-form">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

const services = [
  {
    title: "Repair of Mahindra Genset Controllers",
    href: "/repair-services/mahindra",
  },
  {
    title: "Repair of Kirloskar Genset Controllers",
    href: "/repair-services/kirloskar",
  },
  {
    title: "Repair of Ashok Leyland Controller",
    href: "/repair-services/ashok-leyland",
  },
  {
    title: "Repair of Cummins, Sudhir, Jakson Genset Controller",
    href: "/repair-services/cummins-sudhir-jakson",
  },
  {
    title: "Repair of Other Controllers",
    href: "/repair-services/other",
  },
];

export default function RepairServicesPage() {
  return (
    <>
      <Navbar />
      <main className="services-page">
        <section className="services-hero" aria-labelledby="services-title">
          <div className="site-container services-hero-inner">
            <p className="eyebrow">Controller repair specialists</p>
            <h1 id="services-title">Repair Services</h1>
            <p className="services-intro">
              Select a controller category to learn more about the repair support available for your generator set.
            </p>
          </div>
        </section>
        <section className="services-list-section" aria-label="Available repair services">
          <div className="site-container services-list">
            {services.map((service, index) => (
              <Link className="service-card" href={service.href} key={service.href}>
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-card-content">
                    <strong>{service.title}</strong>
                    <span>Discuss your controller repair requirements</span>
                  </span>
                  <span className="service-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
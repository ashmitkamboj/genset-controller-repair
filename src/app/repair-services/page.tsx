import { Navbar } from "@/components/Navbar";

const services = [
  "Repair of Mahindra Genset Controllers",
  "Repair of Kirloskar Genset Controllers",
  "Repair of Ashok Leyland Controller",
  "Repair of Cummins, Sudhir, Jakson Genset Controller",
  "Repair of Other Controllers",
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
              <article className="service-card" key={service}>
                <span className="service-number">0{index + 1}</span>
                <span className="service-card-content">
                  <strong>{service}</strong>
                  <span>Discuss your controller repair requirements</span>
                </span>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
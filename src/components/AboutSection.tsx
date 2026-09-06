import Image from "next/image";

export function AboutSection() {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="site-container split-section">
        <div className="section-copy">
          <p className="eyebrow">Electronic repair services</p>
          <h1 id="about-title">About Us</h1>
          <div className="body-copy">
            <p>
              Established in year 2020 at New Delhi, we “Electronic Repair Services”, are a proprietor-based firm, engaged in providing Repair, refurbishment, services of genset controllers from popular OEMs.
            </p>
            <p>
              We are working and have rich experience in repairing of the Genset Controllers used in Generator Sets. We cover all makes of Gensets like Mahindra, Eicher, Kirloskar, Ashok Leyland, Cummins, Jakson etc.
            </p>
            <p>
              We do not claim to know everything but what we offer is the experience, knowledge and network we have gathered during our experience in the repair industry.
            </p>
          </div>
        </div>
        <div className="image-frame board-frame">
          <Image
            src="/images/about/controller-board.png"
            alt="Electronic genset controller board"
            width={480}
            height={640}
            priority
          />
          <span className="image-caption">Genset controller diagnostics</span>
        </div>
      </div>
    </section>
  );
}
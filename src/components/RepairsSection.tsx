import Image from "next/image";

export function RepairsSection() {
  return (
    <section className="repairs-section" id="repair-services" aria-labelledby="repairs-title">
      <div className="site-container split-section repairs-layout">
        <div className="image-frame meter-frame">
          <Image
            src="/images/repairs/repair-testing.png"
            alt="Technician testing an electronic controller board"
            width={640}
            height={427}
          />
          <span className="image-caption">Tested, repaired, returned</span>
        </div>
        <div className="section-copy">
          <p className="eyebrow">Repair that makes a difference</p>
          <h2 id="repairs-title">Why you need Repairs</h2>
          <div className="body-copy">
            <p>
              We treat repair not just as a profession but also it is a noble cause. It not only saves money but also saves mother-earth from environmental risks as e-waste degrades the soil and leaves it unusable for many years. Repairs also extend the useful lives of the products we buy with our hard-earned money.
            </p>
            <p>Hence repairs contribute to sustainability and cost savings both.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
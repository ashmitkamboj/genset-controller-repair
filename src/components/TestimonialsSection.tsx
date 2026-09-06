const testimonials = [
  {
    quote: "Add a verified customer experience here.",
    name: "Customer testimonial",
    detail: "Genset controller repair",
  },
  {
    quote: "Your feedback about our repair process can appear in this space.",
    name: "Customer testimonial",
    detail: "Controller refurbishment",
  },
  {
    quote: "Share a real customer result here once the service is complete.",
    name: "Customer testimonial",
    detail: "Generator set support",
  },
];

const marqueeTestimonials = [...testimonials, ...testimonials];

function TestimonialCard({
  quote,
  name,
  detail,
}: (typeof testimonials)[number]) {
  return (
    <article className="testimonial-card">
      <span className="quote-mark" aria-hidden="true">&ldquo;</span>
      <p>{quote}</p>
      <footer>
        <strong>{name}</strong>
        <span>{detail}</span>
      </footer>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="site-container testimonials-heading">
        <div>
          <p className="eyebrow">Built on practical results</p>
          <h2 id="testimonials-title">Customer testimonials</h2>
        </div>
        <p className="testimonials-note">Verified customer stories will be added as they become available.</p>
      </div>
      <div className="testimonial-window">
        <div className="testimonial-track">
          <div className="testimonial-group">
            {marqueeTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.detail}-primary-${index}`} {...testimonial} />
            ))}
          </div>
          <div className="testimonial-group" aria-hidden="true">
            {marqueeTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.detail}-duplicate-${index}`} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
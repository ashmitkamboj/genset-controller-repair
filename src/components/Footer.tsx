import { ContactForm } from "@/components/ContactForm";

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-container footer-main">
        <div className="footer-form-panel" id="contact-form">
          <p className="eyebrow">Send an enquiry</p>
          <h2>Tell us what needs repair</h2>
          <ContactForm />
        </div>
        <div className="footer-details">
          <p className="eyebrow">Talk to our team</p>
          <h2>Get in touch</h2>
          <p className="footer-note">Have a controller that needs attention? Let&apos;s discuss the next step.</p>
          <div className="footer-contact-list">
            <div className="contact-detail">
              <span>Contact</span>
              <strong>Himanshu</strong>
              <a href="tel:+918383000548">+91-8383000548</a>
            </div>
            <div className="contact-detail">
              <span>Address</span>
              <strong>657, Krishna Colony</strong>
              <p>Gurugram, 122006</p>
            </div>
            <div className="contact-detail socials">
              <span>Socials</span>
              <a
                href="https://youtube.com/@gensetcontrollerrepair"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Genset Controller Repair on YouTube"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.5 3.8-6.5 3.8Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} Genset Controller Repair</span>
        <span>Electronic repair services · New Delhi</span>
      </div>
    </footer>
  );
}
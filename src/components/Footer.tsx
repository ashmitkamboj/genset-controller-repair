export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-container footer-grid">
        <div>
          <p className="eyebrow">Talk to our team</p>
          <h2>Get in touch</h2>
          <p className="footer-note">Have a controller that needs attention? Let&apos;s discuss the next step.</p>
        </div>
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
          <a href="#contact" aria-label="Social media link placeholder">in</a>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} Genset Controller Repair</span>
        <span>Electronic repair services · New Delhi</span>
      </div>
    </footer>
  );
}
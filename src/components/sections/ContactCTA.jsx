import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="contact-cta" aria-labelledby="cta-heading">
      <div><p className="section-label">La prossima idea inizia da una conversazione.</p><h2 id="cta-heading">Hai un progetto <em>in mente?</em></h2></div>
      <Link to="/contact" className="btn btn-primary">Parliamone <ArrowUpRight size={18} aria-hidden="true" /></Link>
    </section>
  );
}

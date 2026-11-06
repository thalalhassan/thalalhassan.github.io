import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-wrap">
        <SectionHeading
          index="04"
          label="HAVE A PROJECT IN MIND?"
          title="Let's make"
          accent="it happen."
        />
        <div className="contact-main" data-reveal>
          <p>
            Have an interesting engineering challenge, a product to build, or a
            team that needs a thoughtful technical partner?
          </p>
          <a className="contact-email" href="mailto:i.thalalhassan@gmail.com">
            i.thalalhassan@gmail.com <ArrowUpRight />
          </a>
        </div>
        <div className="contact-bottom">
          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LINKEDIN
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Github size={16} /> GITHUB
            </a>
            <a href="mailto:i.thalalhassan@gmail.com">
              <Mail size={16} /> EMAIL
            </a>
          </div>
          <a className="back-top mono" href="#home">
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </section>
  );
}

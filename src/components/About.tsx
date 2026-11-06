import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-wrap about-grid">
        <div>
          <SectionHeading
            index="02"
            label="A LITTLE ABOUT ME"
            title="Engineering with"
            accent="intent."
          />
        </div>
        <div className="about-copy" data-reveal>
          <p className="about-lead">
            I&apos;m a software engineer who enjoys turning complex problems
            into clear, reliable systems.
          </p>
          <p>
            My work spans backend engineering, product development and cloud
            infrastructure. I care about the decisions behind the code:
            boundaries, data models, operational behaviour and the experience of
            the people using what we build.
          </p>
          <p>
            I value pragmatic architecture, maintainable code and teams that
            take ownership from idea to production.
          </p>
          <a className="inline-link" href="mailto:i.thalalhassan@gmail.com">
            START A CONVERSATION <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="stats-row section-wrap" data-reveal>
        <div>
          <strong>
            5<span>+</span>
          </strong>
          <small>YEARS BUILDING SOFTWARE</small>
        </div>
        <div>
          <strong>03</strong>
          <small>CORE FOCUS AREAS</small>
        </div>
        <div>
          <strong>∞</strong>
          <small>THINGS LEFT TO LEARN</small>
        </div>
      </div>
    </section>
  );
}

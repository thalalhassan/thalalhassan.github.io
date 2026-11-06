import { ArrowUpRight } from "lucide-react";
import { capabilities } from "../data";
import SectionHeading from "./SectionHeading";

export default function Expertise() {
  return (
    <section className="section expertise-section" id="expertise">
      <div className="section-wrap">
        <SectionHeading index="03" label="WHAT I WORK WITH" title="Tools of the" accent="trade." />
        <div className="expertise-layout">
          <div className="expertise-note" data-reveal>
            <p className="mono">CAPABILITIES / 2026</p>
            <h3>Good engineering is more than choosing a framework.</h3>
            <span>It&apos;s about understanding trade-offs and building for the realities of production.</span>
          </div>
          <div className="capability-list">
            {capabilities.map((item, index) => (
              <div className="capability" key={item.name} data-reveal>
                <span className="mono">0{index + 1}</span>
                <div><h4>{item.name}</h4><p>{item.detail}</p></div>
                <ArrowUpRight size={18} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

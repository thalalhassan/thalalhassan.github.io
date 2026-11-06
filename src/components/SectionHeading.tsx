type Props = { index: string; label: string; title: string; accent?: string };
export default function SectionHeading({ index, label, title, accent }: Props) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-kicker mono"><span>{index}</span><i />{label}</div>
      <h2>{title}{accent && <> <em>{accent}</em></>}</h2>
    </div>
  );
}

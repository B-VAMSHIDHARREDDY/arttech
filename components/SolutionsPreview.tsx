import SolutionsTabs from "./SolutionsTabs";

export default function SolutionsPreview() {
  return (
    <section className="section" id="solutions-preview">
      <div className="wrap">
        <div className="section-head" data-reveal="fade">
          <span className="eyebrow">Solutions</span>
          <h2>
            Solutions built around
            <br />
            <span className="accent-blue">your business.</span>
          </h2>
        </div>
        <SolutionsTabs short />
      </div>
    </section>
  );
}

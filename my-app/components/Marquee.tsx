const items = [
  "Photography",
  "Videography",
  "Cinematic Stories",
  "Weddings",
  "Brand Films",
  "Portraits",
  "Music & Events",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <span
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="label px-6 text-muted sm:px-10">{item}</span>
          <span aria-hidden="true" className="text-accent">
            ✦
          </span>
        </span>
      ))}
    </span>
  );
}

/** Thin scrolling editorial strip — decorative, CSS-only, reduced-motion safe. */
export function Marquee() {
  return (
    <div
      className="overflow-hidden border-t border-line py-5"
      role="presentation"
    >
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
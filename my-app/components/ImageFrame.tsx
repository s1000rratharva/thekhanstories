import Image from "next/image";

type ImageFrameProps = {
  /**
   * Path to the image inside /public, e.g. "/images/project-01.jpg".
   * Pass `null` (or omit) to render a clearly-marked placeholder.
   */
  image?: string | null;
  alt?: string;
  /** Tailwind aspect-ratio utility, e.g. "aspect-[4/3]" */
  ratio?: string;
  className?: string;
  /** Label shown inside the placeholder box. */
  placeholderLabel?: string;
  priority?: boolean;
  /** Add a slow inner zoom on parent group hover. */
  zoom?: boolean;
};

/**
 * Visual container used across the site.
 * - With an image: fills the frame with object-cover behaviour.
 * - Without an image: renders an intentional, unmissable placeholder.
 *
 * Replacement is trivial — drop the file into /public/images and set the
 * `image` prop (or the matching field in lib/projects.ts).
 */
export function ImageFrame({
  image,
  alt = "Placeholder image",
  ratio = "aspect-[4/3]",
  className = "",
  placeholderLabel = "IMAGE PLACEHOLDER",
  priority = false,
  zoom = false,
}: ImageFrameProps) {
  const zoomClass = zoom
    ? "transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.045]"
    : "";
  return (
    <div
      className={`relative overflow-hidden ${ratio} ${className}`}
      role="img"
      aria-label={image ? alt : `${placeholderLabel} — ${alt}`}
    >
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 60vw, 92vw"
          priority={priority}
          className={`object-cover ${zoomClass}`}
        />
      ) : (
        <div
          className={`placeholder-bg flex h-full w-full flex-col items-center justify-center gap-3 ${zoomClass}`}
          aria-hidden="true"
        >
          <span className="label text-muted">{placeholderLabel}</span>
          <span className="label hidden text-ink-soft/60 sm:block">{alt}</span>
        </div>
      )}
    </div>
  );
}
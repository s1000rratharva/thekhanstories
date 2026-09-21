import { site } from "@/lib/site";
import { Email, Instagram, WhatsApp } from "@/components/icons";

const SOCIAL_ICONS = {
  instagram: Instagram,
  whatsapp: WhatsApp,
  email: Email,
} as const;

export function Footer() {
  return (
    <footer className="bg-ink text-paper" aria-label="Footer">
      <div className="mx-auto max-w-[106rem] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* Wordmark */}
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <a
              href="#top"
              className="block text-[clamp(2rem,6vw,4.5rem)] font-extrabold uppercase leading-none tracking-tight transition-colors duration-300 hover:text-accent"
            >
              {site.name}
            </a>
            <p className="label mt-5 text-paper/60">
              {site.locationShort} — {site.profession}
            </p>
          </div>

          <a
            href="#contact"
            className="label inline-flex w-fit items-center gap-3 border border-paper/30 px-6 py-3.5 transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink"
          >
            Start a Project
          </a>
        </div>

        {/* Link columns */}
        <div className="mt-14 grid grid-cols-2 gap-10 border-t border-paper/15 pt-10 sm:grid-cols-3">
          <nav aria-label="Footer navigation">
            <p className="label text-paper/50">Menu</p>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline text-sm font-medium text-paper/85 transition-colors duration-300 hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label text-paper/50">Social</p>
            <ul className="mt-4 space-y-2.5">
              {site.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="group inline-flex items-center gap-2.5 text-sm font-medium text-paper/85 transition-colors duration-300 hover:text-paper"
                    >
                      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="label text-paper/50">Contact</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="link-underline break-all text-sm font-medium text-paper/85 transition-colors duration-300 hover:text-paper"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.contact.phone.replace(/\D/g, "")}`}
                  className="text-sm font-medium text-paper/85 transition-colors duration-300 hover:text-paper"
                >
                  {site.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-paper/15 pt-6 sm:flex-row sm:items-center">
          <p className="label text-paper/45">
            © {new Date().getFullYear()} {site.name} — {site.profession}
          </p>
          <p className="label text-paper/45">{site.locationShort}</p>
        </div>
      </div>
    </footer>
  );
}
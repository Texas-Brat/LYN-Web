import Link from "next/link";
import { brand } from "@/lib/brand";
import { Container } from "@/components/ui/Container";

// Iteration 1 ships one page. These link to real in-page sections and
// real files only — no placeholder routes that would 404. Each column
// becomes real standalone routes as later loop passes build them out.
const columns = [
  {
    title: "Services",
    links: [
      { href: "/#understand", label: "Understand" },
      { href: "/#trust", label: "Trust" },
      { href: "/#recommend", label: "Recommend" },
      { href: "/#monitor", label: "Monitor" },
    ],
  },
  {
    title: "Proof",
    links: [
      { href: "/#demo", label: "Live AI Answers" },
      { href: "/#proof", label: "BORN Case Study" },
      { href: "/#score", label: "AI Visibility Score" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/#contact", label: "Book a Call" },
      { href: "/llms.txt", label: "llms.txt" },
      { href: "/llms-full.txt", label: "llms-full.txt" },
      { href: "/sitemap.xml", label: "Sitemap" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line dark:border-line-dark">
      <Container className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <p className="text-lg font-semibold tracking-tight">{brand.name}</p>
          <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-ink-faint">
            {brand.tagline}
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">{col.title}</p>
            <ul className="mt-4 space-y-3 text-sm">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ink-faint transition-colors hover:text-ink dark:hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line py-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between dark:border-line-dark">
        <p>
          © {new Date().getFullYear()} {brand.legalName}. {brand.foundingLocation}.
        </p>
        <p>Built to be read by people and by the AI models people ask.</p>
      </Container>
    </footer>
  );
}

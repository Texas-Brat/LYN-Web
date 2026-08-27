import Link from "next/link";
import { brand } from "@/lib/brand";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";

// Iteration 1 ships one page — these are in-page anchors, not routes.
// Each becomes its own route as the loop builds out the rest of the site
// (see the plan's iteration order: Services → Score → Case Studies → ...).
const links = [
  { href: "/#services", label: "Services" },
  { href: "/#proof", label: "Proof" },
  { href: "/#score", label: "AI Visibility Score" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md dark:border-line-dark dark:bg-ink/80">
      <Container as="nav" className="relative flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {brand.name}
        </Link>
        <ul className="hidden items-center gap-8 text-sm text-ink-faint md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-ink dark:hover:text-paper">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button href={brand.contact.bookCallUrl} size="sm" className="hidden sm:inline-flex">
            Book a strategy call
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

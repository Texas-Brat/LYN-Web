import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-paper hover:bg-signal hover:text-signal-ink dark:bg-paper dark:text-ink dark:hover:bg-signal dark:hover:text-signal-ink",
        signal: "bg-signal text-signal-ink hover:brightness-95",
        ghost:
          "bg-transparent text-ink border border-line hover:border-ink dark:text-paper dark:border-line-dark dark:hover:border-paper",
      },
      size: {
        default: "h-12 px-6 text-[15px]",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

interface CommonProps extends VariantProps<typeof buttonStyles> {
  children: ReactNode;
  className?: string;
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonProps | LinkButtonProps) {
  const { children, className, variant, size, ...rest } = props;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <Link href={href} className={cn(buttonStyles({ variant, size }), className)} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(buttonStyles({ variant, size }), className)}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

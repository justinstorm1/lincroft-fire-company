"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, PhoneIcon, XIcon } from "lucide-react"

import { nav, site } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between gap-4 px-4 text-sm sm:px-6">
          <p>
            <span className="font-semibold">Emergency?</span> Dial{" "}
            <a
              href="tel:911"
              className="font-bold underline underline-offset-2"
            >
              911
            </a>
          </p>
          <a
            href={site.phone.href}
            className="flex items-center gap-1.5 hover:underline"
          >
            <PhoneIcon className="size-3.5" />
            <span className="hidden sm:inline">Non-emergency:</span>
            {site.phone.display}
          </a>
        </div>
      </div>

      <div className="border-b bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" aria-label="Lincroft Fire Company home">
            <Logo />
          </Link>

          <nav
            aria-label="Main"
            className="hidden items-center gap-1 text-sm lg:flex"
          >
            {nav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                active={pathname === item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Button
              className="hidden px-4 sm:inline-flex"
              render={<Link href="/donate" />}
              nativeButton={false}
            >
              Donate
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <XIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Main"
            className="border-t px-4 py-3 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {[...nav, { href: "/donate", label: "Donate" }].map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    active={pathname === item.href}
                    className="block px-3 py-2.5 text-base"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

function NavLink({
  href,
  active,
  className,
  onClick,
  children,
}: {
  href: string
  active: boolean
  className?: string
  onClick?: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      className={cn(
        "rounded-md px-3 py-1.5 font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        active && "bg-muted text-foreground",
        className
      )}
    >
      {children}
    </Link>
  )
}

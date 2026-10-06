import Link from "next/link"
import { MapPinIcon, PhoneIcon } from "lucide-react"

import { nav, site } from "@/lib/site"
import { MalteseCross } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <MalteseCross className="size-12" />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-xl font-semibold tracking-wide uppercase">
                {site.name}
              </span>
              <span className="text-sm text-navy-foreground/70">
                {site.station} · Est. {site.founded}
              </span>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-navy-foreground/70">
            Dedicated volunteers proudly protecting our community through fire
            safety.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-display text-sm font-semibold tracking-widest text-gold uppercase">
            Visit or call
          </h2>
          <a
            href={site.directions}
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 text-sm hover:underline"
          >
            <MapPinIcon className="mt-0.5 size-4 shrink-0" />
            <span>
              {site.address.street}
              <br />
              {site.address.city}
            </span>
          </a>
          <a
            href={site.phone.href}
            className="flex gap-2 text-sm hover:underline"
          >
            <PhoneIcon className="mt-0.5 size-4 shrink-0" />
            {site.phone.display} (non-emergency)
          </a>
          <p className="text-sm font-semibold">
            In an emergency, always dial 911.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-display text-sm font-semibold tracking-widest text-gold uppercase">
            Explore
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {[...nav, { href: "/donate", label: "Donate" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-navy-foreground/60 sm:px-6">
          Copyright © {new Date().getFullYear()} {site.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

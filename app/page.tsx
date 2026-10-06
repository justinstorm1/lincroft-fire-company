import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  HandHeartIcon,
  HistoryIcon,
  MapPinIcon,
  UsersIcon,
} from "lucide-react"

import { mission, quickFacts, schedule, site, volunteerPitch } from "@/lib/site"
import historicPhoto from "@/public/images/mtfd-historic-photo.jpg"
import stationPhoto from "@/public/images/station-10-members.jpg"
import { SectionHeading } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Facts />
      <Mission />
      <Schedule />
      <Volunteer />
      <HistoryTeaser />
      <DonateBand />
    </>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image
        src={stationPhoto}
        alt="Lincroft Fire Company members in dress uniform in front of Station 10's apparatus"
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-[center_40%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[oklch(0.16_0.04_262/0.82)] lg:bg-transparent lg:bg-gradient-to-r lg:from-[oklch(0.16_0.04_262/0.95)] lg:via-[oklch(0.16_0.04_262/0.8)] lg:to-[oklch(0.16_0.04_262/0.35)]"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <span className="animate-rise-in rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">
          {site.station} · {site.town}
        </span>
        <h1
          className="max-w-3xl animate-rise-in font-display text-5xl leading-[1.02] font-bold tracking-tight uppercase sm:text-6xl lg:text-7xl"
          style={{ "--delay": "0.08s" } as React.CSSProperties}
        >
          Proudly serving Lincroft <span className="text-gold">since 1932</span>
        </h1>
        <p
          className="max-w-xl animate-rise-in text-lg text-pretty text-white/85"
          style={{ "--delay": "0.16s" } as React.CSSProperties}
        >
          Dedicated volunteers proudly protecting our community through fire
          safety.
        </p>
        <div
          className="flex animate-rise-in flex-wrap gap-3"
          style={{ "--delay": "0.24s" } as React.CSSProperties}
        >
          <Button
            className="h-11 px-5 text-base"
            render={<Link href="/contact#volunteer" />}
            nativeButton={false}
          >
            Become a volunteer
          </Button>
          <Button
            variant="outline"
            className="h-11 border-white/40 bg-white/5 px-5 text-base text-white hover:bg-white/15 hover:text-white"
            render={<Link href="/donate" />}
            nativeButton={false}
          >
            Support our company
          </Button>
        </div>
      </div>
    </section>
  )
}

function Facts() {
  return (
    <section aria-label="Quick facts" className="border-b">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border lg:grid-cols-4">
        {quickFacts.map((fact) => (
          <div
            key={fact.label}
            className="flex flex-col gap-1 bg-background px-4 py-8 sm:px-6"
          >
            <dt className="order-2 text-sm text-muted-foreground">
              {fact.label}
            </dt>
            <dd className="font-display text-4xl font-bold text-highlight tabular-nums">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function Mission() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-5">
          <SectionHeading
            eyebrow="Our mission"
            title="Welcome to the Lincroft Fire Company"
          />
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            {mission}
          </p>
          <div>
            <Button
              variant="outline"
              render={<Link href="/officers" />}
              nativeButton={false}
            >
              Meet our officers
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <QuickLink
            href="/history"
            icon={HistoryIcon}
            title="Our history"
            text="Over 90 years of service to Lincroft."
          />
          <QuickLink
            href="/members"
            icon={UsersIcon}
            title="Our members"
            text="The volunteers of Station 10."
          />
          <QuickLink
            href="/donate"
            icon={HandHeartIcon}
            title="Donate"
            text="Help fund our training and equipment."
          />
          <QuickLink
            href="/contact"
            icon={MapPinIcon}
            title="Find us"
            text={site.address.street}
          />
        </div>
      </div>
    </section>
  )
}

function QuickLink({
  href,
  icon: Icon,
  title,
  text,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  text: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-xl border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-muted/50"
    >
      <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-highlight">
        <Icon className="size-5" />
      </span>
      <span className="flex items-center gap-1 font-semibold">
        {title}
        <ArrowRightIcon className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
      </span>
      <span className="text-sm text-muted-foreground">{text}</span>
    </Link>
  )
}

function Schedule() {
  return (
    <section className="border-y bg-muted/50 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="At the firehouse"
          title="Meetings & training schedule"
          description={`All meetings and drills are held at the firehouse, ${site.address.street}.`}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {schedule.map((item) => (
            <Card key={item.title}>
              <CardHeader className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <CalendarDaysIcon className="size-5" />
                </span>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-1">
                <span className="font-display text-3xl font-bold">
                  {item.time}
                </span>
                <span className="text-muted-foreground">{item.when}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Volunteer() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground sm:p-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-2xl flex-col gap-3">
          <span className="font-display text-sm font-semibold tracking-widest uppercase opacity-80">
            To our friends and neighbors
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
            Volunteers wanted
          </h2>
          <p className="text-lg leading-relaxed text-pretty opacity-90">
            {volunteerPitch}
          </p>
        </div>
        <Button
          variant="secondary"
          className="h-11 shrink-0 px-6 text-base"
          render={<Link href="/contact#volunteer" />}
          nativeButton={false}
        >
          How to join
          <ArrowRightIcon />
        </Button>
      </div>
    </section>
  )
}

function HistoryTeaser() {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <figure className="flex flex-col gap-2">
          <Image
            src={historicPhoto}
            alt="Historic black-and-white photo of Middletown Township Fire Department members lined up with dozens of fire engines"
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="rounded-xl border"
          />
          <figcaption className="text-sm text-muted-foreground">
            The Middletown Township Fire Department, from the company archives.
          </figcaption>
        </figure>
        <div className="flex flex-col gap-5">
          <SectionHeading
            eyebrow="Since 1932"
            title="A long tradition of service"
          />
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            Organized in May of 1932 and part of the Middletown Township Fire
            Department since 1934, the Lincroft Fire Company has grown alongside
            the community it protects, from a single Brockway engine to a modern
            fleet and a firehouse that still stands on Newman Springs Road.
          </p>
          <div>
            <Button
              variant="outline"
              render={<Link href="/history" />}
              nativeButton={false}
            >
              Read our history
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function DonateBand() {
  return (
    <section className="border-t bg-muted/50 px-4 py-16 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-2xl font-bold tracking-tight uppercase sm:text-3xl">
            Help us help you
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Your donation goes directly to the training and equipment that keep
            Lincroft safe.
          </p>
        </div>
        <Button
          className="h-11 px-6 text-base"
          render={<Link href="/donate" />}
          nativeButton={false}
        >
          <HandHeartIcon />
          Donate
        </Button>
      </div>
    </section>
  )
}

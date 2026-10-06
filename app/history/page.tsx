import type { Metadata } from "next"
import Image from "next/image"
import { TruckIcon } from "lucide-react"

import { apparatus, chiefs, history, timeline } from "@/lib/site"
import historicPhoto from "@/public/images/mtfd-historic-photo.jpg"
import { PageHero, SectionHeading } from "@/components/page-hero"

export const metadata: Metadata = { title: "History" }

const sections = [
  { id: "beginnings", label: "Our beginnings" },
  { id: "coverage", label: "What we protect" },
  { id: "firehouse", label: "The firehouse" },
  { id: "apparatus", label: "Apparatus" },
  { id: "chiefs", label: "Chiefs from Lincroft" },
  { id: "friends", label: "Help from our friends" },
]

export default function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Since 1932"
        title="Our history"
        description="How a group of enthusiastic and persistent neighbors built the Lincroft Fire Company."
      />

      <section className="border-b px-4 py-12 sm:px-6">
        <ol className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {timeline.map((item) => (
            <li
              key={item.year}
              className="flex flex-col gap-1 border-l-2 border-primary pl-4"
            >
              <span className="font-display text-2xl font-bold text-highlight">
                {item.year}
              </span>
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[200px_1fr]">
        <nav
          aria-label="On this page"
          className="hidden lg:sticky lg:top-36 lg:block lg:self-start"
        >
          <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            On this page
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="flex max-w-3xl flex-col gap-16">
          <Block
            id="beginnings"
            title="Our beginnings"
            paragraphs={history.intro}
          />

          <figure className="flex flex-col gap-2">
            <Image
              src={historicPhoto}
              alt="Historic black-and-white photo of Middletown Township Fire Department members lined up with dozens of fire engines"
              placeholder="blur"
              sizes="(min-width: 1024px) 768px, 100vw"
              className="rounded-xl border"
            />
            <figcaption className="text-sm text-muted-foreground">
              The Middletown Township Fire Department, from the company
              archives.
            </figcaption>
          </figure>

          <Block
            id="coverage"
            title="What we protect"
            paragraphs={history.coverage}
          />
          <Block
            id="firehouse"
            title="The firehouse"
            paragraphs={history.firehouse}
          />

          <div id="apparatus" className="flex scroll-mt-36 flex-col gap-5">
            <SectionHeading
              title="Apparatus through the years"
              description="The company has had many different vehicles in service over the years."
            />
            <ol className="grid gap-2 sm:grid-cols-2">
              {apparatus.map((rig) => (
                <li
                  key={rig}
                  className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3"
                >
                  <TruckIcon className="size-4 shrink-0 text-highlight" />
                  {rig}
                </li>
              ))}
            </ol>
            {history.funding.map((p) => (
              <p
                key={p}
                className="leading-relaxed text-pretty text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </div>

          <div id="chiefs" className="flex scroll-mt-36 flex-col gap-5">
            <SectionHeading
              title="MTFD Chiefs from Lincroft"
              description="Eight members of the Lincroft Fire Company have served as Chief of the Middletown Township Fire Department."
            />
            <ol className="relative flex flex-col gap-6 border-l-2 border-border pl-6">
              {chiefs.map((chief) => (
                <li key={chief.name} className="relative">
                  <span
                    aria-hidden
                    className="absolute top-1.5 -left-[31px] size-3 rounded-full bg-primary ring-4 ring-background"
                  />
                  <p className="font-display text-sm font-semibold tracking-widest text-highlight">
                    {chief.year}
                  </p>
                  <p className="text-lg font-semibold">{chief.name}</p>
                  <p className="text-pretty text-muted-foreground">
                    {chief.note}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <Block
            id="friends"
            title="Some help from our friends"
            paragraphs={history.friends}
          />
        </article>
      </div>
    </>
  )
}

function Block({
  id,
  title,
  paragraphs,
}: {
  id: string
  title: string
  paragraphs: string[]
}) {
  return (
    <div id={id} className="flex scroll-mt-36 flex-col gap-4">
      <SectionHeading title={title} />
      {paragraphs.map((p) => (
        <p
          key={p}
          className="text-lg leading-relaxed text-pretty text-muted-foreground"
        >
          {p}
        </p>
      ))}
    </div>
  )
}

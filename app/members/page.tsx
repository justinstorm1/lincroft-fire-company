import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { memberPhoto } from "@/lib/site"
import stationPhoto from "@/public/images/station-10-members.jpg"
import { PageHero, SectionHeading } from "@/components/page-hero"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = { title: "Members" }

export default function MembersPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet our members"
        title="Members"
        description="Neighbors who volunteer their time, day and night, to protect Lincroft."
      />
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <Image
            src={stationPhoto}
            alt="Lincroft Fire Company members in dress uniform in front of Station 10's apparatus"
            placeholder="blur"
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="rounded-xl border"
          />
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <RowList
              title="Front row, left to right"
              names={memberPhoto.frontRow}
            />
            <RowList
              title="Back row, left to right"
              names={memberPhoto.backRow}
              columns
            />
          </div>
        </div>
      </section>
      <section className="border-t bg-muted/50 px-4 py-16 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <SectionHeading
            title="Want to join them?"
            description="We welcome new volunteers over the age of 18. Many of the tasks at the firehouse are administrative and don't require firefighting skills."
          />
          <Button
            className="h-11 shrink-0 px-6 text-base"
            render={<Link href="/contact#volunteer" />}
            nativeButton={false}
          >
            Get in touch
            <ArrowRightIcon />
          </Button>
        </div>
      </section>
    </>
  )
}

function RowList({
  title,
  names,
  columns,
}: {
  title: string
  names: string[]
  columns?: boolean
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-display text-sm font-semibold tracking-widest text-highlight uppercase">
        {title}
      </h2>
      <ol
        className={columns ? "gap-x-6 sm:columns-2 [&>li]:mb-2" : "[&>li]:mb-2"}
      >
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ol>
    </div>
  )
}

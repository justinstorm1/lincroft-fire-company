import type { Metadata } from "next"
import Image from "next/image"
import { AwardIcon } from "lucide-react"

import birthdayPhoto from "@/public/images/richdale-98th-birthday.jpg"
import plaquePhoto from "@/public/images/richdale-plaque.jpg"
import signPhoto from "@/public/images/richdale-sign.jpg"
import { PageHero } from "@/components/page-hero"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = { title: "Recognition" }

const richdalePhotos = [
  {
    src: plaquePhoto,
    alt: "Jim Abbes presenting George Richdale with a plaque at the firehouse",
    caption:
      "3rd Assistant Chief Jim Abbes presents George with a plaque recognizing his exemplary 70 years of service.",
  },
  {
    src: birthdayPhoto,
    alt: "George Richdale with a birthday cake at the firehouse",
    caption:
      "Lincroft Fire Company celebrates George Richdale's 98th birthday.",
  },
  {
    src: signPhoto,
    alt: "The firehouse sign reading Thank You George Richdale for 70 Years of Service to the Community of Lincroft",
    caption:
      "Congratulations George Richdale for actively serving on the Lincroft Fire Company for seventy years.",
  },
]

const honors = [
  {
    label: "Distinguished Member",
    name: "John E. (Jackie) Fowler",
    text: "Honored by the members of the Lincroft Fire Company as a Distinguished Member.",
  },
  {
    label: "Distinguished Member",
    name: "Bill Verange",
    text: "F. W. Verange (Bill) is recognized for his achievement of serving fifty years of service on the Lincroft Fire Company.",
  },
  {
    label: "Congratulations",
    name: "3rd Assistant Chief Jim Abbes",
    text: "Jim Abbes being sworn in by Mayor Tony Perry as 3rd Assistant Chief.",
  },
]

export default function RecognitionPage() {
  return (
    <>
      <PageHero
        eyebrow="Honoring our own"
        title="Recognition"
        description="Celebrating the members whose years of dedication have shaped the Lincroft Fire Company."
      />
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Badge variant="secondary" className="w-fit">
              <AwardIcon />
              Distinguished Member
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl">
              George C. Richdale
            </h2>
            <p className="max-w-2xl text-lg text-pretty text-muted-foreground">
              Seventy years of active service to the Lincroft Fire Company, a
              former Chief of the Middletown Township Fire Department, and one
              of the founders of the MTFD Fire Academy.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {richdalePhotos.map((photo) => (
              <figure key={photo.alt} className="flex flex-col gap-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-muted">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-sm text-pretty text-muted-foreground">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t bg-muted/50 px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {honors.map((honor) => (
            <Card key={honor.name}>
              <CardHeader className="flex flex-col gap-2">
                <Badge variant="secondary">
                  <AwardIcon />
                  {honor.label}
                </Badge>
                <CardTitle className="font-display text-xl font-semibold tracking-wide uppercase">
                  {honor.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {honor.text}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}

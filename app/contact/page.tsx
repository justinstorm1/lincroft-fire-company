import type { Metadata } from "next"
import {
  MapPinIcon,
  MessageCircleIcon,
  NavigationIcon,
  PhoneIcon,
  SirenIcon,
} from "lucide-react"

import { schedule, site, volunteerPitch } from "@/lib/site"
import { PageHero, SectionHeading } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = { title: "Contact" }

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        description="Stop by the firehouse, give us a call, or find us on Facebook."
      />

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-4">
            <Card className="border-primary bg-primary text-primary-foreground ring-0">
              <CardContent className="flex items-center gap-4">
                <SirenIcon className="size-8 shrink-0" />
                <div>
                  <p className="font-display text-2xl font-bold uppercase">
                    Emergency? Dial 911
                  </p>
                  <p className="text-sm opacity-90">
                    Never use the firehouse phone to report a fire or emergency.
                  </p>
                </div>
              </CardContent>
            </Card>

            <ContactRow icon={MapPinIcon} label="Firehouse">
              {site.address.street}
              <br />
              {site.address.city}
            </ContactRow>
            <ContactRow icon={PhoneIcon} label="Non-emergency">
              <a href={site.phone.href} className="hover:underline">
                {site.phone.display}
              </a>
            </ContactRow>
            <ContactRow icon={MessageCircleIcon} label="Facebook">
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Join our Facebook group
              </a>
            </ContactRow>

            <Button
              variant="outline"
              className="h-11 w-fit px-5 text-base"
              render={
                <a href={site.directions} target="_blank" rel="noreferrer" />
              }
              nativeButton={false}
            >
              <NavigationIcon />
              Get directions
            </Button>
          </div>

          <div className="min-h-80 overflow-hidden rounded-xl border bg-muted">
            <iframe
              title="Map of the Lincroft Fire Company firehouse"
              src={site.mapEmbed}
              className="size-full min-h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section
        id="volunteer"
        className="scroll-mt-28 border-t bg-muted/50 px-4 py-16 sm:px-6"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <SectionHeading
              eyebrow="To our friends and neighbors"
              title="Become a volunteer"
            />
            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
              {volunteerPitch}
            </p>
            <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
              Interested? Call the firehouse at{" "}
              <a href={site.phone.href} className="text-foreground underline">
                {site.phone.display}
              </a>{" "}
              to learn more.
            </p>
          </div>
          <Card>
            <CardContent className="flex flex-col gap-4">
              <h3 className="font-display text-lg font-semibold tracking-wide uppercase">
                When we meet
              </h3>
              <dl className="divide-y">
                {schedule.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
                  >
                    <dt>
                      <span className="font-medium">{item.title}</span>
                      <span className="block text-sm text-muted-foreground">
                        {item.when}
                      </span>
                    </dt>
                    <dd className="font-display text-xl font-bold tabular-nums">
                      {item.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border bg-card p-5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-highlight">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-lg font-medium">{children}</p>
      </div>
    </div>
  )
}

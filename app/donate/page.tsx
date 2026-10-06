import type { Metadata } from "next"
import { CheckIcon, HandHeartIcon, PhoneIcon } from "lucide-react"

import { donation, site } from "@/lib/site"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = { title: "Donate" }

const uses = [
  "Maintaining our training",
  "Maintaining our equipment",
  "Protecting lives and property in our community",
]

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Help us help you"
        title="Support the Lincroft Fire Company"
        description={donation}
      />
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-3xl font-bold tracking-tight uppercase">
              Where your donation goes
            </h2>
            <ul className="flex flex-col gap-3">
              {uses.map((use) => (
                <li key={use} className="flex items-start gap-3 text-lg">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckIcon className="size-3.5" />
                  </span>
                  {use}
                </li>
              ))}
            </ul>
            <p className="leading-relaxed text-pretty text-muted-foreground">
              The Township of Middletown purchases our apparatus and some of our
              equipment. The fire company relies on our direct mail fund drive,
              the support of residents and businesses, and a small subsidy from
              the Township for operating costs and insurance. Thank you for your
              support.
            </p>
          </div>

          <Card className="border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle className="font-display text-2xl font-semibold tracking-wide uppercase">
                Donate online
              </CardTitle>
              <CardDescription>
                Secure checkout through PayPal. You can pay with a PayPal
                account or any debit or credit card.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_blank"
              >
                <input type="hidden" name="cmd" value="_donations" />
                <input
                  type="hidden"
                  name="business"
                  value={site.donationEmail}
                />
                <input type="hidden" name="item_name" value={site.name} />
                <input type="hidden" name="currency_code" value="USD" />
                <Button type="submit" className="h-12 w-full text-base">
                  <HandHeartIcon />
                  Donate now
                </Button>
              </form>
              <p className="flex items-start gap-2 text-sm text-muted-foreground">
                <PhoneIcon className="mt-0.5 size-4 shrink-0" />
                <span>
                  Questions about donating? Call us at{" "}
                  <a href={site.phone.href} className="underline">
                    {site.phone.display}
                  </a>
                  .
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from "next"

import { officerGroups } from "@/lib/site"
import { PageHero } from "@/components/page-hero"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = { title: "Officers" }

export default function OfficersPage() {
  return (
    <>
      <PageHero
        eyebrow="2026 leadership"
        title="Officers"
        description="The line, chief, and executive officers who lead the Lincroft Fire Company and the Middletown Township Fire Department."
      />
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {officerGroups.map((group) => (
            <Card key={group.title} className="border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="font-display text-xl font-semibold tracking-wide uppercase">
                  {group.title}
                </CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <dl className="divide-y">
                  {group.officers.map((officer) => (
                    <div
                      key={officer.title}
                      className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
                    >
                      <dt className="text-sm text-muted-foreground">
                        {officer.title}
                      </dt>
                      <dd
                        className={
                          officer.name
                            ? "text-right font-medium"
                            : "text-right text-muted-foreground italic"
                        }
                      >
                        {officer.name ?? "Vacant"}
                      </dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}

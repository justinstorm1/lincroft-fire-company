// Title band at the top of every inner page.
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="border-b bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-14 sm:px-6 sm:py-20">
        <span className="font-display text-sm font-semibold tracking-widest text-gold uppercase">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-lg text-pretty text-navy-foreground/75">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <span className="font-display text-sm font-semibold tracking-widest text-highlight uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-balance uppercase sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

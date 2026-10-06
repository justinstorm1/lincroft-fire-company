import { cn } from "@/lib/utils"

// Maltese cross with the station number, drawn as four rotated arms.
export function MalteseCross({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className={cn("size-10 shrink-0", className)}
    >
      <g className="fill-primary stroke-white dark:stroke-navy" strokeWidth="3">
        {[0, 90, 180, 270].map((deg) => (
          <path
            key={deg}
            d="M50 50 L33 5 L50 16 L67 5 Z"
            strokeLinejoin="round"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </g>
      <circle
        cx="50"
        cy="50"
        r="19"
        className="fill-white stroke-primary"
        strokeWidth="3"
      />
      <text
        x="50"
        y="51"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-navy font-display text-[22px] font-bold dark:fill-[oklch(0.25_0.06_262)]"
      >
        10
      </text>
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <MalteseCross />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-wide uppercase">
          Lincroft Fire Company
        </span>
        <span className="text-xs text-muted-foreground">
          MTFD Station 10 · Middletown Twp, NJ
        </span>
      </span>
    </span>
  )
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Djamila Bekhedidja — Portfolio 2026" },
      { name: "description", content: "Independent product designer & engineer crafting calm, considered interfaces." },
      { property: "og:title", content: "Djamila Bekhedidja — Portfolio 2026" },
      { property: "og:description", content: "Independent product designer & engineer crafting calm, considered interfaces." },
    ],
  }),
  component: Index,
});

const skills = ["React", "Node.js", "UI/UX", "TypeScript"];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background dot-grid">
      {/* decorative circles */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full border border-emerald/30" />
      <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-emerald/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full border border-emerald/20" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-40 w-40 rounded-full bg-emerald/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-6 lg:px-10">
        {/* Nav */}
        <nav className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inset-0 rounded-full bg-emerald" style={{ animation: "var(--animate-pulse-dot)" }} />
            </span>
            <span className="truncate font-display text-lg font-bold tracking-tight text-ink">alex.morgan</span>
          </div>
          <div className="flex shrink-0 items-center gap-2 rounded-full border border-emerald/40 bg-emerald-soft/40 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" style={{ animation: "var(--animate-pulse-dot)" }} />
            <span className="text-xs font-medium text-ink">Open to work</span>
          </div>
        </nav>

        {/* Hero grid */}
        <section className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-20">
          {/* Left */}
          <div className="flex flex-col">
            <span className="mb-6 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-ink/40" />
              Portfolio 2026
            </span>

            <h1 className="font-display text-5xl font-normal leading-[1] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              <span className="block">Djamila</span>
              <span className="block italic outline-text">Bekhedidja</span>
            </h1>

            <p className="mt-8 max-w-md border-l-2 border-emerald pl-4 text-base leading-relaxed text-muted-foreground">
              Independent product designer & engineer crafting calm, considered interfaces for ambitious teams.
            </p>

            <div className="mt-10">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:bg-emerald hover:gap-4"
              >
                View selected work
                <span className="grid h-6 w-6 place-items-center rounded-full bg-background/15 transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center gap-6 lg:items-end">
            <div className="relative grid h-64 w-64 place-items-center sm:h-72 sm:w-72">
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-emerald/60"
                style={{ animation: "var(--animate-spin-slow)" }}
              />
              <div className="absolute inset-3 rounded-full border border-emerald/20" />
              <div className="relative grid h-52 w-52 place-items-center rounded-full bg-gradient-to-br from-ink to-ink/85 sm:h-60 sm:w-60">
                <svg viewBox="0 0 100 100" className="h-24 w-24 text-emerald" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* abstract bloom / design mark */}
                  <circle cx="50" cy="50" r="6" fill="currentColor" />
                  <path d="M50 14 C58 30 58 38 50 50 C42 38 42 30 50 14 Z" />
                  <path d="M50 86 C42 70 42 62 50 50 C58 62 58 70 50 86 Z" />
                  <path d="M14 50 C30 42 38 42 50 50 C38 58 30 58 14 50 Z" />
                  <path d="M86 50 C70 58 62 58 50 50 C62 42 70 42 86 50 Z" />
                  <circle cx="50" cy="50" r="34" strokeDasharray="2 4" opacity="0.4" />
                </svg>
                <span className="absolute bottom-3 right-3 h-4 w-4 rounded-full border-2 border-background bg-emerald" />
              </div>
            </div>

            <div className="grid w-full max-w-xs grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-background/60 p-4 backdrop-blur">
                <div className="font-display text-2xl font-bold text-ink">8<span className="text-emerald">+</span></div>
                <div className="mt-1 text-xs text-muted-foreground">Years shipping</div>
              </div>
              <div className="rounded-2xl border border-border bg-background/60 p-4 backdrop-blur">
                <div className="font-display text-2xl font-bold text-ink">42</div>
                <div className="mt-1 text-xs text-muted-foreground">Projects launched</div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom bar */}
        <footer className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-border pt-6">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <span className="mr-1 text-xs uppercase tracking-widest text-muted-foreground">Stack</span>
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-ink transition-colors hover:border-emerald hover:text-emerald"
              >
                {s}
              </span>
            ))}
          </div>
          <span className="shrink-0 text-xs text-muted-foreground">Lisbon · Remote</span>
        </footer>
      </div>
    </main>
  );
}

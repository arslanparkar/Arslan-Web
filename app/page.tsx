import Link from "next/link"
import PageLayout from "@/components/page-layout"

const focusAreas = [
  ["AI systems", "Agentic workflows, evaluation harnesses, RAG, and practical ML that turns data into decisions."],
  ["Verification & automation", "Python-first test infrastructure for power electronics, instrumentation, and high-confidence releases."],
  ["Product engineering", "End-to-end systems that connect thoughtful interfaces, reliable APIs, and measurable business outcomes."],
]

export default function HomePage() {
  return (
    <PageLayout>
      <main>
        <section className="px-4 pb-24 pt-40 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-8 text-sm uppercase tracking-[0.3em] text-gray-500">AI / ML · Automation · Product Engineering</p>
            <h1 className="max-w-5xl text-6xl font-extralight leading-[0.95] tracking-tight text-black dark:text-white md:text-9xl">
              Building intelligent systems that work in the real world.
            </h1>
            <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
              <p className="max-w-3xl text-2xl font-light leading-relaxed text-gray-600 dark:text-gray-300">
                I&apos;m Arslan Parkar, an AI/ML engineer and technology leader based in Boston. I move from research to production—designing models, automating complex workflows, and shipping products people can rely on.
              </p>
              <div className="flex flex-wrap gap-8 lg:justify-end">
                <Link href="/projects" className="border-b border-black pb-2 text-lg tracking-wide text-black transition-colors hover:border-gray-400 dark:border-white dark:text-white">View projects</Link>
                <Link href="/contact" className="border-b border-gray-400 pb-2 text-lg tracking-wide text-gray-600 transition-colors hover:border-black dark:text-gray-300">Let&apos;s talk</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200 px-4 py-16 dark:border-gray-800 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
            {focusAreas.map(([title, description]) => (
              <article key={title} className="border-l border-gray-300 pl-8 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-light tracking-wide text-black dark:text-white">{title}</h2>
                <p className="leading-relaxed text-gray-500 dark:text-gray-400">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-8 text-sm uppercase tracking-[0.3em] text-gray-500">A trajectory across disciplines</p>
              <h2 className="max-w-xl text-5xl font-extralight leading-tight tracking-tight text-black dark:text-white md:text-6xl">From semiconductor benches to conversational agents.</h2>
            </div>
            <div className="flex flex-col gap-8 text-xl font-light leading-relaxed text-gray-600 dark:text-gray-300">
              <p>At Infineon, I automate validation benches and build ML systems that make chip testing faster and safer. At Northeastern, I build digital preservation platforms, research pipelines, and XR experiences.</p>
              <p>Before Boston, I co-founded INFOBAY, led a team of seven, and delivered AI and full-stack systems for 24+ enterprise clients across finance, healthcare, real estate, and technology.</p>
              <Link href="/about" className="w-fit border-b border-gray-400 pb-2 text-lg tracking-wide text-black hover:border-black dark:text-white">Read my experience</Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl border-t border-gray-200 pt-16 text-center dark:border-gray-800">
            <h2 className="text-4xl font-extralight tracking-tight text-black dark:text-white md:text-6xl">Good technology is precise, useful, and human.</h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">Explore the work, research, and ideas behind the systems I build.</p>
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <Link href="/projects" className="border-b border-black pb-2 text-lg text-black dark:border-white dark:text-white">Explore projects</Link>
              <Link href="/research" className="border-b border-gray-400 pb-2 text-lg text-gray-600 dark:text-gray-300">Explore research</Link>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}

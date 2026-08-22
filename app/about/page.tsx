import Link from "next/link"
import PageLayout from "@/components/page-layout"

const experience = [
  { role: "Machine Learning & Automation Engineer (Co-op)", company: "Infineon Technologies", location: "Boston, MA", dates: "Jan 2026 – Dec 2026", points: ["Automated six power-stage validation benches with Python, SCPI, and I2C, reducing a 60-hour manual test cycle to three hours.", "Built 4,000+ hour MOSFET endurance testing with fail-safe monitoring and automated burn-out detection.", "Trained pass/fail classifiers on 50,000+ data points at 96% precision and built an efficiency predictor that saved an estimated $150K annually.", "Built an access-controlled multi-agent platform for natural-language project analysis, custom charts, and talk-to-your-docs workflows."] },
  { role: "Machine Learning Research Assistant", company: "Northeastern University · Center for Transformative Media", location: "Boston, MA", dates: "Jan 2025 – Dec 2025", points: ["Built technology end to end for Professor Adriana de Souza e Silva and the research center.", "Shipped the Retro Mobile Game Database (rmgd.org) and a conversational copilot that answers questions over its collection.", "Developed ML pipelines for retro-game classification and analysis, plus AR/VR Unity experiences for the Media in Motion symposium."] },
  { role: "Co-founder & CTO", company: "INFOBAY", location: "Mumbai, India", dates: "Mar 2022 – Aug 2024", points: ["Led technology for a seven-person startup serving 24+ enterprise clients across finance, healthcare, real estate, e-commerce, and technology.", "Built a debt-recovery model that improved effective collection by 20% and was later acquired by PwC.", "Delivered fraud detection, model monitoring, and full-stack infrastructure with 99.5% uptime and 1.2s to 400ms latency improvement."] },
  { role: "Associate Software Development Engineer", company: "Blustream Integrated", location: "Mumbai, India", dates: "Mar 2021 – Mar 2022", points: ["Led a five-person team delivering three production analytics dashboards for 100,000+ monthly users.", "Built React, Node, and PostgreSQL systems and automated test suites that caught 40+ critical issues before launch."] },
]

const education = [
  ["M.S. Information Systems", "Northeastern University", "Boston, MA · Sep 2024 – Dec 2026", "GPA 3.60 · Algorithms, Data Science Methods, MLOps, Prompt Engineering, Application Engineering"],
  ["B.E. Artificial Intelligence & Data Science", "University of Mumbai", "India · Jul 2021 – May 2024", "GPA 3.60 · Deep Learning, Computer Vision, NLP, Cloud Computing, Statistics, Big Data Analytics"],
]

export default function AboutPage() {
  return <PageLayout><main>
    <section className="px-4 pb-20 pt-36 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl">
      <p className="mb-8 text-sm uppercase tracking-[0.3em] text-gray-500">About Arslan Parkar</p>
      <h1 className="max-w-5xl text-6xl font-extralight leading-[0.95] tracking-tight text-black dark:text-white md:text-8xl">Engineer, researcher, and builder of useful intelligence.</h1>
      <p className="mt-12 max-w-3xl text-2xl font-light leading-relaxed text-gray-600 dark:text-gray-300">I work at the intersection of machine learning, hardware validation, automation, and product engineering—turning ambitious ideas into dependable systems.</p>
    </div></section>

    <section className="border-y border-gray-200 px-4 py-20 dark:border-gray-800 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl">
      <p className="mb-12 text-sm uppercase tracking-[0.3em] text-gray-500">01 · Professional experience</p>
      <div className="flex flex-col gap-16">{experience.map((item) => <article key={item.company} className="grid gap-8 border-b border-gray-200 pb-16 last:border-0 dark:border-gray-800 lg:grid-cols-[0.9fr_1.1fr]"><div><h2 className="text-3xl font-light tracking-wide text-black dark:text-white">{item.role}</h2><p className="mt-4 text-xl text-gray-600 dark:text-gray-300">{item.company}</p><p className="mt-2 text-gray-500">{item.location} · {item.dates}</p></div><ul className="flex flex-col gap-4 text-gray-600 leading-relaxed dark:text-gray-300">{item.points.map((point) => <li key={point}>• {point}</li>)}</ul></article>)}</div>
    </div></section>

    <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><p className="mb-12 text-sm uppercase tracking-[0.3em] text-gray-500">02 · Academic excellence</p><div className="grid gap-12 md:grid-cols-2">{education.map(([degree, school, details, coursework]) => <article key={degree} className="border-l border-gray-300 pl-8 dark:border-gray-700"><h2 className="text-3xl font-light text-black dark:text-white">{degree}</h2><p className="mt-4 text-xl text-gray-600 dark:text-gray-300">{school}</p><p className="mt-2 text-gray-500">{details}</p><p className="mt-8 leading-relaxed text-gray-600 dark:text-gray-400">{coursework}</p></article>)}</div></div></section>

    <section className="border-t border-gray-200 px-4 py-20 dark:border-gray-800 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><p className="mb-12 text-sm uppercase tracking-[0.3em] text-gray-500">03 · Technical toolkit</p><div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">{[["AI & ML", "scikit-learn · PyTorch · TensorFlow · XGBoost · OpenCV · NLP · CNNs"], ["Agentic AI", "RAG · tool calling · multi-agent orchestration · LangChain · eval design"], ["Hardware & test", "SCPI · I2C · PyVISA · pytest · board bring-up · signal integrity · DAQ"], ["Product & infra", "Python · C/C++ · TypeScript · React · FastAPI · PostgreSQL · AWS · Docker"]].map(([title, text]) => <article key={title}><h2 className="text-xl font-light text-black dark:text-white">{title}</h2><p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">{text}</p></article>)}</div></div></section>
    <section className="px-4 pb-28 pt-8 text-center sm:px-6 lg:px-8"><Link href="/projects" className="border-b border-black pb-2 text-lg text-black dark:border-white dark:text-white">See selected projects</Link></section>
  </main></PageLayout>
}

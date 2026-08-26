import Link from "next/link"
import PageLayout from "@/components/page-layout"

const projectImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Media-in-Motion-faculty-1024x679-sqdD015cfSQfEzeNYxiv18Xb0fjgcR.png",
    alt: "Faculty discussion at the Northeastern Media in Motion symposium",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/media%20in%20motion%202.JPG-7tbV7GoMH3ADAyrllqjeolBeCoIiHV.jpeg",
    alt: "VR research demonstration from the Northeastern Media in Motion symposium",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/infineon%202-1XtRd6N8qcsaqz48WO3Kh2EVdVYKiZ.jpeg",
    alt: "Electronic bench testing and instrumentation work at Infineon",
  },
]

const projects = [
  ["RMGD Copilot", "Live conversational database agent", "Gemini · AWS · RAG · Python", "A conversational guide for the Retro Mobile Game Database. It answers natural-language questions over the collection and routes visitors to the right pages.", "https://rmgd.org"],
  ["EvalArena", "LLM benchmarking harness", "Python · Gemini · Claude · OpenAI", "A reproducible evaluation harness for building task-specific datasets, testing prompts against unseen parameters, and ranking model outputs across repeated iterations."],
  ["AdaptiTrim", "ML-driven IMON calibration", "Python · scikit-learn · SCPI · Instrumentation", "An adaptive calibration workflow that predicts per-part trim codes from measured performance and controller configuration."],
  ["ConfigForge", "Automated controller characterization", "Python · SCPI · XDP · Test Automation", "A 15-minute input/output sweep that characterizes a controller and selects the correct configuration for a board and part specification."],
  ["XplainMed", "Explainable clinical diagnostics", "CheXNet · DenseNet-121 · RAG · LangChain · PyTorch", "An interpretable chest X-ray diagnostic system that pairs a CheXNet model with cited medical evidence through a vectorless RAG pipeline."],
  ["StyleSense", "Fashion intelligence platform", "PyTorch · OpenCV · CNN · Transfer Learning", "A computer-vision platform for cataloging wardrobes and recommending outfits from visual embeddings and collaborative filtering across a 50K+ image dataset."],
  ["ChainTap", "Contactless crypto wallet", "Web NFC · PWA · Web Crypto API", "A progressive web app that turns an NFC-enabled phone into a contactless wallet with peer-to-peer transfer, session authentication, and end-to-end encryption."],
]

export default function ProjectsPage() {
  return <PageLayout><main>
    <section className="px-4 pb-20 pt-36 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><p className="mb-8 text-sm uppercase tracking-[0.3em] text-gray-500">Selected work</p><h1 className="max-w-5xl text-6xl font-extralight leading-[0.95] tracking-tight text-black dark:text-white md:text-8xl">Projects built across intelligence, infrastructure, and imagination.</h1><p className="mt-12 max-w-3xl text-2xl font-light leading-relaxed text-gray-600 dark:text-gray-300">A selection of systems I&apos;ve designed and shipped—from research tools and production ML to hardware automation and human-centered products.</p></div></section>
    <section className="border-t border-gray-200 px-4 py-8 dark:border-gray-800 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl justify-between text-sm uppercase tracking-[0.2em] text-gray-500"><span>07 projects</span><span>AI · ML · Systems</span></div></section>
    <section className="px-4 pb-28 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-x-12 gap-y-16 md:grid-cols-2">{projects.map(([name, type, tech, description, link], index) => <article key={name} className="border-t border-gray-200 pt-8 dark:border-gray-800"><div className="flex items-start justify-between gap-4"><span className="text-sm text-gray-500">0{index + 1}</span>{link && <a href={link} target="_blank" rel="noreferrer" className="text-sm text-gray-500 underline underline-offset-4">Visit live site</a>}</div>{projectImages[index] && <img src={projectImages[index].src} alt={projectImages[index].alt} className="mt-8 h-52 w-full object-cover grayscale transition duration-500 hover:grayscale-0" />}<h2 className="mt-10 text-3xl font-light tracking-wide text-black dark:text-white">{name}</h2><p className="mt-3 text-lg text-gray-600 dark:text-gray-300">{type}</p><p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-400">{description}</p><p className="mt-8 text-sm uppercase leading-relaxed tracking-[0.12em] text-gray-500">{tech}</p></article>)}</div></section>
    <section className="border-t border-gray-200 px-4 py-20 text-center dark:border-gray-800 sm:px-6 lg:px-8"><p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-gray-600 dark:text-gray-300">Interested in the details, the decisions, or the next build?</p><Link href="/contact" className="mt-8 inline-block border-b border-black pb-2 text-lg text-black dark:border-white dark:text-white">Start a conversation</Link></section>
  </main></PageLayout>
}

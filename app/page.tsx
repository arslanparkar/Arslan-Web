import Link from "next/link"
import PageLayout from "@/components/page-layout"

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="mb-12">
              <h1 className="text-7xl md:text-9xl font-extralight mb-12 leading-none tracking-tight">Arslan Parkar</h1>
              <div className="text-2xl md:text-3xl font-light text-gray-400 mb-16 tracking-wide">
                Full-Stack Visionary • AI Architect • Startup Founder
              </div>
            </div>

            <div className="max-w-5xl mx-auto mb-20">
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed font-light">
                "Transforming complex problems into elegant solutions, one breakthrough at a time"
              </p>
              <p className="text-lg text-gray-400 leading-relaxed max-w-4xl mx-auto">
                I'm not just writing code—I'm composing digital symphonies. Currently sculpting the future through
                graduate research at Northeastern University while architecting intelligent systems that bridge
                imagination and reality.
              </p>
            </div>

            <Link href="/contact">
              <button className="text-white border-b border-gray-600 hover:border-white transition-colors duration-500 text-xl pb-2 tracking-wide">
                Let's Create Something Extraordinary
              </button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-px h-20 bg-gray-800 mx-auto mb-8"></div>
              <div className="text-4xl font-extralight mb-4">50+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="w-px h-20 bg-gray-800 mx-auto mb-8"></div>
              <div className="text-4xl font-extralight mb-4">150+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="w-px h-20 bg-gray-800 mx-auto mb-8"></div>
              <div className="text-4xl font-extralight mb-4">2M+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">User Impressions</div>
            </div>
            <div className="text-center">
              <div className="w-px h-20 bg-gray-800 mx-auto mb-8"></div>
              <div className="text-4xl font-extralight mb-4">$5M+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Revenue Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="w-px h-24 bg-gray-800 mb-12"></div>
              <h2 className="text-5xl md:text-6xl font-extralight mb-12 leading-tight tracking-tight">
                Crafting Tomorrow's <span className="text-gray-400">Technology Today</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed font-light">
                I'm a digital craftsman who sees code as poetry and data as paint. My journey from Mumbai's bustling
                tech scene to Boston's innovation hub has been guided by one principle: create technology that doesn't
                just work, but inspires.
              </p>
              <Link href="/about">
                <button className="text-gray-300 border-b border-gray-700 hover:border-gray-400 hover:text-white transition-all duration-500 pb-2 text-lg tracking-wide">
                  Discover My Journey
                </button>
              </Link>
            </div>

            <div className="space-y-16">
              <div className="border-l border-gray-800 pl-12">
                <h3 className="text-2xl font-light mb-6 tracking-wide">Entrepreneurial Journey</h3>
                <p className="text-gray-400 leading-relaxed">
                  Founded Infobay - Transformed ideas into enterprise solutions for Axis Bank, Audi India, and UPL
                </p>
              </div>
              <div className="border-l border-gray-800 pl-12">
                <h3 className="text-2xl font-light mb-6 tracking-wide">Financial Intelligence</h3>
                <p className="text-gray-400 leading-relaxed">
                  AI-Driven Risk Models - Improved debt recovery by 25% through predictive analytics magic
                </p>
              </div>
              <div className="border-l border-gray-800 pl-12">
                <h3 className="text-2xl font-light mb-6 tracking-wide">Research Innovation</h3>
                <p className="text-gray-400 leading-relaxed">
                  Northeastern University - Pioneering digital preservation and XR gaming experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Canvas */}
      <section className="py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="w-px h-24 bg-gray-800 mx-auto mb-12"></div>
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-tight">The Canvas of Expertise</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Where technical mastery meets creative vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="text-center">
              <div className="mb-12">
                <div className="w-px h-20 bg-gray-800 mx-auto mb-8"></div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Full-Stack Artistry</h3>
                <p className="text-gray-400 leading-relaxed">React • Node.js • Python • TypeScript • GraphQL</p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-12">
                <div className="w-px h-20 bg-gray-800 mx-auto mb-8"></div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">AI Mastery</h3>
                <p className="text-gray-400 leading-relaxed">
                  TensorFlow • PyTorch • Computer Vision • NLP • Financial ML
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-12">
                <div className="w-px h-20 bg-gray-800 mx-auto mb-8"></div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Cloud Architecture</h3>
                <p className="text-gray-400 leading-relaxed">
                  AWS • Docker • Kubernetes • Microservices • Real-time Systems
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-12">
                <div className="w-px h-20 bg-gray-800 mx-auto mb-8"></div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Business Alchemy</h3>
                <p className="text-gray-400 leading-relaxed">
                  Startup Founder • Team Leadership • Enterprise Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-px h-24 bg-gray-800 mx-auto mb-12"></div>
          <h2 className="text-5xl md:text-6xl font-extralight mb-12 leading-tight tracking-tight">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-400 mb-16 leading-relaxed font-light max-w-4xl mx-auto">
            Passionate about creating innovative solutions in Full-Stack Development, ML Engineering, and FinTech where
            innovation meets impact.
          </p>
          <div className="flex flex-wrap justify-center gap-16">
            <Link href="/research">
              <button className="text-gray-300 border-b border-gray-700 hover:border-gray-400 hover:text-white transition-all duration-500 pb-2 text-lg tracking-wide">
                Explore My Research
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-white border-b border-gray-600 hover:border-white transition-colors duration-500 pb-2 text-lg tracking-wide">
                Start a Conversation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

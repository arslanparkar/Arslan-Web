import Link from "next/link"
import PageLayout from "@/components/page-layout"

export default function ResearchPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-px h-24 bg-gray-200 dark:bg-gray-800 mx-auto mb-12"></div>
          <h1 className="text-6xl md:text-8xl font-extralight mb-12 tracking-tight text-black dark:text-white">
            Digital Alchemy Laboratory
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-12 font-light tracking-wide">
            Where Science Meets Art
          </p>
          <p className="text-xl text-gray-500 dark:text-gray-500 max-w-4xl mx-auto font-light leading-relaxed">
            Transforming Ideas into Intelligent Reality through cutting-edge research at the intersection of technology,
            creativity, and human experience.
          </p>
        </div>
      </section>

      {/* Current Research */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="w-px h-24 bg-gray-200 dark:bg-gray-800 mx-auto mb-12"></div>
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-tight text-black dark:text-white">
              Current Research Endeavors
            </h2>
          </div>

          <div className="space-y-24">
            {/* Digital Preservation */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-12">
                  <div className="w-px h-16 bg-gray-300 dark:bg-gray-700 mb-8"></div>
                  <h3 className="text-4xl font-light mb-6 tracking-wide text-black dark:text-white">
                    Digital Preservation & Gaming Evolution
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Northeastern University Research Lab | Jan 2025 - Present
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-2xl font-light mb-4 tracking-wide text-black dark:text-white">The Vision</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                      Unraveling the DNA of gaming history through machine learning archaeology. I'm developing AI
                      systems that can understand, preserve, and predict the evolution of interactive entertainment.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-light mb-4 tracking-wide text-black dark:text-white">
                      The Innovation
                    </h4>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                      <li>• ML Pipeline Artistry: TensorFlow, Keras, and PyTorch orchestrating data symphonies</li>
                      <li>• Digital Preservation Platform: AI-driven visualization models mapping gaming evolution</li>
                      <li>• XR Experience Creation: Unity and GLB bringing academic research to life</li>
                      <li>• Symposium Showcase: "Media in Motion" - where research meets interactive art</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-12 border border-gray-200 dark:border-gray-800">
                <div className="w-px h-12 bg-gray-300 dark:bg-gray-700 mb-8"></div>
                <h4 className="text-2xl font-light mb-8 tracking-wide text-black dark:text-white">Impact Statement</h4>
                <p className="text-gray-600 dark:text-gray-400 italic mb-12 leading-relaxed font-light text-lg">
                  "Every pixel tells a story, every algorithm preserves a memory. We're not just studying games—we're
                  safeguarding digital culture."
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Research Duration</span>
                    <span className="text-gray-700 dark:text-gray-300">12+ months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Technologies</span>
                    <span className="text-gray-700 dark:text-gray-300">5+ ML frameworks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Publications</span>
                    <span className="text-gray-700 dark:text-gray-300">In progress</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Intelligence */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="p-12 border border-gray-200 dark:border-gray-800">
                <div className="w-px h-12 bg-gray-300 dark:bg-gray-700 mb-8"></div>
                <h4 className="text-2xl font-light mb-8 tracking-wide text-black dark:text-white">
                  Revolutionary Findings
                </h4>
                <div className="space-y-8">
                  <div>
                    <h5 className="text-lg font-light text-gray-700 dark:text-gray-300 mb-3 tracking-wide">
                      Real-time Architecture
                    </h5>
                    <p className="text-gray-500 leading-relaxed">
                      Sub-200ms latency with institutional-grade performance
                    </p>
                  </div>
                  <div>
                    <h5 className="text-lg font-light text-gray-700 dark:text-gray-300 mb-3 tracking-wide">
                      ML Breakthrough
                    </h5>
                    <p className="text-gray-500 leading-relaxed">
                      155% higher returns with Transformer + fundamental analysis
                    </p>
                  </div>
                  <div>
                    <h5 className="text-lg font-light text-gray-700 dark:text-gray-300 mb-3 tracking-wide">
                      Trading Intelligence
                    </h5>
                    <p className="text-gray-500 leading-relaxed">93% accuracy in swing trading with LSTM models</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-12">
                  <div className="w-px h-16 bg-gray-300 dark:bg-gray-700 mb-8"></div>
                  <h3 className="text-4xl font-light mb-6 tracking-wide text-black dark:text-white">
                    Financial Market Intelligence Systems
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Independent Research Initiative | 2024-2025
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-2xl font-light mb-4 tracking-wide text-black dark:text-white">The Quest</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                      Reimagining how financial markets can be understood, predicted, and navigated through the fusion
                      of real-time data streaming and predictive machine learning.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-light mb-4 tracking-wide text-black dark:text-white">
                      Technical Architecture Poetry
                    </h4>
                    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded border border-gray-200 dark:border-gray-800">
                      <pre className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {`Frontend: React.js + TradingView Charts
Backend: FastAPI + WebSocket streaming
Database: TimescaleDB + Redis caching
ML Pipeline: TensorFlow + PyTorch ensemble
Deployment: Docker + Kubernetes`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare Analysis */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-12">
                  <div className="w-px h-16 bg-gray-300 dark:bg-gray-700 mb-8"></div>
                  <h3 className="text-4xl font-light mb-6 tracking-wide text-black dark:text-white">
                    AI-Driven Healthcare Analysis
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Medical Imaging Intelligence Project | 2023-2024
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-2xl font-light mb-4 tracking-wide text-black dark:text-white">The Mission</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                      Transforming medical diagnosis through the artistic application of deep learning to chest X-ray
                      interpretation.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-light mb-4 tracking-wide text-black dark:text-white">
                      Technical Artistry
                    </h4>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                      <li>• CNN-based DenseNet Architecture with PyTorch precision</li>
                      <li>• Domain-Specific Augmentation for medical imaging optimization</li>
                      <li>• Visualization Excellence through Matplotlib analysis</li>
                      <li>• Significant improvement in pneumonia detection rates</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-12 border border-gray-200 dark:border-gray-800">
                <div className="w-px h-12 bg-gray-300 dark:bg-gray-700 mb-8"></div>
                <h4 className="text-2xl font-light mb-8 tracking-wide text-black dark:text-white">Clinical Impact</h4>
                <p className="text-gray-600 dark:text-gray-400 italic mb-12 leading-relaxed font-light text-lg">
                  "When AI meets medical imaging, lives can be saved through the beauty of algorithmic precision."
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Accuracy Improvement</span>
                    <span className="text-gray-700 dark:text-gray-300">Significant</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Model Architecture</span>
                    <span className="text-gray-700 dark:text-gray-300">CNN-DenseNet</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Framework</span>
                    <span className="text-gray-700 dark:text-gray-300">PyTorch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="w-px h-24 bg-gray-200 dark:bg-gray-800 mx-auto mb-12"></div>
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-tight text-black dark:text-white">
              Research Philosophy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-px h-20 bg-gray-200 dark:bg-gray-800 mx-auto mb-12"></div>
              <h3 className="text-2xl font-light mb-8 tracking-wide text-black dark:text-white">
                The Intersection Principle
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 italic font-light">
                "The most profound discoveries happen at the intersection of disciplines."
              </p>
              <p className="text-gray-500 leading-relaxed">
                My research doesn't live in silos. I explore the spaces between technology and art, between data and
                emotion, between prediction and intuition.
              </p>
            </div>

            <div className="text-center">
              <div className="w-px h-20 bg-gray-200 dark:bg-gray-800 mx-auto mb-12"></div>
              <h3 className="text-2xl font-light mb-8 tracking-wide text-black dark:text-white">
                The Elegance Standard
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 italic font-light">
                "If a solution isn't elegant, it's not finished."
              </p>
              <p className="text-gray-500 leading-relaxed">
                Every research project must pass the elegance test. Complex problems deserve beautiful solutions.
                Aesthetics and functionality must dance together.
              </p>
            </div>

            <div className="text-center">
              <div className="w-px h-20 bg-gray-200 dark:bg-gray-800 mx-auto mb-12"></div>
              <h3 className="text-2xl font-light mb-8 tracking-wide text-black dark:text-white">
                The Impact Imperative
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 italic font-light">
                "Research without real-world application is just intellectual decoration."
              </p>
              <p className="text-gray-500 leading-relaxed">
                All my research aims for tangible impact. Academic rigor meets practical application. Theoretical
                breakthroughs become implemented solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Horizons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="w-px h-24 bg-gray-200 dark:bg-gray-800 mx-auto mb-12"></div>
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-tight text-black dark:text-white">
              Future Research Horizons
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 border border-gray-200 dark:border-gray-800">
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700 mb-8"></div>
              <h3 className="text-2xl font-light mb-6 tracking-wide text-black dark:text-white">
                Quantum-Classical Hybrid Systems
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Exploring the intersection of quantum computing and classical ML for financial prediction.
              </p>
            </div>

            <div className="p-8 border border-gray-200 dark:border-gray-800">
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700 mb-8"></div>
              <h3 className="text-2xl font-light mb-6 tracking-wide text-black dark:text-white">
                Emotional AI for Creative Industries
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Developing AI systems that understand and respond to human creativity and emotion.
              </p>
            </div>

            <div className="p-8 border border-gray-200 dark:border-gray-800">
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700 mb-8"></div>
              <h3 className="text-2xl font-light mb-6 tracking-wide text-black dark:text-white">
                Sustainable AI Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Researching energy-efficient ML models for environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Recognition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="w-px h-24 bg-gray-200 dark:bg-gray-800 mx-auto mb-12"></div>
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-tight text-black dark:text-white">
              Publications & Recognition
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            <div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700 mb-8"></div>
              <h3 className="text-2xl font-light mb-8 tracking-wide text-black dark:text-white">
                Academic Presentations
              </h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-4 leading-relaxed">
                <li>• "Digital Preservation Through XR Gaming" - Media in Motion Symposium</li>
                <li>• "ML Pipeline Optimization for Gaming Evolution Analysis" - Northeastern Research Showcase</li>
              </ul>
            </div>

            <div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700 mb-8"></div>
              <h3 className="text-2xl font-light mb-8 tracking-wide text-black dark:text-white">
                Technical Documentation
              </h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-4 leading-relaxed">
                <li>• Comprehensive guide to building financial ML systems</li>
                <li>• Open-source contributions to digital preservation tools</li>
              </ul>
            </div>

            <div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700 mb-8"></div>
              <h3 className="text-2xl font-light mb-8 tracking-wide text-black dark:text-white">Community Impact</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-4 leading-relaxed">
                <li>• Mentoring junior researchers in ML application development</li>
                <li>• Contributing to open-source projects in financial technology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-px h-24 bg-gray-200 dark:bg-gray-800 mx-auto mb-12"></div>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-16 italic leading-relaxed font-light">
            "Research is not about finding answers—it's about asking better questions. And the most beautiful questions
            lie at the intersection of art, science, and human experience."
          </p>
          <div className="flex flex-wrap justify-center gap-16">
            <Link href="/about">
              <button className="text-gray-600 dark:text-gray-300 border-b border-gray-400 dark:border-gray-700 hover:border-gray-600 dark:hover:border-gray-400 hover:text-black dark:hover:text-white transition-all duration-500 pb-2 text-lg tracking-wide">
                Learn About My Background
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-black dark:text-white border-b border-gray-400 dark:border-gray-600 hover:border-black dark:hover:border-white transition-colors duration-500 pb-2 text-lg tracking-wide">
                Collaborate on Research
              </button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

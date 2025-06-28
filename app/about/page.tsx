import Link from "next/link"
import PageLayout from "@/components/page-layout"

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="w-px h-24 bg-gray-800 mx-auto mb-12"></div>
            <h1 className="text-6xl md:text-8xl font-extralight mb-12 tracking-tight">Sculpting Digital Experiences</h1>
            <p className="text-2xl text-gray-400 font-light tracking-wide">One Algorithm at a Time</p>
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <p className="text-2xl text-gray-400 mb-12 font-light leading-relaxed">
              "Technology is not just about solving problems—it's about reimagining possibilities."
            </p>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              I'm a digital craftsman who sees code as poetry and data as paint. My journey from Mumbai's bustling tech
              scene to Boston's innovation hub has been guided by one principle: create technology that doesn't just
              work, but inspires.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Palette */}
      <section className="py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="w-px h-24 bg-gray-800 mx-auto mb-12"></div>
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-tight">The Technical Palette</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            <div className="p-8 border border-gray-800">
              <div className="w-px h-12 bg-gray-700 mb-8"></div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">Creative Languages</h3>
              <p className="text-gray-300 mb-4 font-light">Primary Brushes:</p>
              <p className="text-gray-400 mb-6 leading-relaxed">Python, JavaScript, TypeScript, Java</p>
              <p className="text-gray-300 mb-4 font-light">Artistic Tools:</p>
              <p className="text-gray-400 leading-relaxed">R, SQL, C/C++, HTML/CSS, Bash</p>
            </div>

            <div className="p-8 border border-gray-800">
              <div className="w-px h-12 bg-gray-700 mb-8"></div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">Web Artistry</h3>
              <p className="text-gray-300 mb-4 font-light">Frontend Canvas:</p>
              <p className="text-gray-400 mb-6 leading-relaxed">React.js, Vue.js, Angular.js, Redux, Three.js</p>
              <p className="text-gray-300 mb-4 font-light">Backend Architecture:</p>
              <p className="text-gray-400 leading-relaxed">Node.js, Express.js, FastAPI, Django</p>
            </div>

            <div className="p-8 border border-gray-800">
              <div className="w-px h-12 bg-gray-700 mb-8"></div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">AI Wizardry</h3>
              <p className="text-gray-300 mb-4 font-light">Neural Networks:</p>
              <p className="text-gray-400 mb-6 leading-relaxed">TensorFlow, PyTorch, Keras, CNN, RNN</p>
              <p className="text-gray-300 mb-4 font-light">Specialized Alchemy:</p>
              <p className="text-gray-400 leading-relaxed">Computer Vision, NLP, Financial ML</p>
            </div>

            <div className="p-8 border border-gray-800">
              <div className="w-px h-12 bg-gray-700 mb-8"></div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">Data Architecture</h3>
              <p className="text-gray-300 mb-4 font-light">Storage Solutions:</p>
              <p className="text-gray-400 mb-6 leading-relaxed">PostgreSQL, MongoDB, Redis, DynamoDB</p>
              <p className="text-gray-300 mb-4 font-light">Infrastructure Poetry:</p>
              <p className="text-gray-400 leading-relaxed">Docker, Kubernetes, AWS, Microservices</p>
            </div>

            <div className="p-8 border border-gray-800">
              <div className="w-px h-12 bg-gray-700 mb-8"></div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">Analytics & Visualization</h3>
              <p className="text-gray-300 mb-4 font-light">Data Science:</p>
              <p className="text-gray-400 mb-6 leading-relaxed">Pandas, NumPy, Scikit-Learn, Matplotlib</p>
              <p className="text-gray-300 mb-4 font-light">Business Intelligence:</p>
              <p className="text-gray-400 leading-relaxed">Power BI, Tableau, Time-Series Analysis</p>
            </div>

            <div className="p-8 border border-gray-800">
              <div className="w-px h-12 bg-gray-700 mb-8"></div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">DevOps & Deployment</h3>
              <p className="text-gray-300 mb-4 font-light">CI/CD Pipeline:</p>
              <p className="text-gray-400 mb-6 leading-relaxed">Jenkins, Git, Automated Testing</p>
              <p className="text-gray-300 mb-4 font-light">Cloud Platforms:</p>
              <p className="text-gray-400 leading-relaxed">AWS, Firebase, Real-time Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="w-px h-24 bg-gray-800 mx-auto mb-12"></div>
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-tight">Academic Excellence</h2>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            <div className="border-b border-gray-800 pb-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-light mb-4 tracking-wide">Master of Science - Information Systems</h3>
                  <p className="text-gray-300 text-xl">Northeastern University, Boston, MA</p>
                </div>
                <span className="text-gray-400 tracking-wide">2024-2026</span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Advanced Algorithms • Application Engineering • Data Science Methods • Prompt Engineering
              </p>
              <div className="mt-8">
                <h4 className="text-xl font-light text-gray-200 mb-6 tracking-wide">Current Research Assistant</h4>
                <ul className="text-gray-400 space-y-3 leading-relaxed">
                  <li>• Digital preservation platform development</li>
                  <li>• ML pipelines for gaming evolution analysis</li>
                  <li>• XR gaming experiences for academic symposiums</li>
                </ul>
              </div>
            </div>

            <div className="border-b border-gray-800 pb-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-light mb-4 tracking-wide">Bachelor of Science - AI & Data Science</h3>
                  <p className="text-gray-300 text-xl">University of Mumbai, India</p>
                </div>
                <span className="text-gray-400 tracking-wide">2021-2024</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Deep Learning • NLP • Data Analysis • Cloud Computing • Statistics • Product Management • Big Data
                Analytics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="w-px h-24 bg-gray-800 mx-auto mb-12"></div>
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-tight">Professional Experience</h2>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            <div className="border-b border-gray-800 pb-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-light mb-4 tracking-wide">Research Assistant</h3>
                  <p className="text-gray-300 text-xl">Northeastern University, Boston, USA</p>
                </div>
                <span className="text-gray-400 tracking-wide">Jan 2025 - Present</span>
              </div>
              <ul className="text-gray-300 space-y-4 leading-relaxed">
                <li>
                  • Developed ML pipelines to analyze retro games' evolution using TensorFlow, Keras, PyTorch, and
                  Pandas
                </li>
                <li>
                  • Developed a digital preservation platform in collaboration with Directors in Media, integrating
                  AI-based data visualization
                </li>
                <li>• Developed an XR game for a Symposium 'Media in motion' using hoverlay, unity, and GLB, C#</li>
              </ul>
            </div>

            <div className="border-b border-gray-800 pb-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-light mb-4 tracking-wide">Founder & Technology Head</h3>
                  <p className="text-gray-300 text-xl">Infobay, Mumbai, India</p>
                </div>
                <span className="text-gray-400 tracking-wide">Nov 2021 - Aug 2024</span>
              </div>
              <ul className="text-gray-300 space-y-4 leading-relaxed">
                <li>
                  • Developed an ML-based financial risk analysis model for Middle Eastern banks using Python,
                  TensorFlow, Keras, and scikit-learn
                </li>
                <li>
                  • Built an AI-powered fashion solution leveraging PyTorch, TensorFlow, and OpenCV to analyze
                  large-scale image datasets
                </li>
                <li>
                  • Spearheaded the development of sophisticated, responsive front-end architectures using React.js for
                  high-profile clients including Axis Bank, UPL, Audi India
                </li>
                <li>
                  • Led a cross-functional team of 12 with Agile methods, with CI/CD pipelines and automated testing
                </li>
              </ul>
            </div>

            <div className="border-b border-gray-800 pb-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-light mb-4 tracking-wide">Associate Technology</h3>
                  <p className="text-gray-300 text-xl">Blustream Integrated, Mumbai, India</p>
                </div>
                <span className="text-gray-400 tracking-wide">Mar 2021 - July 2022</span>
              </div>
              <ul className="text-gray-300 space-y-4 leading-relaxed">
                <li>
                  • Developed high-performance e-commerce and banking websites using React, WordPress, and Shopify
                </li>
                <li>
                  • Engineered robust API integrations leveraging RESTful APIs, GraphQL, JSON, and event-driven webhooks
                </li>
              </ul>
            </div>

            <div className="border-b border-gray-800 pb-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-light mb-4 tracking-wide">Development Intern</h3>
                  <p className="text-gray-300 text-xl">Digitalbeej, Mumbai, India</p>
                </div>
                <span className="text-gray-400 tracking-wide">May 2020 - Dec 2020</span>
              </div>
              <ul className="text-gray-300 space-y-4 leading-relaxed">
                <li>
                  • Developed high-performance, lightweight marketing pages using React.js and Bootstrap, serving
                  100,000+ monthly users
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Me Unique */}
      <section className="py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="w-px h-24 bg-gray-800 mx-auto mb-12"></div>
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-tight">What Makes Me Unique</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto">
            <div className="space-y-12">
              <div>
                <div className="w-px h-16 bg-gray-700 mb-8"></div>
                <h3 className="text-3xl font-light mb-6 tracking-wide">The Artistic Vision</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  I don't just build applications—I craft experiences. Every line of code is written with intention,
                  every interface designed with empathy, and every algorithm optimized for elegance.
                </p>
              </div>

              <div>
                <div className="w-px h-16 bg-gray-700 mb-8"></div>
                <h3 className="text-3xl font-light mb-6 tracking-wide">The Entrepreneurial Spirit</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Having founded and scaled a technology company, I understand the delicate balance between innovation
                  and execution, between creative vision and business reality.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <div className="w-px h-16 bg-gray-700 mb-8"></div>
                <h3 className="text-3xl font-light mb-6 tracking-wide">The Research Mindset</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  My academic pursuits keep me at the cutting edge of technology, ensuring that my solutions are not
                  just current, but future-ready.
                </p>
              </div>

              <div>
                <div className="w-px h-16 bg-gray-700 mb-8"></div>
                <h3 className="text-3xl font-light mb-6 tracking-wide">The Global Perspective</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  From Mumbai's startup ecosystem to Boston's innovation hub, I bring a unique cultural and technical
                  perspective that bridges diverse markets and methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-px h-24 bg-gray-800 mx-auto mb-12"></div>
          <p className="text-2xl text-gray-400 mb-16 italic leading-relaxed font-light">
            "In the intersection of art and science, magic happens. That's where you'll find me—creating tomorrow's
            technology with today's passion."
          </p>
          <div className="flex flex-wrap justify-center gap-16">
            <Link href="/research">
              <button className="text-gray-300 border-b border-gray-700 hover:border-gray-400 hover:text-white transition-all duration-500 pb-2 text-lg tracking-wide">
                Explore My Research
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-white border-b border-gray-600 hover:border-white transition-colors duration-500 pb-2 text-lg tracking-wide">
                Let's Collaborate
              </button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

import PageLayout from "@/components/page-layout"

export default function ContactPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-px h-24 bg-gray-800 mx-auto mb-12"></div>
          <h1 className="text-6xl md:text-8xl font-extralight mb-16 leading-tight tracking-tight">
            Let's Create Something Extraordinary
          </h1>
          <p className="text-2xl text-gray-300 mb-24 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to transform ideas into reality? I'm always excited to explore new frontiers where technology meets
            creativity.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-20 text-center mb-24">
            <div>
              <div className="w-px h-16 bg-gray-800 mx-auto mb-8"></div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">Email</h3>
              <p className="text-gray-300 text-lg">parkar.ar@northeastern.edu</p>
            </div>

            <div>
              <div className="w-px h-16 bg-gray-800 mx-auto mb-8"></div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">Phone</h3>
              <p className="text-gray-300 text-lg">(857) 437-8873</p>
            </div>

            <div>
              <div className="w-px h-16 bg-gray-800 mx-auto mb-8"></div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">Location</h3>
              <p className="text-gray-300 text-lg">Boston, Massachusetts</p>
            </div>
          </div>

          <div className="text-center">
            <button className="text-white border-b border-gray-600 hover:border-white transition-colors duration-500 text-xl pb-2 tracking-wide">
              Start the Conversation
            </button>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-px h-24 bg-gray-800 mx-auto mb-12"></div>
          <p className="text-2xl text-gray-300 italic leading-relaxed font-light">
            "The best projects begin with great conversations. Whether you have a fully formed vision or just a spark of
            an idea, I'm here to help transform it into something extraordinary."
          </p>
        </div>
      </section>
    </PageLayout>
  )
}

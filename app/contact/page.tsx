"use client"

import PageLayout from "@/components/page-layout"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export default function ContactPage() {
  const handleStartConversation = () => {
    window.location.href =
      "mailto:parkar.ar@northeastern.edu?subject=Let's Create Something Extraordinary&body=Hi Arslan,%0D%0A%0D%0AI'd love to discuss a potential collaboration or project with you.%0D%0A%0D%0ABest regards,"
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-px h-24 bg-gray-200 dark:bg-gray-800 mx-auto mb-12"></div>
          <h1 className="text-6xl md:text-8xl font-extralight mb-16 leading-tight tracking-tight text-black dark:text-white">
            Let's Create Something Extraordinary
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-24 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to transform ideas into reality? I'm always excited to explore new frontiers where technology meets
            creativity.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center mb-24">
            <div>
              <div className="w-px h-16 bg-gray-200 dark:bg-gray-800 mx-auto mb-8"></div>
              <Mail className="w-8 h-8 mx-auto mb-4 text-gray-600 dark:text-gray-400" />
              <h3 className="text-2xl font-light mb-6 tracking-wide text-black dark:text-white">Email</h3>
              <Link
                href="mailto:parkar.ar@northeastern.edu"
                className="text-gray-600 dark:text-gray-300 text-lg hover:text-black dark:hover:text-white transition-colors underline"
              >
                parkar.ar@northeastern.edu
              </Link>
            </div>

            <div>
              <div className="w-px h-16 bg-gray-200 dark:bg-gray-800 mx-auto mb-8"></div>
              <Phone className="w-8 h-8 mx-auto mb-4 text-gray-600 dark:text-gray-400" />
              <h3 className="text-2xl font-light mb-6 tracking-wide text-black dark:text-white">Phone</h3>
              <Link
                href="tel:+18574378873"
                className="text-gray-600 dark:text-gray-300 text-lg hover:text-black dark:hover:text-white transition-colors"
              >
                (857) 437-8873
              </Link>
            </div>

            <div>
              <div className="w-px h-16 bg-gray-200 dark:bg-gray-800 mx-auto mb-8"></div>
              <MapPin className="w-8 h-8 mx-auto mb-4 text-gray-600 dark:text-gray-400" />
              <h3 className="text-2xl font-light mb-6 tracking-wide text-black dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">Boston, Massachusetts</p>
            </div>

            <div>
              <div className="w-px h-16 bg-gray-200 dark:bg-gray-800 mx-auto mb-8"></div>
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-gray-600 dark:text-gray-400" />
              <h3 className="text-2xl font-light mb-6 tracking-wide text-black dark:text-white">LinkedIn</h3>
              <Link
                href="https://www.linkedin.com/in/arslan-parkar-9615451a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 text-lg hover:text-black dark:hover:text-white transition-colors underline"
              >
                Connect with me
              </Link>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleStartConversation}
              className="text-black dark:text-white border-b border-gray-400 dark:border-gray-600 hover:border-black dark:hover:border-white transition-colors duration-500 text-xl pb-2 tracking-wide cursor-pointer"
            >
              Start the Conversation
            </button>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-px h-24 bg-gray-200 dark:bg-gray-800 mx-auto mb-12"></div>
          <p className="text-2xl text-gray-600 dark:text-gray-300 italic leading-relaxed font-light">
            "The best projects begin with great conversations. Whether you have a fully formed vision or just a spark of
            an idea, I'm here to help transform it into something extraordinary."
          </p>
        </div>
      </section>
    </PageLayout>
  )
}

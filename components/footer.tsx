import Link from "next/link"
import { Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <Link
              href="https://www.linkedin.com/in/arslan-parkar-9615451a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="mailto:parkar.ar@northeastern.edu"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </Link>
            <Link
              href="tel:+18574378873"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Phone size={20} />
              <span>Call</span>
            </Link>
          </div>
          <p className="text-gray-500 dark:text-gray-500 text-center">Innovation awaits. Let's make it happen.</p>
        </div>
      </div>
    </footer>
  )
}

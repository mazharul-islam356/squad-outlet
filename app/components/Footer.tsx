import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                squad outlet
              </h3>
              <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                We don&lsquo;t just build websites—we architect digital empires that dominate markets and transform businesses
                into industry leaders. Join the squad outlet family today.
              </p>
            </div>

            <div className="flex space-x-6">
              <Link
                href="#"
                className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/10"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">📘</span>
              </Link>
              <Link
                href="#"
                className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/10"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">🐦</span>
              </Link>
              <Link
                href="#"
                className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/10"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">📷</span>
              </Link>
              <Link
                href="#"
                className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/10"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">💼</span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-6 text-white">Squad Services</h4>
            <ul className="space-y-4 text-slate-300">
              <li>
                <Link href="#" className="group flex items-center hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-sky-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Custom E-commerce Development
                </Link>
              </li>
              <li>
                <Link href="#" className="group flex items-center hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Mobile-First Design
                </Link>
              </li>
              <li>
                <Link href="#" className="group flex items-center hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Performance Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="group flex items-center hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-sky-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Squad Support 24/7
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-6 text-white">squad outlet HQ</h4>
            <div className="space-y-4 text-slate-300">
              <div className="group flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">📧</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div>squadoutlet@gmail.com</div>
                </div>
              </div>

              <div className="group flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">📞</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div>+8801677182084</div>
                </div>
              </div>

              <div className="group flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">🌍</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Global Squad</div>
                  <div>
                    Aftabnagar, Dhaka, Bangladesh
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-slate-400 text-center lg:text-left">
              <p>&copy; {new Date().getFullYear()} squad outlet. All rights reserved.</p>
              <p className="text-sm mt-1">Transforming visions into digital dominance since 2020</p>
            </div>

            <div className="flex items-center space-x-8">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex justify-center items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <div className="w-4 h-4 bg-sky-500 rounded-full flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <div className="w-4 h-4 bg-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-xs">🛡️</span>
              </div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-xs">⭐</span>
              </div>
              <span>Squad Rated 5-Stars</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

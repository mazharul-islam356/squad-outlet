import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-sky-300/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-sky-400 rounded-full mr-2 animate-pulse"></span>
                #1 E-commerce Development Squad
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white via-sky-100 to-white bg-clip-text text-transparent">
                  Welcome to
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 animate-gradient-x">
                  Squad Outlet
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
                We&lsquo;re the elite squad that transforms your e-commerce vision into market-dominating reality. From
                innovative concepts to record-breaking launches, we deliver digital excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-semibold rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-sky-500/25 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  Join Our Squad
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              <Link
                href="#portfolio"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                View Our Work
                <svg
                  className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  500+
                </div>
                <div className="text-sm text-slate-400 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  99.8%
                </div>
                <div className="text-sm text-slate-400 font-medium">Success Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-sm text-slate-400 font-medium">Squad Support</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 w-32 h-20 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl border border-white/10 p-4 animate-float-slow">
                <div className="w-full h-2 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full mb-2"></div>
                <div className="w-3/4 h-2 bg-white/20 rounded-full"></div>
              </div>

              <div className="absolute -top-4 -right-12 w-28 h-28 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl border border-white/10 p-4 animate-float-reverse">
                <div className="w-full h-full bg-gradient-to-br from-sky-400/30 to-cyan-400/30 rounded-xl flex items-center justify-center">
                  <div className="text-2xl">🚀</div>
                </div>
              </div>

              {/* Main Mockup */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                  <div className="bg-gradient-to-r from-slate-100 to-sky-50 px-6 py-4 flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg px-4 py-1 text-xs text-slate-500">squadoutlet.com</div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold">
                        SB
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="h-3 bg-gradient-to-r from-sky-200 to-cyan-100 rounded-full w-3/4"></div>
                        <div className="h-2 bg-sky-100 rounded-full w-1/2"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-gradient-to-br from-sky-50 to-cyan-100 rounded-2xl p-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-transparent"></div>
                        <div className="relative">
                          <div className="w-8 h-8 bg-sky-500 rounded-lg mb-2"></div>
                          <div className="h-2 bg-sky-200 rounded w-3/4 mb-1"></div>
                          <div className="h-2 bg-sky-100 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="h-32 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent"></div>
                        <div className="relative">
                          <div className="w-8 h-8 bg-cyan-500 rounded-lg mb-2"></div>
                          <div className="h-2 bg-cyan-200 rounded w-3/4 mb-1"></div>
                          <div className="h-2 bg-cyan-100 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="h-3 bg-gradient-to-r from-sky-200 via-cyan-100 to-sky-200 rounded-full animate-pulse"></div>
                      <div className="h-3 bg-gradient-to-r from-cyan-100 to-sky-200 rounded-full w-4/5 animate-pulse delay-100"></div>
                      <div className="h-3 bg-gradient-to-r from-sky-200 to-cyan-100 rounded-full w-3/5 animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Floating Elements */}
              <div className="absolute -bottom-6 left-8 w-24 h-16 bg-gradient-to-br from-blue-500/20 to-sky-500/20 backdrop-blur-sm rounded-2xl border border-white/10 animate-float-slow delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

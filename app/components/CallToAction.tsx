import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-32 bg-gradient-to-br from-sky-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Floating Elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 border border-white/30">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
            Limited Time: 50% Off Squad Consultation
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="block">Ready to Join the</span>
            <span className="block bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent animate-gradient-x">
              squad outlet Elite?
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-sky-100 max-w-4xl mx-auto leading-relaxed font-light">
            Join the elite circle of businesses dominating their markets with squad outlet&apos;s premium e-commerce solutions.
            Your digital empire awaits.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-sky-600 font-bold text-lg rounded-2xl hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-110 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                <span className="mr-3">🚀</span>
                Join squad outlet
                <svg
                  className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            <Link
              href="tel:+1234567890"
              className="group inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              <span className="mr-3">📞</span>
              Call Squad: (555) 123-4567
              <div className="ml-3 w-3 h-3 bg-sky-400 rounded-full animate-pulse"></div>
            </Link>
          </div>

          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">⚡ 48hr</div>
              <div className="text-sky-100">Squad Response</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">💎 Premium</div>
              <div className="text-sky-100">Squad Service</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">🛡️ Guaranteed</div>
              <div className="text-sky-100">Squad Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

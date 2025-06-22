export default function ClientLogos() {
  const clients = [
    { name: "TechCorp", logo: "TC", color: "from-sky-500 to-cyan-500" },
    { name: "Fashion Hub", logo: "FH", color: "from-cyan-500 to-blue-500" },
    { name: "Green Market", logo: "GM", color: "from-blue-500 to-sky-500" },
    { name: "Digital Store", logo: "DS", color: "from-sky-500 to-blue-500" },
    { name: "Luxury Brands", logo: "LB", color: "from-cyan-500 to-sky-500" },
    { name: "Sports Zone", logo: "SZ", color: "from-blue-500 to-cyan-500" },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
          className="w-full h-full"
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-100 to-cyan-50 rounded-full text-sm font-semibold text-slate-600 mb-6 border border-sky-200">
            <span className="w-2 h-2 bg-sky-500 rounded-full mr-2 animate-pulse"></span>
            Trusted Squad Partners
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
              Powering Industry Leaders
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From startups to Fortune 500 companies, squad outlet has built digital empires across every industry
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="group flex items-center justify-center">
              <div className="relative">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${client.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                >
                  {client.logo}
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              $50M+
            </div>
            <div className="text-sm text-slate-500 font-medium">Revenue Generated</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              12M+
            </div>
            <div className="text-sm text-slate-500 font-medium">Users Served</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              45+
            </div>
            <div className="text-sm text-slate-500 font-medium">Countries</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              99.9%
            </div>
            <div className="text-sm text-slate-500 font-medium">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}

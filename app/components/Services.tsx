export default function Services() {
  const services = [
    {
      icon: "🛍️",
      title: "Custom E-commerce Development",
      description: "Tailored online stores built from scratch to match your brand and business requirements perfectly.",
      gradient: "from-sky-500 to-cyan-500",
      bgGradient: "from-sky-50 to-cyan-50",
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description:
        "Responsive designs that provide exceptional shopping experiences across all devices and screen sizes.",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      icon: "💳",
      title: "Payment Integration",
      description: "Secure payment gateways and checkout processes that maximize conversions and customer trust.",
      gradient: "from-blue-500 to-sky-500",
      bgGradient: "from-blue-50 to-sky-50",
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds and optimized user experiences that boost sales and SEO rankings.",
      gradient: "from-sky-500 to-blue-500",
      bgGradient: "from-sky-50 to-blue-50",
    },
    {
      icon: "📊",
      title: "Analytics & Tracking",
      description: "Comprehensive analytics setup to track performance, user behavior, and conversion metrics.",
      gradient: "from-cyan-500 to-sky-500",
      bgGradient: "from-cyan-50 to-sky-50",
    },
    {
      icon: "🛡️",
      title: "Squad Support",
      description: "Continuous support, updates, and maintenance to keep your store running smoothly and securely.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
  ]

  return (
    <section
      id="services"
      className="py-32 bg-gradient-to-br from-slate-50 via-white to-sky-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-full text-sm font-semibold text-slate-700 mb-6">
            <span className="w-2 h-2 bg-sky-500 rounded-full mr-2 animate-pulse"></span>
            Squad Services
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 bg-clip-text text-transparent">
              What Our Squad
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Delivers
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Every service is meticulously crafted by our expert squad to transform your vision into market-dominating
            reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-105 hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3
                  className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:text-slate-800 transition-colors duration-300`}
                >
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                  >
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-white to-sky-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

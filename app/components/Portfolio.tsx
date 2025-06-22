import Image from "next/image"
import noImg from "../../public/no-image.jpg"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Gadget Bodda",
      category: "Gadget E-commerce",
      description: "Premium fashion marketplace with AI-powered recommendations and virtual try-on features.",
      image: "/gadget-bodda.png",
      results: {
        revenue: "+450%",
        conversion: "8.2%",
        users: "2.5M+",
      },
      technologies: ["Next.js", "Shopify Plus", "AI/ML", "AR"],
      gradient: "from-sky-500 to-cyan-500",
      bgGradient: "from-sky-50 to-cyan-50",
    },
    {
      id: 2,
      title: "Morshed Mart",
      category: "Fashion E-commarce",
      description: "High-performance electronics store with advanced product configurator and real-time inventory.",
      image: "/morshed-mart.png",
      results: {
        revenue: "+320%",
        conversion: "6.8%",
        users: "1.8M+",
      },
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      id: 3,
      title: "Cel-Tel",
      category: "Gadget E-commarce",
      description: "Sustainable marketplace connecting organic farmers with conscious consumers worldwide.",
      image: "/cel-tel.png",
      results: {
        revenue: "+280%",
        conversion: "7.5%",
        users: "950K+",
      },
      technologies: ["Vue.js", "Laravel", "Stripe", "AWS"],
      gradient: "from-blue-500 to-sky-500",
      bgGradient: "from-blue-50 to-sky-50",
    },
    {
      id: 4,
      title: "Elite",
      category: "Gadget E-commarce",
      description: "Professional sports equipment store with custom gear builder and athlete partnerships.",
      image: "/elite.png",
      results: {
        revenue: "+380%",
        conversion: "9.1%",
        users: "1.2M+",
      },
      technologies: ["Angular", "Django", "MongoDB", "Docker"],
      gradient: "from-sky-500 to-blue-500",
      bgGradient: "from-sky-50 to-blue-50",
    },
    {
      id: 5,
      title: "Mobile Club",
      category: "Gadget E-commarce",
      description: "Curated marketplace for artisan crafts with storytelling and maker profiles.",
      image: "/mobile-club.png",
      results: {
        revenue: "+220%",
        conversion: "5.9%",
        users: "680K+",
      },
      technologies: ["Svelte", "Express", "MySQL", "Cloudinary"],
      gradient: "from-cyan-500 to-sky-500",
      bgGradient: "from-cyan-50 to-sky-50",
    },
    {
      id: 6,
      title: "Apple Newton",
      category: "Gadget E-commarce",
      description: "Premium home decor store with AR room visualization and interior design consultation.",
      image: "/apolle-newtone.png",
      results: {
        revenue: "+410%",
        conversion: "7.8%",
        users: "1.6M+",
      },
      technologies: ["React Native", "GraphQL", "Prisma", "Three.js"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
  ]

  return (
    <section
      id="portfolio"
      className="py-32 bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-full text-sm font-semibold text-slate-700 mb-6">
            <span className="w-2 h-2 bg-sky-500 rounded-full mr-2 animate-pulse"></span>
            Our Success Stories
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 bg-clip-text text-transparent">
              Squad Outlet
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we&lsquo;ve transformed businesses across industries with our cutting-edge e-commerce solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-105 hover:-translate-y-2"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="relative w-full h-64">
  <Image
    src={project.image || noImg}
    alt={project.title}
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500"
  />
</div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Floating Results Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                  <div
                    className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                  >
                    {project.results.revenue}
                  </div>
                  <div className="text-xs text-slate-600">Revenue Growth</div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}
                  >
                    {project.category}
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
                  {project.description}
                </p>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div
                      className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                    >
                      {project.results.conversion}
                    </div>
                    <div className="text-xs text-slate-500">Conversion</div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                    >
                      {project.results.users}
                    </div>
                    <div className="text-xs text-slate-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">Live</div>
                    <div className="text-xs text-slate-500">Status</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium group-hover:bg-white/80 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent hover:scale-105 transition-transform`}
                  >
                    View Case Study
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-white to-sky-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"></div>
            </div>
          ))}
        </div>

        {/* Portfolio Stats */}
        <div className="bg-gradient-to-r from-sky-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">squad outlet Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">$50M+</div>
              <div className="text-sky-100">Revenue Generated</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">12M+</div>
              <div className="text-sky-100">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">98.5%</div>
              <div className="text-sky-100">Client Retention</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-sky-100">Squad Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

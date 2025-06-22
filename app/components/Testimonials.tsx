export default function Testimonials() {
  const testimonials = [
    {
      name: "Alexandra Chen",
      company: "Luxe Fashion House",
      content:
        "squad outlet transformed our entire business model. Revenue increased 450% in just 8 months. The attention to detail and user experience is absolutely phenomenal. This isn't just a website—it's a conversion machine.",
      rating: 5,
      avatar: "AC",
      gradient: "from-sky-500 to-cyan-500",
      revenue: "+450%",
    },
    {
      name: "Marcus Rodriguez",
      company: "TechGear Pro",
      content:
        "The mobile experience alone doubled our conversion rate. Every interaction feels premium and intentional. Our customers constantly compliment the shopping experience. squad outlet delivered beyond expectations.",
      rating: 5,
      avatar: "MR",
      gradient: "from-cyan-500 to-blue-500",
      revenue: "+320%",
    },
    {
      name: "Sophie Williams",
      company: "Organic Wellness Co.",
      content:
        "From concept to launch, the process was seamless. The analytics dashboard gives us insights we never had before. It's like having a crystal ball for our business. Highly recommend squad outlet!",
      rating: 5,
      avatar: "SW",
      gradient: "from-blue-500 to-sky-500",
      revenue: "+280%",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/20">
            <span className="w-2 h-2 bg-sky-400 rounded-full mr-2 animate-pulse"></span>
            Squad Success Stories
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">What Our</span>
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              Squad Achieves
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real stories from real businesses that achieved extraordinary results with squad outlet
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
              ></div>

              {/* Revenue Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-sky-400 to-cyan-400 text-slate-900 px-4 py-2 rounded-2xl text-sm font-bold shadow-lg">
                {testimonial.revenue}
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="text-sky-400 text-2xl animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-300 mb-8 leading-relaxed text-lg relative">
                  <span className="text-6xl text-white/10 absolute -top-4 -left-2">&quot;</span>
                  <span className="relative z-10">{testimonial.content}</span>
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-slate-400">{testimonial.company}</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">Join hundreds of successful businesses in the squad outlet family</p>
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
            <span className="w-2 h-2 bg-sky-400 rounded-full mr-2 animate-pulse"></span>
            Average ROI: 350% in first year
          </div>
        </div>
      </div>
    </section>
  )
}

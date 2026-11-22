
import HeroImg from "@/assets/images/sagar-transparent.webp";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 md:py-32 text-white bg-[#04081A]"
    >
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">

        {/* Section Heading */}
        <h2 className="relative z-10 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
          GIS Mapper, Geospatial Analyst, Mapping Specialist,
          Spatial Data Expert
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:gap-12 lg:gap-20 items-center">

          {/* Left Side - Transparent Portrait */}
          <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px]">

            {/* Soft cyan background lighting */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96
              rounded-full bg-cyan-500/15 blur-[100px]" />

            {/* Blue ambient lighting */}
            <div className="absolute bottom-10 w-64 h-40
              rounded-full bg-blue-500/10 blur-[90px]" />

            {/* Subtle light beam */}
            <div className="absolute top-0 left-1/2
              -translate-x-1/2 w-48 h-full
              bg-gradient-to-b from-cyan-300/10
              via-blue-500/5 to-transparent blur-2xl" />

            {/* Transparent Portrait */}
            <div className="relative z-10 w-full max-w-[420px]
              h-[400px] sm:h-[500px]
              flex items-end justify-center
              group">

              <img
                src={HeroImg}
                alt="Sagar Swain - GIS Mapping Professional"
                className="
                  relative w-full h-full
                  object-contain object-center
                  drop-shadow-[0_18px_35px_rgba(34,211,238,0.18)]
                  transition-transform duration-700 ease-out
                  group-hover:-translate-y-2 group-hover:scale-[1.02]
                "
              />

            </div>

          </div>

          {/* Right Side - About Content */}
          <div className="relative space-y-5">

            {/* About Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2
              rounded-full bg-cyan-500/10
              border border-cyan-400/20 text-cyan-300 text-sm">

              <i className="fas fa-user-tie" />
              About Me

            </div>

            {/* Introduction */}
            <p className="text-white/90 leading-relaxed text-base md:text-lg">
              Hello! I'm Sagar Swain, a passionate GIS Mapping Professional
              and Senior Data Analyst. I specialize in creating accurate,
              reliable, and high-quality digital maps with strong expertise
              in GIS mapping, geospatial data processing, map annotation,
              and spatial data management.
            </p>

            {/* Professional Expertise */}
            <p className="text-white/80 leading-relaxed text-base">
              Focused on transforming geographic data into meaningful
              mapping solutions through feature classification,
              vectorization, digitization, and georeferencing. Committed
              to maintaining spatial accuracy, data consistency, and
              quality standards while handling large-scale geospatial
              mapping projects.
            </p>

            {/* Personal Statement */}
            <div className="pt-6">
              <blockquote className="border-l-4 border-cyan-400 pl-5">

                <p className="text-white/80 leading-relaxed italic">
                  I'm a lifelong learner and mapping enthusiast, driven
                  by a passion for geospatial technologies, continuous
                  improvement, and delivering accurate mapping solutions
                  that create real-world value.
                </p>

                <div className="mt-6">
                  <cite className="block font-medium text-white not-italic">
                    Sagar Swain
                  </cite>
                </div>

              </blockquote>
            </div>

            {/* GIS Expertise Tags */}
            <div className="flex flex-wrap gap-2 pt-3">

              {[
                "GIS Mapping",
                "Spatial Analysis",
                "Vectorization",
                "Georeferencing",
                "Data Quality",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    px-3 py-2 rounded-lg text-xs sm:text-sm
                    bg-cyan-500/10
                    border border-cyan-400/20
                    text-cyan-200
                    hover:bg-cyan-500/20
                    transition-all duration-300
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

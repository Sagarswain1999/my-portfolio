import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Calendar,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Berhampur University",
      mascot: "https://buodisha.edu.in/wp-content/uploads/2023/08/logo-first.png",
      year: "2017-2020",
      achievements: ["GPA: 8.9"],
      skills: ["Java","C","Python","DBMS", "SQL", "Web Development" ],
      description:
      "Specialized in Computer Science and IT, with expertise in Java programming, Database Management Systems (DBMS), C, Python, Operating Systems, Computer Networking, and expanding knowledge in Machine Learning (ML) and Artificial Intelligence (AI)."
    },
    {
      degree: "Intermediate of Science (I.Sc.)",
      school: "Aska Science College",
      mascot: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABrVBMVEVHcEwLCCAqNE8cCieSZjKveiqyfzC9jTnImEaDZ0bNpk/fuFfpwl6ggVfasFOTcEaNYjKdbjBlTUNyUj51YUmfe0twW0p/a1ONeVuri1Z9WjmYaiuYbjaldS+3lFNzTzMAAC0AABFmCDKTUT9sKh5AABgpEh6AMjNjABdyBB1eBhqJMzKhinOlsrYfQy1XTDB5PSFpIR5IEhKObliWj4qZenCSg3CtqJCtwcinub5ZbnAdSzVmUja0yc/B4ey90NY6TS16hYYqVzY0XT+PlZuudVs/YjdGaFVleXNJWl+ZW0GGUTBdZTlteoeCRyKYZVJ5cWtbcUmCQShvY1+im4mDent6QyuGiFPuoVqYMS99OCU2CB5Qc4wngLGhAC1RAA84W3cudp64tJ7DlYKKGShxBR9MOiaOdFUYZZHo3LWvmnqrkm9hU0Gljm7Fr4nGuZqsoIbk0qm7mWqYgWXcw5UyMzeWgWPBoGwZKDa8qIiXkHwqMDdBPThPR0QhLkhZIR+tmHjQxKjYzK9pJBpsMSC6p4gUJTRjJBWaiGaflH42Nja/rYf26sglMDc1OjqV7+UWAAAAj3RSTlMAFR4e4v///////////////dX////////////o/////xALjP7+mCqqXjNRl//////9oTj/////////////////////////////////////////6v/////////WQ////3H///////9Irf////9wxv//////6f/Bp/9P//+f4/T//9r//8Lp33vjhvzOmv9ngxY0RPIAAAIqSURBVHgBRIyDEcBAAATjvG3132WMnRudupN+uBkv3XQv07ysACJMCCWY8XVdZvGFUiitDLXOh+idUUqn/IdFl2pbgy0iw3nSQvzhVOvxixhm6BBYF7ETNQ1WDEUxtG+Mut+2bXv/Yeo2R8n1FWpvtxtCNwzDCZK6Ya//dvuLNMNyHC8QoiQrqvb6Gf0vcoZpWbbjep7iB0p4PYQHHkRL8tzIjeIkzfIiDwJZAZG2rNIS3cot66xo2rYLQhCRIVZ9NVR9Npbt1OZFcIXN3bzYizUZy7pl5dbWTxGB+GhLnhIbCAAoAL7atm3bth3bWe+WURs7uXLtdn7n9Oz84uLg4niy6GR7ffY5RfjSVX5yIhZXHUxJpG3721uryzJ8kdeKxdUK5WxjtlSlkjYtz6vxzXC5RjupWyk+bNP3G4zGvRa8M5nN6C61aAusVuKQtBIGo2gEFE2lAJhnWC4Fsh3LJM8zgmAlje0i4PLqaqwTuCbOpm7QLNKcXV3dVgh8rXFvFCbiuL8UwF2VzU6MolNUWSTUDN8W7O11Azaun3TgmZM8tjNpSBt23dfvPTyIegG3nSMqU/Css7zfM+k1AT5RjmjYn4aUAOuZLAjiVXBs0uth6E7IQ+1qtIQZnSdCRvHOMcZHOJ0tEguHYwEbN3XBkU58ClYS51b7uZ3l7NbzuN1WfY1vOp3VZMRjP/ZGvHy/bT6Bn+6iVf0E009MVruC+Ic8kUxSdyn49ASvyIVB7KviOQAAAABJRU5ErkJggg==",
      year: "2015-2017",
      achievements: ["GPA: 4.25"],
      skills: ["Math", "Physics","Chemistry", "Information Technology"],
      description:
        "Developed a strong foundation in academic knowledge, analytical thinking, and problem-solving through a comprehensive curriculum, while strengthening communication, logical reasoning, and practical learning skills.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    {/* <span className="text-3xl">{edu.mascot}</span> */}
                    <span className="text-3xl"><img src={edu.mascot} alt="mascot" className="w-8 h-8 object-contain"/></span>

                   
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                {/* <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div> */}

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;


import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import {
  Map,
  MapPin,
  Globe,
  Database,
  Layers,
  LocateFixed,
  PenTool,
  Tags,
  Edit3,
  Crosshair,
  ShieldCheck,
  CheckCircle,
  Cpu,
  Satellite,
  Earth,
  FileCheck,
  Route,
  Building2,
  Waves,
  Network,
} from "lucide-react";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>

    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>

            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    // 1. GIS Mapping & Geospatial Data
    {
      icon: Map,
      title: "GIS Mapping & Geospatial Data",
      color: "text-blue-400",
      skills: [
        {
          name: "GIS Mapping",
          icon: <MapPin className="w-4 h-4 text-blue-400" />,
        },
        {
          name: "Digital Mapping",
          icon: <Globe className="w-4 h-4 text-green-400" />,
        },
        {
          name: "Geospatial Data Processing",
          icon: <Database className="w-4 h-4 text-cyan-400" />,
        },
        {
          name: "Spatial Data Editing",
          icon: <Layers className="w-4 h-4 text-purple-400" />,
        },
        {
          name: "Geographic Feature Extraction",
          icon: <LocateFixed className="w-4 h-4 text-yellow-400" />,
        },
        {
          name: "Map Data Creation",
          icon: <Map className="w-4 h-4 text-blue-400" />,
        },
        {
          name: "Spatial Data Management",
          icon: <Network className="w-4 h-4 text-pink-400" />,
        },
      ],
    },

    // 2. Digitization, Annotation & Quality Assurance
    {
      icon: Layers,
      title: "Digitization & Quality Assurance",
      color: "text-green-400",
      skills: [
        {
          name: "Map Annotation",
          icon: <PenTool className="w-4 h-4 text-green-400" />,
        },
        {
          name: "Feature Labeling",
          icon: <Tags className="w-4 h-4 text-blue-400" />,
        },
        {
          name: "Vectorization",
          icon: <Layers className="w-4 h-4 text-purple-400" />,
        },
        {
          name: "Digitization",
          icon: <Edit3 className="w-4 h-4 text-cyan-400" />,
        },
        {
          name: "Georeferencing",
          icon: <Crosshair className="w-4 h-4 text-yellow-400" />,
        },
        {
          name: "Satellite Image Annotation",
          icon: <Satellite className="w-4 h-4 text-orange-400" />,
        },
        {
          name: "GIS Data Validation",
          icon: <ShieldCheck className="w-4 h-4 text-green-400" />,
        },
        {
          name: "Quality Control (QA/QC)",
          icon: <CheckCircle className="w-4 h-4 text-orange-400" />,
        },
        {
          name: "Spatial Accuracy Checks",
          icon: <FileCheck className="w-4 h-4 text-cyan-400" />,
        },
      ],
    },

    // 3. Mapping Tools & Geographic Features
    {
      icon: Cpu,
      title: "Tools & Geographic Features",
      color: "text-pink-400",
      skills: [
        {
          name: "GIS Software",
          icon: <Globe className="w-4 h-4 text-blue-400" />,
        },
        {
          name: "Mapping Platforms",
          icon: <Map className="w-4 h-4 text-green-400" />,
        },
        {
          name: "Annotation Tools",
          icon: <PenTool className="w-4 h-4 text-purple-400" />,
        },
        {
          name: "Satellite Imagery",
          icon: <Satellite className="w-4 h-4 text-cyan-400" />,
        },
        {
          name: "Remote Sensing Data",
          icon: <Earth className="w-4 h-4 text-yellow-400" />,
        },
        {
          name: "Spatial Databases",
          icon: <Database className="w-4 h-4 text-pink-400" />,
        },
        {
          name: "Road & Highway Mapping",
          icon: <Route className="w-4 h-4 text-blue-400" />,
        },
        {
          name: "Building & Landmark Mapping",
          icon: <Building2 className="w-4 h-4 text-green-400" />,
        },
        {
          name: "Railway & Waterbody Mapping",
          icon: <Waves className="w-4 h-4 text-cyan-400" />,
        },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        {/* GIS Skills Cloud */}
        <div className="flex justify-center items-center">
          <IconCloudDemo />
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;

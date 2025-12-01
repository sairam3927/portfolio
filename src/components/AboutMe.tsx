"use client";

import { motion } from "framer-motion";
import { User, MapPin, Briefcase, CheckCircle2, Code2 } from "lucide-react";

export default function AboutMe() {
  const stats = [
    {
      label: "Location",
      value: "Remote / Worldwide",
      icon: MapPin,
    },
    {
      label: "Experience",
      value: "7+ Years",
      icon: Briefcase,
    },
    {
      label: "Availability",
      value: "Open to work",
      icon: CheckCircle2,
      highlight: true,
    },
    {
      label: "Focus",
      value: "Full Stack Dev",
      icon: Code2,
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7b00ff]/10 border border-[#7b00ff]/20 backdrop-blur-sm mb-8 glow-purple">
              <User className="w-4 h-4 text-[#7b00ff]" />
              <span className="text-sm text-[#7b00ff]">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-[#ff00ff]">Passionate</span> about{" "}
              <span className="block mt-2 text-white">creating digital experiences</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p className="text-base md:text-lg">
                Software Engineer with a Master's in Data Science and 7+ years of experience architecting and operating high-performance, large-scale distributed systems.
              </p>
              <p className="text-sm md:text-base">
                Demonstrated success building resilient, cloud-native infrastructure (AWS, GCP, Azure) and designing scalable microservices using Node.js, Java (Spring Boot) and Python. Proficient in automating complex CI/CD pipelines, enhancing system reliability, and driving operational excellence for developer platforms.
              </p>
            </div>
          </motion.div>

          {/* Right side - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-12"
          >
            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-3xl p-8 space-y-6 shadow-[0_0_40px_rgba(123,0,255,0.15)] hover:shadow-[0_0_60px_rgba(123,0,255,0.25)] transition-shadow duration-500">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between py-4 border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${stat.highlight ? 'bg-green-500/10' : 'bg-white/5'}`}>
                        <Icon className={`w-4 h-4 ${stat.highlight ? 'text-green-400' : 'text-gray-400'}`} />
                      </div>
                      <span className="text-sm text-gray-400">{stat.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {stat.highlight && (
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      )}
                      <span className="text-sm font-medium text-white">{stat.value}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

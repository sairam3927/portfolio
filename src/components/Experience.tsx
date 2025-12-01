"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = [
  {
    year: "Aug 2024 - Present",
    title: "Software Engineer",
    company: "Goldman Sachs",
    description: "Led zero-failure enterprise migration of 500+ critical credentials to HashiCorp Vault. Engineered a Credential Vault solution centralizing 20,000+ secrets. Designed microservices using Java (Spring Boot).",
  },
  {
    year: "Aug 2023 - Aug 2024",
    title: "Software Developer",
    company: "Belk",
    description: "Developed a Salesforce service dashboard with LWC. Architected e-commerce frontend migration to headless Vue.js. Engineered Kafka data pipelines for real-time product data streaming.",
  },
  {
    year: "Sep 2018 - Aug 2021",
    title: "Full Stack Developer",
    company: "Option Matrix InfoTech",
    description: "Architected a full-stack, HIPAA-compliant telemedicine platform. Engineered secure, low-latency video consultation via WebRTC. Developed a full-stack admin portal for staff management.",
  },
  {
    year: "May 2017 - Aug 2018",
    title: "Associate Software Engineer",
    company: "Option Matrix InfoTech",
    description: "Engineered a greenfield cross-platform mobile app launching on iOS/Android. Developed a full-stack admin web portal. Led Stripe API integration for secure payment processing.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066ff]/10 border border-[#0066ff]/20 backdrop-blur-sm mb-8">
            <Briefcase className="w-4 h-4 text-[#0066ff]" />
            <span className="text-sm text-[#0066ff]">Experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My career progression and key achievements
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-px bg-gradient-to-b from-[#00d4ff] via-[#7b00ff] to-[#ff00ff] opacity-30" />

          <div className="space-y-16">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-[#00d4ff] border-2 border-black shadow-[0_0_20px_rgba(0,212,255,0.5)] z-10" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                  <motion.div
                    className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.03]"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-sm text-[#00d4ff] font-medium">{exp.year}</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-1">{exp.title}</h3>
                    <h4 className="text-base text-gray-400 mb-3">{exp.company}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{exp.description}</p>
                  </motion.div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

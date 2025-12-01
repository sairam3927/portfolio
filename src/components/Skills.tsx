"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Smartphone, GitBranch, Layers } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: Code2,
    color: "#00d4ff",
    items: [
      { name: "Python / Java", level: 95 },
      { name: "JavaScript / TypeScript", level: 92 },
      { name: "SQL / C++ / Go", level: 85 },
      { name: "Swift / C#", level: 80 },
    ],
  },
  {
    category: "Frontend",
    icon: Layers,
    color: "#7b00ff",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "Angular / Vue.js", level: 90 },
      { name: "Redux / HTML5 / CSS3", level: 92 },
      { name: "React Native", level: 88 },
    ],
  },
  {
    category: "Backend",
    icon: Database,
    color: "#ff00ff",
    items: [
      { name: "Node.js / Express", level: 93 },
      { name: "Spring Boot", level: 90 },
      { name: "REST APIs / GraphQL", level: 92 },
      { name: "Mulesoft / PHP", level: 85 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "#00d4ff",
    items: [
      { name: "AWS / GCP / Azure", level: 90 },
      { name: "Docker / Kubernetes", level: 88 },
      { name: "Jenkins / CI/CD", level: 90 },
      { name: "Terraform", level: 85 },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    color: "#ff0099",
    items: [
      { name: "MySQL / PostgreSQL", level: 92 },
      { name: "MongoDB / DynamoDB", level: 90 },
      { name: "Cassandra", level: 85 },
    ],
  },
  {
    category: "Tools & Others",
    icon: GitBranch,
    color: "#0066ff",
    items: [
      { name: "Git / GitHub / GitLab", level: 95 },
      { name: "Kafka / Splunk", level: 88 },
      { name: "ML / AI (TensorFlow)", level: 85 },
      { name: "Agile / Jira", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.03]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10"
                  >
                    <Icon className="w-5 h-5" style={{ color: skillGroup.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${skillGroup.color}, ${skillGroup.color}dd)`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
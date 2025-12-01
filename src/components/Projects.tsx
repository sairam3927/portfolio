"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, real-time inventory, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-Time Chat Application",
    description: "Scalable chat app with WebSocket support, file sharing, and end-to-end encryption.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Redis", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Data visualization platform with machine learning insights and predictive analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "Python", "TensorFlow", "FastAPI", "D3.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media Management Tool",
    description: "Multi-platform scheduler with analytics, content calendar, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["Vue.js", "Express", "MySQL", "Redis", "Kubernetes"],
    github: "#",
    demo: "#",
  },
  {
    title: "DevOps Automation Pipeline",
    description: "CI/CD pipeline with automated testing, deployment, and monitoring across cloud providers.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    tags: ["GitHub Actions", "Terraform", "Jenkins", "AWS", "Azure"],
    github: "#",
    demo: "#",
  },
  {
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app with workout tracking, nutrition logging, and progress analytics.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    tags: ["React Native", "Node.js", "GraphQL", "MongoDB", "Firebase"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A selection of recent work showcasing my expertise in full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-[#00d4ff]/30 transition-all duration-500 h-full">
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#0066ff]/10 to-[#7b00ff]/10">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                  
                  {/* Hover overlay with buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 hover:border-[#00d4ff]/50 transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#00d4ff] hover:bg-[#00b4dd] transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5 text-black" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#00d4ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 transition-colors text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
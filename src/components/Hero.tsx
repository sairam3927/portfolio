"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code2, Database, Layout, Globe, Cpu, Layers, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern mesh gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0066ff]/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#7b00ff]/20 via-transparent to-transparent" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/30 via-[#7b00ff]/20 to-[#ff00ff]/30 rounded-full blur-3xl animate-pulse" />

              {/* Portrait image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#00d4ff]/30 shadow-[0_0_60px_rgba(0,212,255,0.4)]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0880a2e1-b52d-4713-a246-06ac849b2372/generated_images/digital-illustration-portrait-of-a-profe-9b41fdf4-20251201064040.jpg"
                  alt="Full Stack Engineer Portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Orbital rings */}
              <div className="absolute inset-0 border-2 border-[#00d4ff]/20 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-[-20px] border-2 border-[#7b00ff]/20 rounded-full animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <div className="text-center lg:text-left">


            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="block text-2xl md:text-3xl lg:text-4xl mb-4 gradient-text font-medium">Hi, I'm Sairam Yerramshetty</span>
              <span className="block text-white">Full Stack</span>
              <span className="block gradient-text">Software Engineer</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building Digital Worlds.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building scalable applications and immersive digital experiences with modern technologies.
            </motion.p>

            {/* Badges Container */}
            <div className="flex flex-col gap-4 mb-8 items-center lg:items-start">
              {/* Skills Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-md"
              >
                <span className="text-sm font-bold text-gray-400 tracking-wider">SKILLS:</span>
                <div className="flex items-center gap-3">
                  <a href="#skills" className="cursor-pointer hover:scale-110 transition-transform"><Code2 className="w-5 h-5 text-[#ff00ff]" /></a>
                  <a href="#skills" className="cursor-pointer hover:scale-110 transition-transform"><Database className="w-5 h-5 text-[#00d4ff]" /></a>
                  <a href="#skills" className="cursor-pointer hover:scale-110 transition-transform"><Layout className="w-5 h-5 text-[#7b00ff]" /></a>
                  <a href="#skills" className="cursor-pointer hover:scale-110 transition-transform"><Globe className="w-5 h-5 text-[#ff00ff]" /></a>
                  <a href="#skills" className="cursor-pointer hover:scale-110 transition-transform"><Cpu className="w-5 h-5 text-[#00d4ff]" /></a>
                  <a href="#skills" className="cursor-pointer hover:scale-110 transition-transform"><Layers className="w-5 h-5 text-[#7b00ff]" /></a>
                  <a href="#skills" className="cursor-pointer hover:scale-110 transition-transform"><Terminal className="w-5 h-5 text-[#ff00ff]" /></a>
                </div>
              </motion.div>

              {/* Current Position Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-md glow-purple"
              >
                <span className="text-sm font-bold text-gray-400 tracking-wider">CURRENT POSITION:</span>
                <span className="text-sm text-white">Open for Opportunities</span>
                <Sparkles className="w-4 h-4 text-[#ff00ff] animate-pulse" />
              </motion.div>
            </div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-[#00d4ff] hover:bg-[#00b4dd] text-black font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-[#00d4ff]/50 px-8 py-6 text-base rounded-xl transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 0.8 }, y: { duration: 2, repeat: Infinity } }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-5 h-5 text-[#00d4ff]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
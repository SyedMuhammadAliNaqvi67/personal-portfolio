"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Copy, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mb.linkers@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-[#2A2A2A] rounded-3xl p-8 mb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-gray-400">• Full-Stack Dev</span>
              <span className="text-emerald-400 text-sm">
                • AVAILABLE FOR WORK
              </span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-2"
            >
              Hi, I &apos; m Syed Muhammad Ali
            </motion.h1>
            <p className="text-gray-400 mb-1">
              Software Engineer from Karachi, PK.
            </p>
            <p className="text-gray-400">Currently a Student at GIAIC.</p>
            <p className="text-gray-400">Becoming an Agentic AI Dev.</p>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 rounded-full border-4 border-[#3A3A3A] overflow-hidden"
          >
            <Image
              src="/placeholder.svg"
              alt="Syed Muhammad Ali"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center"
          >
            <Plus className="w-4 h-4 mr-1" />
            <Link href={"/contact"}>Hire me</Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyEmail}
            className="bg-[#3A3A3A] px-4 py-2 rounded-full text-sm font-medium flex items-center"
          >
            <Copy className="w-4 h-4 mr-1" />
            {copied ? "Copied!" : "Copy Email"}
          </motion.button>
        </div>
      </div>

      <div className="bg-[#2A2A2A] rounded-3xl p-8">
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-400">• Projects</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4 ml-1" />
          </motion.button>
        </div>

        {[
          {
            name: "Ecommerce site",
            description: "Polishing my Full Stack skills",
            logo: "E",
            bgColor: "bg-purple-600",
          },
          {
            name: "Custom design",
            description: "Testing my UI Skills",
            logo: "R",
            bgColor: "bg-blue-600",
          },
        ].map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#3A3A3A] rounded-2xl p-4 mb-4 flex items-center justify-between hover:bg-[#444444] transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div
                className={`w-12 h-12 ${project.bgColor} rounded-full flex items-center justify-center font-bold text-xl`}
              >
                {project.logo}
              </div>
              <div>
                <h3 className="font-medium mb-1">{project.name}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

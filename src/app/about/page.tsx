"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-[#2A2A2A] rounded-3xl p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-gray-400 mb-4">• About</h2>
          <h1 className="text-4xl font-bold mb-6">I t&apos; s Me Ali</h1>
          <p className="text-gray-300 leading-relaxed">
            I &apos; m a MERN Stack developer with over an year of experience,
            currently residing in Karachi, Pakistan. I have a deep passion for
            crafting purposeful interfaces and products. My main goal is to
            bridge the divide between people and technology, transforming
            intricate challenges into meaningful and seamless experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

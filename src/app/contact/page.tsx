"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Plus } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mb.linkers@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#2A2A2A] rounded-3xl p-8"
      >
        <h1 className="text-4xl font-bold mb-4">Let &apos; s work together.</h1>
        <p className="text-gray-300 mb-8">
          <em>Creating purposeful user experiences and visually appealing Products</em>
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center"
          >
            <Plus className="w-4 h-4 mr-1" />
            Hire Me
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
        <div className="bg-[#3A3A3A] rounded-2xl p-4">
          <h2 className="text-gray-400 mb-4">• Socials</h2>
          <div className="flex justify-center space-x-6">
            {["X", "Instagram", "Dribbble", "LinkedIn"].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {platform}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="mt-8 text-gray-400 text-sm">
        © 2024 Portfolio - Software Dev
        <br />
        by Syed Muhammad Ali
      </div>
    </div>
  );
}

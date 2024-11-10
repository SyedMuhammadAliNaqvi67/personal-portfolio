"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, User, Plus } from "lucide-react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // setIsMenuOpen(false);
  }, [pathname]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#1C1C1C] text-white">
        <nav className="fixed top-0 left-0 right-0 z-50 p-4">
          <div className="max-w-3xl mx-auto flex items-center justify-between bg-[#2A2A2A] rounded-full px-4 py-2">
            <div className="flex  justify-center space-x-8">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 ${
                    pathname === "/" ? "bg-[#3A3A3A]" : "hover:bg-[#3A3A3A]"
                  } rounded-full transition-colors`}
                >
                  <Home className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 ${
                    pathname === "/about"
                      ? "bg-[#3A3A3A]"
                      : "hover:bg-[#3A3A3A]"
                  } rounded-full transition-colors`}
                >
                  <User className="w-5 h-5" />
                </motion.button>
              </Link>
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-[#3A3A3A] rounded-full transition-colors"
              >
                {/* <Calendar className="w-5 h-5" /> */}
              {/* </motion.button>  */}
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-[#3A3A3A] rounded-full transition-colors"
              >
                {/* <ShoppingBag className="w-5 h-5" /> */}
              {/* </motion.button> */}
            </div>
            <div className="flex items-center space-x-4">
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-[#3A3A3A] rounded-full transition-colors"
              > */}
              {/* <Sun className="w-5 h-5" /> */}
              {/* </motion.button> */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium flex items-center"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Hire Me
                </motion.button>
              </Link>
            </div>
          </div>
        </nav>
        <main className="pt-20 pb-16">{children}</main>
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 bg-purple-600 text-white px-6 py-3 rounded-full font-medium flex items-center"
        >
          Get Template
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.button> */}
        {/* <div className="fixed bottom-6 right-40 bg-[#2A2A2A] text-white px-4 py-2 rounded-full text-sm flex items-center">
          Made in Framer
        </div> */}
      </body>
    </html>
  );
}

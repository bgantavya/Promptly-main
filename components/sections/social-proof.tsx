"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SocialProof = () => {
  const [mounted, setMounted] = useState(false);
  const [category, setCategory] = useState<"b2b" | "b2c">("b2b");

  useEffect(() => {
    setMounted(true);
  }, []);

  const logos = {
    b2b: [
      { name: "Spotify", src: "/logo/Black_Spotify_logo_with_text.png", alt: "Spotify Logo" },
      { name: "Google", src: "/logo/google.png", alt: "Google Logo" },
      { name: "Spotify", src: "/logo/Black_Spotify_logo_with_text.png", alt: "Spotify Logo" },
      { name: "Google", src: "/logo/google.png", alt: "Google Logo" },
      { name: "Spotify", src: "/logo/Black_Spotify_logo_with_text.png", alt: "Spotify Logo" },
      { name: "Google", src: "/logo/google.png", alt: "Google Logo" },
    ],
    b2c: [
      { name: "Reddit", src: "/logo/reddit.png", alt: "Reddit Logo" },
      { name: "Linktree", src: "/logo/Linktree.png", alt: "Linktree Logo" },
      { name: "Reddit", src: "/logo/reddit.png", alt: "Reddit Logo" },
      { name: "Linktree", src: "/logo/Linktree.png", alt: "Linktree Logo" },
      { name: "Reddit", src: "/logo/reddit.png", alt: "Reddit Logo" },
      { name: "Linktree", src: "/logo/Linktree.png", alt: "Linktree Logo" },
    ]
  };

  const categories = ["b2b", "b2c"] as const;

  if (!mounted) {
    return (
      <div className="mt-14 md:mt-16 h-32 flex items-center justify-center">
        <div className="text-gray-400">Loading partners...</div>
      </div>
    );
  }

  return (
    <>

      {/* Inline clickable categories */}
<p className="text-center m-8 text-lg md:text-xl text-gray-700 font-medium">
  We work with{" "}
  {categories.map((cat, index) => (
    <span
      key={cat}
      onClick={() => setCategory(cat)}
      className={`cursor-pointer font-semibold transition-colors duration-200 ${
        category === cat
          ? "text-pink-600 underline"
          : "text-gray-500 hover:text-pink-500"
      }`}
    >
      {cat.toUpperCase()}
      {index < categories.length - 1 ? ", " : ""}
    </span>
  ))}{" "}
  clients.y
</p>

      {/* Logos */}
      <div className="w-full max-w-3xl animate-in">
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-10"
          >
            {logos[category].map((logo) => (
              <div
                key={logo.name}
                className="grayscale hover:grayscale-0 transition-all duration-300 w-24 h-12 flex items-center justify-center"
              >
                <div className="relative w-24 h-10 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={40}
                    className="max-w-full max-h-full object-contain"
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
                    <p className="mt-5 md:mt-10 text-center text-gray-500 animate-in">
                            Over 20,000 creative teams use Promptly AI to simplify workflow.
                          </p>
    </>
  );
};

export default SocialProof;

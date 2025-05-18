import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SocialProof = () => {
  const [mounted, setMounted] = useState(false);
  const categories = ["b2b", "b2c"] as const;
  const [category, setCategory] = useState<(typeof categories)[number]>("b2b");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Automatically switch category every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCategory((prev) => (prev === "b2b" ? "b2c" : "b2b"));
    }, 2000);
    return () => clearInterval(interval);
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

  if (!mounted) {
    return (
      <div className="mt-14 md:mt-16 h-32 flex items-center justify-center">
        <div className="text-gray-400">Loading partners...</div>
      </div>
    );
  }

  return (
    <>
      {/* Category Display with Animated Underline */}
      <p className="text-center m-8 text-gray-500 relative">
        Over 20,000 creative teams use Promptly AI to simplify workflow. We work with{" "}
        {categories.map((cat, index) => (
          <span
            key={cat}
            className="relative inline-block mx-1"
          >
            <span className={`transition-colors duration-200 ${category === cat ? "text-black" : "hover:text-black cursor-pointer"}`}>
              {cat}
            </span>
            {category === cat && (
              <motion.div
                key={cat}
                layoutId="underline"
                className="absolute bottom-0 left-0 h-[2px] bg-black w-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 5, ease: "linear" }}
                style={{ transformOrigin: "left" }}
              />
            )}
            {index < categories.length - 1 ? "," : ""}{" "}
          </span>
        ))}
        clients.
      </p>

      {/* Logos */}
      <div className="w-full max-w-3xl animate-in">
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 5 }}
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-10"
          >
            {logos[category].map((logo) => (
              <div
                key={logo.name + Math.random()} // make keys unique
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
    </>
  );
};

export default SocialProof;

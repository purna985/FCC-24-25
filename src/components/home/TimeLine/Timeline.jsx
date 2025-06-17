"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Timeline({ data }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 5%", "end 90%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#0a0a0d] font-sans px-4 md:px-10"
    >
      <div className="max-w-5xl mx-auto py-20">
        <h2 className="text-lg md:text-4xl mb-4 text-[#7fa4fa] font-bold">
          Our Journey
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-10">
          From a small group of finance enthusiasts to a thriving community of
          future leaders.
        </p>

        <div ref={ref} className="relative">
          {data.map((item, index) => (
            <div key={index} className="relative flex items-start mb-12">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 mt-3 ml-2 w-4 h-4 rounded-full bg-blue-500 border border-white" />

              {/* Card */}
              <div className="ml-8 w-full">
                <div className="bg-[#1a1a1f] border border-gray-700 rounded-xl p-6 shadow-lg w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">
                    {item.title}
                  </h3>
                  <div className="text-gray-300">{item.content}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Timeline vertical line */}
          <div
            style={{ height: `${height}px` }}
            className="absolute left-4 top-0 w-px bg-gray-700"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute top-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

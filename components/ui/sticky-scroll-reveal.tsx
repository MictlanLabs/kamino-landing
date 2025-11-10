"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  // Resaltado estable: detecta la sección que cruza una línea virtual
  // centrada (ajustada para móvil) usando scroll y resize.
  useEffect(() => {
    const updateActive = () => {
      const isMobile =
        typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
      const centerFactor = isMobile ? 0.33 : 0.45; // más temprano en móvil
      const centerY = window.innerHeight * centerFactor;
      const nodes = sectionRefs.current.filter(Boolean) as HTMLElement[];

      let foundIndex = -1;
      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      nodes.forEach((node, idx) => {
        const rect = node.getBoundingClientRect();
        const inView = rect.top <= centerY && rect.bottom >= centerY;
        if (inView) {
          foundIndex = idx;
        }
        const dist = Math.abs(rect.top + rect.height / 2 - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      const next = foundIndex >= 0 ? foundIndex : bestIdx;
      setActiveCard((prev) => (prev !== next ? next : prev));
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
        ticking = true;
      }
    };

    // inicial
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="relative flex w-full justify-center gap-10 py-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              data-index={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="my-20"
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
              {/* Panel móvil por sección: muestra la card correspondiente debajo del texto */}
              <div
                style={{
                  backgroundImage:
                    linearGradients[index % linearGradients.length],
                }}
                className={cn(
                  "mt-6 w-full overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm lg:hidden",
                  contentClassName,
                )}
              >
                {item.content ?? null}
              </div>
            </div>
          ))}
          <div className="h-64" />
        </div>
      </div>
      <div
        style={{ backgroundImage: backgroundGradient }}
        className={cn(
          "sticky top-24 hidden h-72 w-96 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

"use client";
import React, { useEffect, useRef, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";


export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current && y > 10) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className={cn(
        "fixed right-4 bottom-4 md:top-6 md:right-6 md:bottom-auto z-50",
        className
      )}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -10 }}
      transition={{ duration: 0.25, ease: [0.4, 0.0, 0.2, 1] }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <Menu setActive={setActive} className="px-2 py-1 space-x-2 text-xs sm:text-sm md:text-base">
        <Link
          href="/especificaciones"
          className="cursor-pointer text-black dark:text-white px-2 py-1 rounded-full hover:opacity-90"
        >
          Especificaciones
        </Link>
      </Menu>
    </motion.div>
  );
}
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
      className={cn("fixed top-4 inset-x-0 mx-auto z-50 flex justify-center", className)}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -10 }}
      transition={{ duration: 0.25, ease: [0.4, 0.0, 0.2, 1] }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <Menu setActive={setActive} className="px-3 py-2 space-x-3 text-sm md:text-base">
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
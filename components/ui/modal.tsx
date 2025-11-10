"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidthClass?: string; // tailwind class, e.g. max-w-2xl
};

export const Modal = ({ open, onClose, title, children, maxWidthClass = "max-w-2xl" }: ModalProps) => {
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Dialogo"}
          onKeyDown={handleKeyDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.96, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className={`relative z-10 w-[min(92vw,900px)] ${maxWidthClass} rounded-xl border border-white/10 bg-neutral-900 p-4 text-white shadow-2xl ring-1 ring-white/10`}
          >
            <div className="flex items-center justify-between gap-3">
              {title && (
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              )}
              <button
                onClick={onClose}
                className="rounded-md bg-white/10 px-2 py-1 text-sm text-white ring-1 ring-white/20 hover:bg-white/20"
                aria-label="Cerrar"
              >
                Cerrar
              </button>
            </div>
            <div className="mt-4">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
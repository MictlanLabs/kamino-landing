"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-4 inset-x-0 mx-auto z-50 flex justify-center", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Especificaciones">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#especificaciones">Ver especificaciones</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
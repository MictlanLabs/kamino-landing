"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RoutePerf() {
  const pathname = usePathname();

  useEffect(() => {
    const markName = `nav-start:${pathname}`;
    try {
      const marks = performance.getEntriesByName(markName, "mark");
      if (marks.length > 0) {
        const measureName = `nav:${pathname}`;
        performance.measure(measureName, markName);
        const m = performance.getEntriesByName(measureName, "measure")[0];
        if (m) console.log(`[RoutePerf] ${pathname} navigation: ${m.duration.toFixed(2)}ms`);
      } else {
        const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
        if (nav) console.log(`[RoutePerf] ${pathname} navigation (nav timing): ${nav.domContentLoadedEventEnd - nav.startTime}ms`);
      }
    } catch {}
  }, [pathname]);

  return null;
}
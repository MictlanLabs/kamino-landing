"use client";
import { useEffect } from "react";

function log(name: string, value: number) {
  console.log(`[WebVitals] ${name}: ${value.toFixed(2)}ms`);
}

export default function WebVitals() {
  useEffect(() => {
    try {
      const poLCP = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // @ts-ignore
          log("LCP", entry.startTime);
        }
      });
      poLCP.observe({ type: "largest-contentful-paint", buffered: true } as any);
    } catch {}

    try {
      const poCLS = new PerformanceObserver((list) => {
        let cls = 0;
        for (const entry of list.getEntries()) {
          // @ts-ignore
          if (!entry.hadRecentInput) cls += entry.value || 0;
        }
        log("CLS", cls);
      });
      poCLS.observe({ type: "layout-shift", buffered: true } as any);
    } catch {}

    try {
      const paint = performance.getEntriesByType("paint");
      const fcp = paint.find((e) => e.name === "first-contentful-paint");
      if (fcp) log("FCP", fcp.startTime);
    } catch {}

    try {
      const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      if (nav) log("TTFB", nav.responseStart);
    } catch {}
  }, []);

  return null;
}
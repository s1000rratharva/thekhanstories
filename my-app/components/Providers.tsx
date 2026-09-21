"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { CustomCursor } from "@/components/CustomCursor";

/**
 * Wraps the app with motion preferences (honours prefers-reduced-motion)
 * and mounts the desktop custom cursor.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <CustomCursor />
    </MotionConfig>
  );
}
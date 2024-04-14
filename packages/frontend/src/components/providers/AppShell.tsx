"use client";

import "@ui5/webcomponents-react/dist/Assets.js";
import { AppShellBar } from "@/src/components/providers/AppShellBar";
import { ThemeProvider } from "@ui5/webcomponents-react";

interface AppShellProps {
  children?: React.ReactNode | React.ReactNode[];
}

export function AppShell({ children }: AppShellProps) {
  return (
    <ThemeProvider>
      <AppShellBar />
      <div className="appScrollContainer">{children}</div>
    </ThemeProvider>
  );
}

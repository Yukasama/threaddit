"use client";

import { ThemeProvider } from "@ui5/webcomponents-react";
import { PropsWithChildren } from "react";

export const Provider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

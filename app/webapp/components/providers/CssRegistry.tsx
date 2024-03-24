"use client";

import { useServerInsertedHTML } from "next/navigation";
import { ReactNode, useState } from "react";
import { createGenerateId, JssProvider, SheetsRegistry } from "react-jss";

export function CssRegistry({ children }: { children: ReactNode }) {
  const [registry] = useState(() => new SheetsRegistry());
  const generateId = createGenerateId();

  useServerInsertedHTML(() => {
    return <style id="server-side-styles">{registry.toString()}</style>;
  });

  return (
    <JssProvider registry={registry} generateId={generateId}>
      {children}
    </JssProvider>
  );
}

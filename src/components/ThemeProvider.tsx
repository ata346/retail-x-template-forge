
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      attribute="data-theme" 
      defaultTheme="default" 
      themes={['default', 'sketch', 'colorful', 'dark-neon']}
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}

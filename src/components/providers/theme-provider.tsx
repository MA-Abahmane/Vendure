'use client';

import * as React from 'react';

// We completely bypass next-themes to stop the Next.js 16 / React 19 script errors.
// This passes your storefront components through safely so you can test your backend.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {children}
    </div>
  );
}
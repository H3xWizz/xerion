import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/header";
import {SessionProvider} from "next-auth/react";

export const metadata: Metadata = {
  title: {
    template: 'Xerion | %s',
    default: 'Xerion',
  },
  icons: {
    icon: '/logo-light.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <SessionProvider>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
          >
            <Header/>
            <div className={'h-[calc(100vh - 4rem)] px-12 py-8'}>
              {children}
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

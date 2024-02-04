import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Xerion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
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
      </body>
    </html>
  );
}

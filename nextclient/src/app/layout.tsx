import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe App",
  description: "Compe561 Group Project"
};

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" suppressHydrationWarning>
    <Head>
      <title>Recipe App</title>
    </Head>
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
      </div>
      <TailwindIndicator />
    </ThemeProvider>
    </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@app/shared/components/layout/footer";
import { Header } from "@app/shared/components/layout/header";
import { ThemeProvider } from "@app/shared/theme/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Codecraftr - SaaS Development Services",
  description: "Professional MERN stack development for SaaS startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <ThemeProvider>
          <Header />

          <main>{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

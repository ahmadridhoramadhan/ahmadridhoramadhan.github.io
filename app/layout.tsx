import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const fira_Code = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Ridho Ramadhan | portfolio",
  description: "Ahmad Ridho Ramadhan's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira_Code.className}>
        <div className="flex flex-col min-h-screen bg-color-1 text-color-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

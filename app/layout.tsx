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
      <body className={fira_Code.className + ' flex flex-col h-screen bg-color-1 text-color-4 '}>

        <Header />
        {children}
        <Footer />

        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YMM054QJ1B"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YMM054QJ1B');
</script>
      </body>
    </html>
  );
}

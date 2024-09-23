import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Header from "@/layout/header/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JapanBlog",
  description: "Korean Japanese Japan Exchange Experience Blog [2024 ~ 2025]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`pb-20 ${geistSans.variable} ${geistMono.variable} w-screen h-screen scroll-smooth antialiased text-black`}
      >
        <section className="w-full h-20 flex justify-center items-center">
          <Header />
        </section>
        {children}
      </body>
    </html>
  );
}

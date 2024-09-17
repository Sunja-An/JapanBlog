import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const pretendardJP = localFont({
  src: "./fonts/PretendardJPVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendardJP",
});

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
  title: "Korean Japanese",
  description: "Korean who speak japanese write exchange Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pretendard.variable} ${pretendardJP.variable}`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pretendard.className} ${pretendardJP.className} w-screen h-screen scroll-smooth antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

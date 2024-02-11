import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import RecoilWrapper from "@/component/RecoilWrapper";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RecoilWrapper>
        <body className={inter.className}>
          <div>

          </div>
          {children}
          </body>
      </RecoilWrapper>
    </html>
  );
}

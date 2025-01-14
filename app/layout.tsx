import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Echo",
  description: "blog writing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorWarning: '#1a1a1a' } }}>
      <html lang="en">

        <body className={inter.className}>
          <main className="max-w-10xl mx-auto">

            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

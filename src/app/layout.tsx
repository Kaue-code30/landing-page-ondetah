import type { Metadata } from "next";
import { Poppins } from "next/font/google";
const inter = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });
import "./globals.css";



export const metadata: Metadata = {
  title: "Ondetah",
  description: "Ondetah - Fidelize seu cliente com informações em tempo real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}

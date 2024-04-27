import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Single Stop Care Home Limited",
  description: "Single Stop Care Home Limited platform",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${inter.variable}`}>
        <Navbar />
        <div className="mt-40">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

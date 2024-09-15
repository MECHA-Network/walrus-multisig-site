import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/Footer";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "text-primary flex flex-col")}>
        <Providers>
          <div className="z-1">
            <Navbar />
            <main className="">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

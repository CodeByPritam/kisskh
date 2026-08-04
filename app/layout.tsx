import type { Metadata } from "next";
import "./globals.css";
import '@/styles/app.css';
import MasterHeader from "@/components/site/header";

// Root Metadata
export const metadata: Metadata = {
  title: "KissKH - Watch your favorite movies and tv shows online for free",
  description: "Dynamic desc generate by content.",
  icons: { icon: "/favicon.ico" },
};

// Root Layout
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <MasterHeader/>
        {children}
        <div>Footer</div>
      </body>
    </html>
  );
}
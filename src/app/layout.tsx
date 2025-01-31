import type { Metadata } from "next";
import "./globals.css";
import { Sidebar, Header } from "@/components/layout";

export const metadata: Metadata = {
  title: "Sedboi.ey",
  description: "Your number 1 recreation and sport activities website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className=" h-full lg:h-screen  grid grid-cols-1 lg:grid-cols-[240px,1fr]">
          <Sidebar />
          <main className="bg-mainwhite p-4 md:p-10 h-full overflow-hidden">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/main/Sidebar";
import PageTitle from "@/components/main/PageTitle";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Data Analist Tools",
  description: "Una Pagina que reune aplicaciones utiles del dia a dia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <div className="w-screen h-screen flex flex-row">
          <div className="w-44 md:w-54 h-full bg-green-600">
            <Sidebar/>
          </div>
          <div className="flex-1 h-full bg-green-50">
            <div className="w-full h-full flex flex-col">
              <header className="h-20 w-full p-4 bg-green-600 border-b-2 border-b-gray-200">
                <PageTitle/>
              </header>
              <main className="flex-1 w-full py-10 bg-white overflow-hidden">
                <div className="w-full h-full py-1 px-10 overflow-x-hidden overflow-y-auto">
                    {children}
                </div>
              </main>
              <footer className="h-12 w-full bg-green-100 border-t-2 border-t-gray-200 flex items-center justify-center text-slate-700 text-sm font-bold">
                © {new Date().getFullYear()} - Developed by Rhazem
              </footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

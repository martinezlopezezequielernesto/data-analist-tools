import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/main/Sidebar";
import PageTitle from "@/components/main/PageTitle";
import { SidebarProvider } from "@/context/sidebar-context";
import { ThemeProvider } from "@/context/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "Data Analist Tools",
  description: "Una Pagina que reune aplicaciones utiles del dia a dia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider   attribute="class" defaultTheme="dark" enableSystem={false}>
          <SidebarProvider>
            <div className="w-screen h-screen flex flex-row dark:bg-neutral-900">
              <div className="w-auto h-full bg-green-600">
                <Sidebar />
              </div>

              <div className="flex-1 h-full ">
                <div className="w-full h-full flex flex-col">
                  <header className="h-36 w-full py-8 px-10 border-b-2 border-neutral-300 dark:border-neutral-700">
                    <PageTitle />
                  </header>

                  <main className="flex-1 w-full py-6 lg:py-10 overflow-hidden">
                    <div className="w-full h-full py-1 px-6 md:px-10 lg:px-20 overflow-x-hidden overflow-y-auto">
                      {children}
                    </div>
                  </main>

                  <footer className="h-12 w-full border-t-2 text-neutral-600 dark:text-neutral-400 border-t-neutral-300 dark:border-t-neutral-700 flex items-center justify-center text-sm font-bold">
                    © {new Date().getFullYear()} - Developed by Rhazem
                  </footer>
                </div>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

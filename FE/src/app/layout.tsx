import "./globals.css";
import "@/assets/scss/customize.scss";
import "@/assets/scss/reset.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Man Closet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, "bg-white relative")}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="web-theme"
          >
            {children}
            <ToastContainer position="top-right" autoClose={1000}  />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

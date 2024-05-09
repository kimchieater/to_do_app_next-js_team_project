import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/page";
import Footer from "./components/footer/page";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "Team Angry Cats Todo App",
  description: "This is a single page application for todo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" >
        <body className="h-screen overflow-y-hidden mx-auto w-[1450px]"> 
          <Nav></Nav>
          {children}
          <Footer></Footer>
          </body>
      </html>
    </ClerkProvider>
  );
}

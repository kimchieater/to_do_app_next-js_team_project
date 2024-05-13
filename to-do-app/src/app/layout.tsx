import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav/page";
import Footer from "./components/footer/page";
import { ClerkProvider } from "@clerk/nextjs";

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;


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
  
      <html lang="en" >
        <ClerkProvider>
        <body className="h-screen overflow-y-hidden mx-auto w-[1450px] bg-neutral-300 p-10 ">  
        <div className="p-10 bg-neutral-200 rounded-xl shadow-lg shadow-neutral-700/3 max-h-[800px]">
          <Nav></Nav>
          {children}
          <Footer frontendApi={clerkFrontendApi}></Footer>
          </div>
          </body>
            </ClerkProvider>
      </html>

  );
}

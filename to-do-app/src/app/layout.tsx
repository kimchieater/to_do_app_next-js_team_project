import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav/page";
import Footer from "./components/footer/page";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";



export const metadata: Metadata = {
  title: "Team Angry Cats Todo App",
  description: "This is a single page application for todo app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {userId} = auth();

  return (
      <ClerkProvider>
      <html lang="en" >
        <body className="h-screen overflow-y-hidden mx-auto w-[1450px] bg-neutral-300 p-10 ">  
        <div className="p-10 bg-neutral-200 rounded-xl shadow-lg shadow-neutral-700/3 max-h-[800px]">
          <Nav></Nav>
          {children}
          <Footer></Footer>
          </div>
          </body>
      </html>
      </ClerkProvider>

  );
}

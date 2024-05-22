import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav/page";
import Footer from "./components/footer/page";
import { ClerkProvider } from "@clerk/nextjs";




export const metadata: Metadata = {
  title: " Angry Cats",
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
        <body className="h-screen mx-auto  md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">  
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

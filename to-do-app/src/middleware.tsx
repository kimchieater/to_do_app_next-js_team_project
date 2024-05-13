import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";




export default clerkMiddleware((auth, request)=>{
  return NextResponse.next();
});




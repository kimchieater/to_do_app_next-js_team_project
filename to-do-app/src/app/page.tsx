import { auth } from "@clerk/nextjs/server";
import UserInfo from "./userInfo/page";



export default async function Home() {

  const {userId} = auth();



  return (
    <div className= "mt-5 bg-neutral-100 p-4 rounded-xl shadow-lg shadow-neutral-600/2 min-h-[550px]">
      <UserInfo></UserInfo>
      
    </div>
  );
}

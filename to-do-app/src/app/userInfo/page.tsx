import { auth, currentUser } from "@clerk/nextjs/server"
import Lists from "../lists/page";



const UserInfo = async () =>{
  const {userId} = auth();


  if (!userId) {
    return <div className="flex justify-center items-center min-h-[400px] text-[2rem] text-neutral-400">Please Sign In</div>
  }

  const user = await currentUser();

  

  return (
  <div>
    <h1 className="text-xl text-neutral-400">Welcome <span className="text-neutral-700">{user?.username}</span>, Hope you have a good day.</h1>
    <Lists></Lists>
  </div>
  )
}


export default UserInfo;
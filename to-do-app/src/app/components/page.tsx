'use client'

import Link from "next/link"



const Nav = ()=>{
  return(
    <div className="Nav flex justify-between bg-stone-400 p-10 items-center rounded-xl">
      <div className="flex-[2] justify-end flex text-stone-100 text-[4rem] mr-20">
      <Link href="/">ToDo App</Link>
      </div>
      <div className="flex-[1] flex justify-end">
      <Link className=" bg-stone-950 text-stone-100 p-2 rounded-xl hover:bg-stone-700" href="/signIn" >Sign In</Link>
      </div>
    </div>
  )
}

export default Nav
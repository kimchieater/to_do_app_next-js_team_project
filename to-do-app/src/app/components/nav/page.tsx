'use client'

import Link from "next/link"



const Nav = ()=>{
  return(
    <div className="Nav flex justify-betweenp-10 items-center rounded-xl p-2">
      <div className="flex-[2] justify-end flex text-stone-950 text-[4rem]">
      <Link href="/">Friday 9th <span className="text-neutral-500">May</span></Link>
      </div>
      <div className="flex-[1] flex justify-end gap-5">
      <Link className=" bg-stone-950 text-stone-100 p-2 rounded-xl hover:bg-stone-700" href="/sign-in" >Sign In</Link>
      <Link className=" bg-stone-950 text-stone-100 p-2 rounded-xl hover:bg-stone-700" href="/sign-up" >Sign Up</Link>
      </div>
    </div>
  )
}

export default Nav
'use client'

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link"
import { useState, useLayoutEffect } from "react";




const Nav = ()=>{
// checking for user
  const {isLoaded, isSignedIn, user} = useUser();


  useLayoutEffect(()=>{
    getMonthAndDay()
    console.log("mounted");
  },[])

  //array for the months and day
  let months : string[] = ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"];
  let arrDay : string[] = ["Mon", "Tue", "Wed", "Thu","Fri", "Sat","Sun"];

  //setting useState to store data
  let [month, setMonth] = useState<string>("")
  let [day, setDay] = useState<string|null>(null)
  let [year, setYear] = useState<number|null>(null)
  let [date, setDate] = useState<number|null>(null);
  

  //function to get dates

  function getMonthAndDay(){
    const currentDate = new Date();
    const MonthIndex: number = currentDate.getMonth();
    const dayOfMonth: number = currentDate.getDay();
    const theYear: number = currentDate.getFullYear();
    const dateOfMonth:number = currentDate.getDate();


    setMonth(months[MonthIndex]);
    setDay(arrDay[dayOfMonth-1]);
    setDate(dateOfMonth)
    setYear(theYear);
  }
  


  return(
    <div className="Nav flex justify-betweenp-10 items-center rounded-xl p-2">
      <div className="flex-[2] justify-center flex text-stone-950 text-[2rem]">
      <Link href="/">{day} {date}th {month} <span className="text-neutral-500">{year}</span></Link>
      </div>
      <div className="flex-[1] flex justify-end gap-5">
        {/* Checks if the user is logged in or not. */}
        {
          isSignedIn ? (
          <div className="flex items-center gap-2 bg-neutral-300 rounded-lg p-2 shadow-md shadow-neutral-400/3">
            {user?.username} <UserButton></UserButton>
          </div>
        ) 
        : (
        <div className="flex gap-2">
          <Link className=" bg-neutral-400 text-stone-100 p-2 rounded-xl hover:bg-stone-700 shadow-md shadow-neutral-900/6" href="/sign-in" >Sign In</Link>
          <Link className=" bg-neutral-400 text-stone-100 p-2 rounded-xl hover:bg-stone-700 shadow-xl shadow-neutral-900/3" href="/sign-up" >Sign Up</Link>
        </div>
          )
        }
      
      </div>
    </div>
  )
}

export default Nav
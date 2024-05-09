"use client"

import Image from "next/image";
import Footer from "./components/footer/page";
import {useState} from "react";


export default function Home() {

  let [lists, setLists] = useState(["Study React", "Study NextJs", "Hello World"]);


  return (
    <div className="bg-neutral-100 p-20 rounded-xl shadow-lg shadow-neutral-600/2">
      <div className="flex justify-center mt-10 gap-5 items-center">
        <input type="text" name="to-do" placeholder="Add new task" className="p-2  bg-neutral-200 shadow-lg shadow-neutral-950/3 rounded-md"></input>
        <button type="submit" onSubmit={()=>{
          console.log("hELLO");
        }}className="bg-stone-950 p-2 rounded-xl text-stone-100">+</button>

      </div>
      <section className="">
        <ul className="flex flex-col items-center p-20 gap-2 text-xl text-stone-950">
          {
            lists.map((a, i)=>{
              return(
                <li className="border-b-2">{a}<span className="">🗑️</span></li>
              )
            })
          }
        </ul>
      </section>
      
    </div>
  );
}

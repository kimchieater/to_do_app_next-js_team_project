"use client"

import Image from "next/image";
import Footer from "./components/footer/page";
import {useState} from "react";


export default function Home() {

  let [lists, setLists] = useState(["Study React", "Study NextJs", "Hello World"]);


  return (
    <div className="bg-stone-700 p-20 rounded-xl">
      <section className="">
        <ul className="flex flex-col items-center p-20 gap-10 text-xl list-disc text-stone-100">
          {
            lists.map((a, i)=>{
              return(
                <li>{a}<span className="">🗑️</span></li>
              )
            })
          }
        </ul>
      </section>
      <div className="flex justify-center mt-10 gap-5 items-center">
        <input type="text" name="to-do" className="p-5 border-solid border-2 border-slate-700 rounded-md"></input>
        <button type="submit" onSubmit={()=>{
          console.log("hELLO");
        }}className="bg-stone-950 p-5 rounded-xl text-stone-100">Submit</button>

      </div>
    </div>
  );
}

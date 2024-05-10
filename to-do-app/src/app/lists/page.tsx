"use client"


import {useState} from 'react';

const Lists = ()=>{


  let [lists, setLists] = useState(["Study React", "Study NextJs", "Hello World"]);

  return(
  <div>
  <div className="flex justify-center mt-10 gap-5 items-center">
        <input type="text" name="to-do" placeholder="Add new task" className="p-2 outline-none bg-neutral-200 shadow-lg shadow-neutral-950/3 rounded-md"></input>
        <button type="submit" onClick={()=>{

        }}className="bg-neutral-500 px-5 py-2 rounded-xl text-neutral-100 hover:bg-neutral-700">+</button>
      </div>
      <section className="">
        <ul className="flex flex-col items-center p-20 gap-2 text-xl text-neutral-600">
          {
            lists.map((a, i)=>{
              return(
                <li className="border-b-2">{a}<span className="cursor-pointer">🗑️</span></li>
              )
            })
          }
        </ul>
      </section>
  </div>

  )
  
}

export default Lists

import React,{useState,useEffect,useRef} from "react";
import Todo,{AddTodo,PrintItem} from "./Todo"

export default function App(){
  const nameRef =useRef<any>();

  function TempOnCLick(){
    const name = nameRef.current.value
    AddTodo(name)
  }
  return (
    <>
    PrintItem()
  
   < input ref ={nameRef} type="text"/>
   <button onClick={ TempOnCLick}>Add Todo</button>
    </>
  )
}
    
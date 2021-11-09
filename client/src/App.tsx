
import React,{useState,useEffect,useRef} from "react";
import AddTodo from "./Todo"
import Todo from "./Todo"

export default function App(){
  const nameRef =useRef<any>();

  function TempOnCLick(){
    AddTodo( nameRef.current.value)
  }
  return (
    <>
   < input ref ={nameRef} type="text"/>
   <button onClick={ TempOnCLick}>Add Todo</button>
    </>
  )
}
    
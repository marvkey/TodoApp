import React,{useState,useRef,useEffect} from 'react';

export default class Todo{
    id=0
    name="empty"
    completed =false
}
let TodoList = [];
export function AddTodo(name:any){
    const item = new Todo();
    item.name = name;
    TodoList.push(item)
    console.log("item has been push",name)
};

export function PrintItem(){

    return (
        <>
       <text>{TodoList.length   }</text>
        </>
      )
}

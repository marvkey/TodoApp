import React,{useState,useRef,useEffect} from 'react';

export class Todo{
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

export default function List(){
    return (
        <>
        for (var i = 0; i < TodoList.length; i++) {
            <key={todo.id} toggleTodo={toggleTodo} todo={todo}
        }  
        </>      
     )
}
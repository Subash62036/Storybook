import React from "react";
import Todo from "./Todo";

export default{
    title:'Todo',
    components:Todo
}
export function smTodo(){
    return(
       <div>
           <Todo/>
       </div>
    )
};

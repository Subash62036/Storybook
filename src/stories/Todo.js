
import React, { useState } from 'react'
import Message from '../Message';
function Todo() {
   
    // useState start 
    const [task, setTask] = useState("");
    const [data, listData] = useState([]);
    let[Id,setId]=useState(0);
    // useState end

    //setTaskFun method
    const onChangeHandler = (event) => {
        setTask(event.target.value);
        
    }
    // listDataFun()
    function listDataFun() {
        setId(++Id);
        const newData = { task:task,key:Id };
        listData([...data, newData]);
     
        setTask("");
    }
return (
        <div>
            <div className=" shadow-md p-2 w-1/3 ml-auto mr-auto pb-10 ">
                <h1 className='text-center tracking-widest uppercase font-bold '>Todo App</h1>
          
                <div className="input-fields  flex justify-center mt-3 mb-4">
                    <input type="text" name="task" placeholder="Tasks...." value={task} onChange={onChangeHandler} className='border-2 text-center border-gray-100 ' />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer bg-purple-600 text-white " onClick={listDataFun} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className='todoList'>
                    {data.map((item) => {
                        return (
                            <Message items={item} />
                        )
                    })}
                </div>
            </div>
         </div>
    )
}

export default Todo



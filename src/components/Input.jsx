import { useState } from "react";
const Input = ({taskList,setTaskList}) => {
    const [input,setInput] =useState(" ");

    const handleAddTask = (e) =>{
        e.preventDefault();
        setTaskList([...taskList,input]);
        setInput("");
    }
    return (
        <>
        <form className=" flex flex-row rounded py-1 px-2.5 text-lg">
            <input className="border rounded px-2" type="text" placeholder="Add a task" value={input} onChange={(e) =>setInput(e.target.value)}/>
              <button className="bg-violet-200 text-white py-1 px-4 rounded-lg font-semibold hover:opacity-70"
              onClick={handleAddTask}>Add</button>
        </form>
        </>
    );
}

export default Input;
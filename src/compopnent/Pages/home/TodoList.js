import React, {useState} from 'react';

const TodoList = ({id, idx, name, isCompleted,todos, deleteTodo, updateTodo}) => {
    const userName = name.split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join(" ")
    const initials = name.split(" ").slice(0,2).reduce((acc,el) => acc + el[0].toUpperCase(), "")
    const [open,setOpen] = useState(false)
    const [title, setTitle] = useState(userName)

    const handleChange = (e)=> setTitle(e.target.value)

    const openInput = ()=> {
        setOpen(true)
    }

    const closeInput = (id,title)=> {
        updateTodo(id,title)
        setOpen(false)
    }
    return (
        <li className={`flex items-center justify-between  py-2 px-4 w-full rounded-t-lg ${idx === todos.length -1 ? "" : "border-b"} border-gray-200 dark:border-gray-600`}>
           <div className="flex items-center ">
               <div className="initials mr-2">{initials}</div>
               {
                   open ? <input type="text" className="text-black rounded p-1" onChange={handleChange} defaultValue={title}/> :  <span>{userName}</span>
               }

           </div>


           <div>

               <button
                   onClick={()=> open ? closeInput(id,title) : openInput()}
                   className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                   {
                       open ? <span>&#10004;</span> : <span>&#9998;</span>
                   }
               </button>

               <button
                   onClick={()=> deleteTodo(id)}
                   className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                   &times;
               </button>

           </div>

        </li>
    );
};

export default TodoList;
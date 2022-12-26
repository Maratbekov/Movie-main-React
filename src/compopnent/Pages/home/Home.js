import React, {useState} from 'react';
import Loader from "../../Loader/Loader";
import uniqid from 'uniqid';
import TodoList from "./TodoList";

const Home = () => {
    const [title, setTitle] = useState("")
    const [todos,setTodos] = useState([])
    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const addTodo = () => {
        const newTodo = {
            id: uniqid(),
            name: title,
            isCompleted: false
        }

        setTodos([...todos, newTodo])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(el => el.id !== id))
    }

    const updateTodo = (id,value) => {
    setTodos(todos.map(el => el.id === id ? {...el, name: value} : el))
    }

    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">TODO APP</h1>
                </div>
            </header>
            <main>
                {/*<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">*/}
                {/*    /!* <!-- Replace with your content --> *!/*/}
                {/*    <div className="px-4 py-6 sm:px-0">*/}
                {/*        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">*/}
                {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, eum?*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    /!* <!-- /End replace --> *!/*/}
                {/*</div>*/}


                <div className="flex flex-row flex-wrap justify-center">
                    <div className="basis-1/3">
                        <div className="flex my-6">
                            <input
                                onChange={handleChange}
                                type="text" id="default-search"
                                className="block px-2 mr-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""/>
                            <button
                                onClick={addTodo}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Добавить
                            </button>
                        </div>


                        <ul className=" my-48text-sm font-medium text-gray-900 bg-white rounded-lg border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            {
                                todos.map(({id, name, isCompleted},idx) => (
                                   <TodoList key={id}
                                             id={id}
                                             name={name}
                                             idx={idx}
                                             isCompleted={isCompleted}
                                             todos={todos}
                                             deleteTodo={deleteTodo}
                                             updateTodo={updateTodo}
                                   />
                                ))
                            }
                        </ul>


                    </div>
                </div>


            </main>
            {/*<Loader/>*/}
        </div>
    );
};

export default Home;
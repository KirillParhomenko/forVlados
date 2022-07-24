import React from "react";
import TodosItem from "./TodosItem";

function TodosList(props){
    return(
        <ul className="todos_wrapper">            
            {
            props.todos.map((item, index) => {
                if(props.buttonState(item.isCompleted)){
                    return <TodosItem todosItem={item} key={index} switchTodoComplete={props.switchTodoComplete}/>
                }
                
            })
            }            
        </ul>
    );
}

export default TodosList;
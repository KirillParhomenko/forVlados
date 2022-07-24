import React, {useState} from "react";

function TodosItem({todosItem, switchTodoComplete}){
    const [isChecked, setChecked] = useState(()=>todosItem.isCompleted);
    
    if(isChecked!==todosItem.isCompleted){
        setChecked(!isChecked)
    }

    const toggleLabel = function(event){
        setChecked(!isChecked);
        switchTodoComplete(todosItem.id)
    };

    return(
        <li className="todos_wrapper_item">
            <label className={isChecked ? 'labelCheckedStyle' : 'labelNotCheckedStyle'} onChange={toggleLabel} >
                <input type="checkbox"/>
            </label>
            <p className={isChecked ? 'crossedOutFont' : ''}>{todosItem.title}</p>
        </li>
    );
}

export default TodosItem;
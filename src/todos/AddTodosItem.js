import React from "react";

function AddTodosItem(props){
    return (
        <input onKeyPress={(event)=>{
            if((event.key === 'Enter') && (event.target.value !== '')){
                props.addTodoInTodosList(event.target.value);
                event.target.value = '';
            }
        }} placeholder={'What needs to be done?'} className='addTodosItemInput'/>
    );
}

export default AddTodosItem
import React from 'react';

const Todo = props => {
return(
        <div onClick={() => props.toggleCompleted(props.todoItem.id)}
        className={`todoItem${props.todoItem.completed ? 'Completed' : ''}`}>
            <p>{props.todoItem.task}</p>
        </div>
    )
}
export default Todo;
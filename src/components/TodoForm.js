import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            todoItem:''
        }
    }
    handleChanges = e =>{
       this.setState({
          todoItem: e.target.value
        })
      }

      handleSubmit = e => {
        e.preventDefault();
        if(this.state.todoItem !== ''){
        this.props.addTodo(this.state.todoItem)
        this.setState({
            todoItem: ''
        })
      }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.todoItem} onChange={this.handleChanges} type='text' name='todoItem'/>
                <button type='submit'>Submit</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}
export default TodoForm;
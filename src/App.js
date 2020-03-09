import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
 constructor(){
   super();
   this.state={
     todo: [{
 task:'',
 id: Date.now(),
 completed: false
   }],
// filteredTodo:[{
//   task:'',
//   id: Date.now(),
//   completed: true
// }]
 }
}

addTodo= todoItem => {
this.setState({
  todo:[
    ...this.state.todo,
    {
      task:todoItem,
      id:Date.now(),
      completed: false
     }
    ]
  })
}


// searchList = (e) => {
//   let filteredTodo = this.state.todo;
//   filteredTodo = filteredTodo.filter((todo) => {
//     return todo.search(event.target.value) !== -1;
//   });
//   this.setState({filteredTodo: filteredTodo});
// }


toggleCompleted = todoItemId=>{
  this.setState({
    todo: this.state.todo.map(todoItem => {
      if (todoItem.id === todoItemId){
        return{
          ...todoItem,
          completed: !todoItem.completed
        }
      } else {
      return todoItem
      }
    })
  })
}

clearCompleted = () => {
  this.setState({
    todo: this.state.todo.filter(todoItem =>{
      return !todoItem.completed;
    })
  })
}
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
        <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;

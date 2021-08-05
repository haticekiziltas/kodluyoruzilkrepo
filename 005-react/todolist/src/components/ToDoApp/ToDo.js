import {useState} from 'react'
import { Card} from 'react-bootstrap';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList'
import "./style.css"

function ToDo() {
    const [todos, setTodos] =useState([
      {
        id:1,
				isDone: true,
				text: "Taste JavaScript"
			},
			{
        id:2,
				text: "Code furiously",
				isDone: true
			},
			{
        id:3,
				text: "Give talks",
				isDone: false
			},
			{
        id:4,
				text: "Write tutorials",
				isDone: true
			},
			{
        id:5,
				text: "Have a life!",
				isDone: false
			}
      ]);
    
      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
    
      const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
      };
    
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

    return (
        <div>
            <div className="container">
        <h1 className="text-center mb-4 todoapp">Todo List</h1>
        <ToDoForm addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card key={index}>
              <Card.Body>
                <ToDoList
                
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
            
          ))}
        </div>
      </div>
        </div>
    )
}

export default ToDo

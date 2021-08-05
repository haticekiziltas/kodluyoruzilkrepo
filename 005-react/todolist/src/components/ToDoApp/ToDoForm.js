import {useState} from 'react'
import { Button,Form } from 'react-bootstrap';


function ToDoForm({ addTodo }) {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b> Add Todo</b></Form.Label>
                <Form.Control type ="text" className="input" value= {value}
                onChange ={(e)=> setValue(e.target.value)} placeholder ="Add new todo" />
            </Form.Group>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
             <Button variant="btn btn-info btn-lg border-3 mb-2 mt-2" type="submit">Submit</Button>
             </div>
        </Form>
    )
}

export default ToDoForm

import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Input , InputGroup, InputGroupText} from "reactstrap";
import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const TodoForm =()=>{
    const [todoString, setTodoString] =useState("")
    const {dispatch }= useContext(TodoContext)

    const handleSubmit=e=>{
        e.preventDefault()
        if(todoString==="") {
        return (alert("please fill first a Todo"))
    }
    const todo ={
        todoString,
        id:v4(),
    }
    dispatch({
        type: ADD_TODO ,
        payload: todo
    })
    setTodoString("")
}
    return(
        <Form  onSubmit={handleSubmit}>
            <FormGroup className="mb-0 FormGroup" style={{marginBottom: "0px!important"}}>
            <InputGroup className="d-block">
            <InputGroupText addonType="prepend">
                <Input
                type="text"
                name="todo"
                id="todo"
                placeholder="Your next ToDo"
                value={todoString}
                onChange={(e)=>setTodoString(e.target.value)}
                // TODO: value , onChange

                />
                <Button
                color="warning"
                // TODO: value , onClick
                >
Add
                    </Button> 

                    </InputGroupText>
                    
            </InputGroup>
            </FormGroup>

        </Form>
    )
}
export default TodoForm;
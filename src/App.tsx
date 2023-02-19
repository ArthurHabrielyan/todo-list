import todos from "./data.json";
import { ITodo } from "./interfaces";

import { useState } from "react";
import React from "react";

import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { Container } from "react-bootstrap";

function App() {
  const [todo, setTodo] = useState<ITodo[]>(todos);

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;

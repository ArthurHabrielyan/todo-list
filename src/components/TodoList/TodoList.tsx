import { FC, useState } from "react";
import React from "react";
import { FormTitleChange } from "../FormTitleChange/FormTitleChange";
import { TodoItem } from "../TodoItem/TodoItem";
import { ITodo } from "src/interfaces";

interface TodoListProps {
  todo: ITodo[];
  setTodo: (newTodoList: ITodo[]) => void;
}

const TodoList: FC<TodoListProps> = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState<number | null>(null);
  const [titleValue, setTitleValue] = useState("");

  const onDeleteTodo = (id: number) => () => {
    let newTodoList = [...todo].filter((todoItem) => todoItem.id !== id);
    setTodo(newTodoList);
  };

  const onFinishedTodo = (id: number) => () => {
    let newTodoList = [...todo].filter((todoItem) => {
      if (todoItem.id === id) {
        todoItem.status = !todoItem.status;
      }
      return todoItem;
    });
    setTodo(newTodoList);
  };

  const onEditTitle = (id: number, title: string) => () => {
    setEdit(id);
    setTitleValue(title);
  };

  const onSaveTitle = (id: number) => () => {
    let newTodo = [...todo].map((todo) => {
      if (id === todo.id) {
        todo.title = titleValue;
      }
      return todo;
    });
    setTodo(newTodo);
    setEdit(null);
  };

  return (
    <div>
      {todo.map((todo) => (
        <div key={todo.id}>
          {edit === todo.id ? (
            <FormTitleChange
              setTitleValue={setTitleValue}
              titleValue={titleValue}
              onSaveTitle={onSaveTitle}
              id={todo.id}
            />
          ) : (
            <TodoItem
              item={todo}
              onDeleteTodo={onDeleteTodo}
              onEditTitle={onEditTitle}
              onFinishedTodo={onFinishedTodo}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;

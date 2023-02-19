import React, { MouseEventHandler } from "react";
import { Button } from "react-bootstrap";
import { ITodo } from "../../interfaces";
import s from "./TodoItem.module.css";

interface IProps {
  item: ITodo;
  onDeleteTodo: (id: number) => MouseEventHandler<HTMLButtonElement>;
  onEditTitle: (
    id: number,
    title: string
  ) => MouseEventHandler<HTMLButtonElement>;
  onFinishedTodo: (id: number) => MouseEventHandler<HTMLButtonElement>;
}

export const TodoItem = ({
  item,
  onDeleteTodo,
  onEditTitle,
  onFinishedTodo,
}: IProps) => {
  console.log(item.status);
  return (
    <div className={s.todoItem}>
      <div className={item.status ? s.defaultLine : s.lineThrough}>
        {item.title}
      </div>
      <div>
        <Button className={s.button} onClick={onEditTitle(item.id, item.title)}>
          Редактировать
        </Button>
        <Button
          className={s.button}
          onClick={onFinishedTodo(item.id)}
          variant="info"
        >
          {item.status ? "Закрыть задачу" : "Открыть задачу"}
        </Button>
        <Button onClick={onDeleteTodo(item.id)} variant="danger">
          Удалить
        </Button>
      </div>
    </div>
  );
};

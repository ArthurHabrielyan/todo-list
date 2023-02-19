import { Dispatch, FC, SetStateAction, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "src/interfaces";
import React from "react";
import { Button, Col, FormControl, Row } from "react-bootstrap";
import s from "./AddTodo.module.css";
interface AddTodoProps {
  todo: ITodo[];
  setTodo: Dispatch<SetStateAction<ITodo[]>>;
}

const AddTodo: FC<AddTodoProps> = ({ todo, setTodo }) => {
  const [value, setValue] = useState("");

  const saveTodo = () => {
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        status: true,
        title: value,
      },
    ]);
    setValue("");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Row>
        <Col className={s.addTodoForm}>
          <FormControl
            placeholder="Введите задачу"
            value={value}
            onChange={onChange}
          />
          <Button className={s.addTodoBtn} variant="primary" onClick={saveTodo}>
            Добавить
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddTodo;

import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { Button, FormControl } from "react-bootstrap";
import s from "./FormTitleChange.module.css";

interface IProps {
  setTitleValue: Dispatch<SetStateAction<string>>;
  titleValue: string;
  onSaveTitle: (id: number) => MouseEventHandler<HTMLButtonElement>;
  id: number;
}

export const FormTitleChange = ({
  setTitleValue,
  titleValue,
  onSaveTitle,
  id,
}: IProps) => {
  return (
    <div className={s.todoItem}>
      <FormControl
        className={s.formControl}
        onChange={(e) => setTitleValue(e.target.value)}
        value={titleValue}
      />
      <Button onClick={onSaveTitle(id)}> Сохранить</Button>
    </div>
  );
};

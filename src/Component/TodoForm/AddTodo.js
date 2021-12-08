import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import Button from "../UI/Button";
import Container from "../UI/Container";

const AddTodo = (props) => {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddTodo(text);
    setText("");
  };

  return (
    <>
      <h1 className={styles.header}>Todos List</h1>
      <Container>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="addTodo"
            placeholder="Enter Todo text"
            value={text}
            onChange={changeHandler}
          />
          <Button type="submit">Add Todo</Button>
        </form>
      </Container>
    </>
  );
};
export default AddTodo;

import React from "react";
import Todo from "./Todo";
import Container from "../UI/Container";

const TodoList = (props) => {
  const markTodo = (id) => {
    props.markTodo(id);
  };
  const deleteTodo = (id) => {
    props.deleteTodo(id);
  };

  return (
    <>
      {props.data.length !== 0 ? (
        props.data
          .sort((a, b) => b.timeStamp - a.timeStamp) //sorting data
          .map((todo) => (
            <Container>
              <Todo
                todoItem={todo}
                onMarkTodo={markTodo}
                onDeleteTodo={deleteTodo}
              />
            </Container>
          ))
      ) : (
        <h2 style={{ textAlign: "center" }}>
          No Todo list here. Please write something to add Todo
        </h2>
      )}
    </>
  );
};

export default TodoList;

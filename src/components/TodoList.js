import { Link } from "react-router-dom";

import classes from "./TodoList.module.css";

function TodoList({ todos }) {
  return (
    <ul className={classes.list}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Link to={todo.id.toString()}>{todo.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

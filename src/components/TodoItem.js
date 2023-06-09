import { useNavigate } from "react-router-dom";
import classes from "./TodoItem.module.css";

function TodoItem({ todo }) {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate("..");
  };

  return (
    <article className={classes.item}>
      <p>
        <strong>id:</strong> {todo.id}
      </p>

      <p>
        <strong>title:</strong> {todo.title}
      </p>

      <p>
        <strong>status:</strong> {todo.completed.toString()}
      </p>

      <button onClick={backHandler}>Back</button>
    </article>
  );
}

export default TodoItem;

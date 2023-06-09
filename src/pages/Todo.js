import { useLoaderData } from "react-router-dom";
import TodoItem from "../components/TodoItem";

function TodoPage() {
  const todo = useLoaderData();

  return <TodoItem todo={todo} />;
}

export default TodoPage;

export async function loader({ params }) {
  const todoId = params.id;

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + todoId
  );
  const data = await response.json();

  console.log(data);

  return data;
}

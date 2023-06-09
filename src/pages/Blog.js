import { useLoaderData } from "react-router-dom";
import TodoList from "../components/TodoList";

function BlogPage() {
  const todos = useLoaderData();

  return <TodoList todos={todos} />;
}

export default BlogPage;

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  console.log(data);

  return data;
}

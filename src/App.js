import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import BlogPage, { loader as blogLoader } from "./pages/Blog";
import TodoPage, { loader as todoLoader } from "./pages/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "blog",
        children: [
          {
            index: true,
            element: <BlogPage />,
            loader: blogLoader,
          },
          {
            path: ":id",
            element: <TodoPage />,
            loader: todoLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

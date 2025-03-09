import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// src/App.jsx
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;

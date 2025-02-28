// src/App.jsx

import NewTodo from "./components/NewTodo";

const App = (props) => {

  const addTodo = (newTodo) => {
    console.log(newTodo);
  };

  return (
    <>
      <h1>To-do App</h1>
      <NewTodo addTodo={addTodo} />
    </>
  );
};

export default App;

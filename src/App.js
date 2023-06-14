import "./styles.css";
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";
import DisplayCount from "./components/DisplayCount";
// import Container from "react-bootstrap";

export default function App() {
  // const count = 0;
  return (
    // <Container>
    <div className="container p-3">
      <AddTodo />
      <DisplayCount />
      <DisplayTodos />
    </div>

    // </Container>
  );
}

import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import userAction from "../redux/actions/todo.js";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    title: "",
    description: ""
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userAction.addTodo(todo));
    // console.log(todo);
    setTodo({
      title: "",
      description: ""
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col shadow">
          <div class="card ">
            <div class="card-body">
              <h3>This is some text within a card body.</h3>
              <form>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Title"
                    value={todo.title}
                    onChange={(e) =>
                      setTodo({ ...todo, title: e.target.value })
                    }
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={todo.description}
                    onChange={(e) =>
                      setTodo({ ...todo, description: e.target.value })
                    }
                  ></textarea>
                </div>
                <Container className="text-center">
                  <Button
                    type="submit"
                    variant="primary"
                    onClick={handleSubmit}
                  >
                    Add Todo
                  </Button>
                </Container>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <h1>AddTodo</h1> */}
    </div>
  );
};
export default AddTodo;

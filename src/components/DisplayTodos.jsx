import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const DisplayTodos = () => {
  const todos = useSelector((state) => state);
  console.log(todos);
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body className="shadow">
              <h3>All Todos are Here</h3>
              <ListGroup>
                {todos.todo.map((todo, index) => (
                  <ListGroup.Item>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default DisplayTodos;

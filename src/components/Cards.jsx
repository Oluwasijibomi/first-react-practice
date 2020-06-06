import React from "react";
import books from "../data/romance.json"
import { Card, Button, Col, Container, Row } from "react-bootstrap"

class Cards extends React.Component {
  render() {
    return (
      <Container>
        <Row>
        {books.map((book, index) => {
            return (
              <Col xs={3}>
                    <Card style={{ width: '18rem' }} key={`book-id-${index}`}>
                      <Card.Img variant="top" src={book.img} />
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        
                        <Button variant="primary">Read Now</Button>
                      </Card.Body>
                    </Card>
              </Col>
            ) 
          })}

        </Row>
      </Container>
      
    )
  }
}

export default Cards
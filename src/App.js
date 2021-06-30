import React, { useState } from 'react';
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';


function App() {
  const [category, setCategory] = useState("");
  const [fetchedData, setFetchedData] = useState([])
  const [state, setState] = useState(false)
  const url = 'https://shop-n-sing.herokuapp.com/category?category='
  async function fetchData() {
    const { data } = await axios.get(
      url + category
    )
    setFetchedData(data)
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetchData()
  }

  return (
    <Container className="p-3">
      <Jumbotron>
        <Form onSubmit={handleSubmit}>
          <Form.Label>
            <small>Please enter the category</small></Form.Label>
          <Row>
            <Col><Form.Control
              className="w-100 p-3"
              type="text"
              placeholder="Category"
              value={category}
              onChange={e => setCategory(e.target.value)} /></Col>
          </Row>

        </Form>
      </Jumbotron>
      {
        fetchedData.map(d => <div>
          <br></br>
          <Card className="card text-white bg-secondary mb-3" style={{ max: '20rem' }}>
            <Card.Title className="card-header"><h3>{d.track_name}</h3></Card.Title>
            <Card.Body>
              <Card.Text>
                <h3><i>Artist: </i>{d.artist}</h3>
                <Button variant="btn btn-secondary" onClick={e => setState(s => !s)}>Lyrics</Button>
                {{ state } ? <p>{d.lyrics}</p> : "false"}

              </Card.Text>
            </Card.Body>
          </Card>
        </div>)}
      <code>Tracks for category: {category}</code> <input type="submit" value="Next" onClick={handleSubmit} />
    </Container>

  )
}
export default App;
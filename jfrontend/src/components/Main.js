import React from "react";
import {Container, Button, ButtonGroup, Row, Col} from 'reactstrap';
import Cards from "./Cards";
import Categories from "./Categories";

function Main(props)  {

  const createCard = props.data.map((list, i) => {
    return (
      <Cards list={list} key={i}/>
    )
  })
  
  const createCategories = props.categories.map((type, i) =>  {
    return  (
      <Categories category={type}
                  key={i}
                  selectCategory={props.selectCategory} />
    )
  })
  
    return (
      <main>
          <Container>
            <Row>
              <Col md="3" className="Main-nav">
                <ButtonGroup vertical className="Main-buttons">
                  <h3>Product Categories</h3>
                  {createCategories}
                  <Button id="Nav-buttons" onClick={(event) => props.getData()}>All</Button>
                  <Button id="Nav-buttons" target="_blank" href="https://venmo.com/wjoey13">Payment Info</Button>
                  <Button id="Nav-buttons" onClick={props.login}>Admin</Button>
                </ButtonGroup>
              </Col>
              <Col sm="9">
                <Container id="logo-container">
                  <Row>
                    {createCard}
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
      </main>
    )
  }


export default Main;
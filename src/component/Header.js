import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

 
class Header extends React.Component {

  render() {

    return (
      <div>


<Card style={{ width: '100%' , background: 'lightgray' ,  }}>
  <Card.Body style={{ }}>
    <Card.Title style={{ fontSize:'400%'}}>Gallery of horns</Card.Title>
    <Card.Text>
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
    </Card.Text>
    <Button variant="primary">Learn more </Button>
  </Card.Body>
</Card>

        
      </div>


    )
  }
}

export default Header;

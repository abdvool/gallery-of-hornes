import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {  Modal } from 'react-bootstrap/';

import './HornedBeast.css'


class Hornbeasts extends React.Component {



    constructor(props) {

        super(props);
        this.state = {
            numberofPets: 0
        }
    }

    increasevote = () => {


        this.setState({
            numberofPets: this.state.numberofPets + 1

        })

        this.props.descreaselikes()
    }






    render() {


        return (

            <>
                {/* {/* <img src={this.props.image_url} alt={this.props.keyword} title={this.props.title} width={350} />

                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>

                    <p>{this.state.numberofPets}</p>

                    <button onClick={this.increasevote} >Vote </button> */}

                <div className='Hornbeast'>


                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={this.props.image_url} alt={this.props.keyword} title={this.props.title} width={350} />

                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                            <Card.Text>
                            ❤  {this.state.numberofPets}
                                 
                            </Card.Text>
                            <Button variant="primary" onClick={this.increasevote} >Like </Button>
                        </Card.Body>
                    </Card>


                </div>

                <Modal show={this.props.show} onHide={this.props.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleShow}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </>

        )


    }


}

export default Hornbeasts;


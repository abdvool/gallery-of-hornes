import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
                                {this.state.numberofPets}
                            </Card.Text>
                            <Button variant="primary" onClick={this.increasevote} >Vote </Button>
                        </Card.Body>
                    </Card>


                </div>
            </>

        )


    }


}

export default Hornbeasts;


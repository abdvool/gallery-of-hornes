
import React from 'react';
import Hornedbeasts from './Hornbeasts'
import beastArr from './hornedbeasts.json';
import Button from 'react-bootstrap/Button';
import Hornbeasts from './Hornbeasts';
import SelectedBeast from './SelectedBeast';
import { Modal } from 'react-bootstrap/';
import { Form } from 'react-bootstrap/';
import SortingBeast from './SortingBeast';

class Main extends React.Component {



    constructor(props) {

        super(props);
        this.state = {

            numberOfLikes: 100,

            beastForm: {},
            showModal: false,
            hornNumber: 0,
            sortedBeast:beastArr,

        }
    }

    likesTaken = () => {


        this.setState({

            numberOfLikes: this.state.numberOfLikes - 1


        })
    }



    handleClose = () => {
        this.setState({
            showModal: false,

        })
    }


    handleShow = (title) => {
        let beastNameButton = beastArr.find(elemnt =>

            elemnt.title === title



        )
        console.log('string')
        this.setState({
            beastForm: beastNameButton,
            showModal: true

        })
    }




    render() {

        return (
            <div>



                
                <Form.Select onChange={this.filter} aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="">All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="100">One handred</option>
                </Form.Select>




                <p style={{ marginLeft: '5%', fontSize: '200%' }}>You have 100 likes ❤ give it to your favorite  hornedbeast  {this.state.numberOfLikes}</p>


                {this.state.sortedBeast.map(item => {


                    return (<Hornedbeasts title={item.title} image_url={item.image_url}
                        description={item.description} keyword={item.description} horns={item.horns}

                        descreaselikes={this.likesTaken}


                        handleShow={this.handleShow}


                    />)


                })}


                <SelectedBeast

                    show={this.state.showModal}
                    handleClose={this.handleClose}
                    Data={this.state.beastForm}


                />


                <SortingBeast






                />



            </div>

        )
    }

}

export default Main;
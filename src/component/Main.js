
import React from 'react';
import Hornedbeasts from './Hornbeasts'
import beastArr from './hornedbeasts.json';
import Button from 'react-bootstrap/Button';
import Hornbeasts from './Hornbeasts';


class Main extends React.Component {



    constructor(props) {

        super(props);
        this.state = {

            numberOfLikes: 100,

            beastForm: {},
            showModal: false
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
        let beastNameButton = beastArr.find(elemnt => {

         if (elemnt.title === title){

            return elemnt
         }
        
        

    })
   this.setState({
                beastForm: beastNameButton,
                showModal: true

            })
}




render() {

    return (
        <div>
            <p style={{ marginLeft: '5%', fontSize: '200%' }}>You have 100 likes ❤ give it to your favorite  hornedbeast  {this.state.numberOfLikes}</p>


            {beastArr.map(item => {


                return (<Hornedbeasts title={item.title} image_url={item.image_url}
                    description={item.description} keyword={item.description} horns={item.horns}

                    descreaselikes={this.likesTaken}


                />)

            })}

    

            <Hornbeasts
                show={this.state.showModal}
                handleClose={this.handleClose}
                beastTitle={this.state.beastForm}
                handleShow={this.handleShow}
            />

        </div>

    )
}

}

export default Main;
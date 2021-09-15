import React from 'react';
import { Modal } from 'react-bootstrap/';


class SelectedBeast extends React.Component {




    render() {


        return (

            
             

                    <Modal show={this.props.show} onHide={this.props.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.Data.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><img className="img-fluid" src={this.props.Data.image_url}/>
                        
                        </Modal.Body>
                        <Modal.Footer>
                        {this.props.Data.description}

                        </Modal.Footer>
                    </Modal>

          

        )


    }


}

export default SelectedBeast;


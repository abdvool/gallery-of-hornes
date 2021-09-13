import React from 'react';


class Hornedbeasts extends React.Component {

    render() {


        return (

            <>

                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.keyword} title={this.props.title} />
                <p>{this.props.description}</p>

            </>



        )


    }




}

export default Hornedbeasts;


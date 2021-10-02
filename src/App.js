import React from 'react';
import Header from './component/Header'
import Footer from './component/Footer'
import Main from './component/Main'
import beastArr from './component/hornedbeasts.json';

class App extends React.Component {

constructor(props){
  super(props);
  this.state={
    beastArr: [], 
  }
   
}

  displayFilteredImages = (newHorns) =>{

    this.setState({
      beastArr: newHorns
    })
  }
  render() {

    return (
      <>

        <Header />

        <Main 
        beastArr={this.state.beastArr}
        displayFilteredImages={this.displayFilteredImages }

        
        />

        <Footer />

      </>
    )
  }
}

export default App;

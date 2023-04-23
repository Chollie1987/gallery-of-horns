import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import SelectedBeast from "./SelectedBeast";


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        beasts: {},
        showModal: false,
        selectedBeast: {}

      }
    }

    updateSelectedBeast = (beast) => {
      console.log(beast, 'this is our new beast')
      this.setState({
        selectedBeast: beast
      })
    }  
      displayModal = () => { 
      this.setState({showModal: true})
    }

    removeModal = () => {
      this.setState({showModal: false})
    }

    beasts = (beastObj) => {
      this.setState({beasts: beastObj})
    }
  
    render() {
      return (
      <>

      <Header />
      <Main 
        displayModal={this.displayModal}
        beasts={this.beasts}
        updateSelectedBeast={this.updateSelectedBeast}
        />
     {/* {beastsArr} */}
      {this.state.showModal &&<SelectedBeast 
        showModal={this.state.showModal}
        removeModal={this.removeModal}
        selectedBeast={this.state.selectedBeast}
      />}
      <Footer />
    </>
    )
    // return beastsArr;
  
  }
}

export default App;



import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import SelectedBeast from "./SelectedBeast";
import { Form } from "react-bootstrap";
import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: {},
      showModal: false,
      selectedBeast: {},
      filteredHorns: data

    }
  }

  updateSelectedBeast = (beast) => {
    console.log(beast, 'this is our new beast')
    this.setState({
      selectedBeast: beast
    })
  }
  displayModal = () => {
    this.setState({ showModal: true })
  }

  removeModal = () => {
    this.setState({ showModal: false })
  }

  beasts = (beastObj) => {
    this.setState({ beasts: beastObj })
  }

  filteredHorns = (e) => {
    e.preventDefault();
    let filteredHorns;


  }

}
render(); {
  return (
    <>

      <Header />
      <Form>
        <Form.Group>
          <Form.Select onChange={this.hornChoice}>
            <option>How many horns would you like?</option>
            <option value="1">One horn</option>
            <option value="2">Two horns</option>
            <option value="3">Three or more horns</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <Main
        displayModal={this.displayModal}
        beasts={this.beasts}
        updateSelectedBeast={this.updateSelectedBeast}
        hornsData={this.state.hornsData}
      />
      {/* {beastsArr} */}
      {this.state.showModal && <SelectedBeast
        showModal={this.state.showModal}
        removeModal={this.removeModal}
        selectedBeast={this.state.selectedBeast}
      />}
      <Footer />
    </>
  )
  // return beastsArr;

}


export default App;
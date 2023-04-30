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
      filteredBeasts: data,
      hornSelection: 'all'
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

  handleHornSelection = (e) => {
    e.preventDefault();
    const hornNumber = e.target.value;
    //if I want to refactor I could do a conditional where I check if the value of hornNumber equals all I skipped the filter and just assigned the state of filteredHorns directly to data.
    let filteredHorns = data.filter(beast => {
      if(hornNumber === "all") return true;
      if(beast.horns === Number(hornNumber))return true;
      return false;
    })
    this.setState({ filteredBeasts: filteredHorns, hornSelection: hornNumber })
    //e.target.value will tell us how many horns the user selected. This is a string! We want to check the array for a number.
    //We also want to set state for selectedHorn to be e.target.value the string.


  }


render() {
  return (
    <>

      <Header />
      <Form>
        <Form.Group>
          <Form.Select value={this.state.hornSelection}onChange={this.handleHornSelection}>
            <option value="all">All Horned Beasts</option>
            <option value="1">One horn</option>
            <option value="2">Two horns</option>
            <option value="3">Three</option>
            <option value="100">Too many to count</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <Main
        displayModal={this.displayModal}
        beasts={this.beasts}
        updateSelectedBeast={this.updateSelectedBeast}
        hornsData={this.state.hornsData}
        filteredBeasts={this.state.filteredBeasts}
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
}

export default App;
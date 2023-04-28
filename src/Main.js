import React from "react";
import HornedBeasts from "./HornedBeasts";
import data from "./data.json";
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
    render() {
        console.log(data);
        return (
            <div className="card">
                <h2>HornedBeasts</h2>
                <Row className="justify-content-md-center" lg="5" xs="5" sm="5">
                {data.map((beast) => (
                    <HornedBeasts title={beast.title}
                        description={beast.description}
                        image={beast.image_url}
                        displayModal={this.props.displayModal}
                        beast={beast}
                        updateSelectedBeast={this.props.updateSelectedBeast}
                         /> 
                )) }</Row>
                
            </div>
        )
    }
}
export default Main
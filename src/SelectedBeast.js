import React from "react";
import { Button, Modal } from "react-bootstrap";

class SelectedBeast extends React.Component {
    render() {
        console.log(this.props)
        return (
    
            <Modal show={this.props.showModal} onHide={this.props.removeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Selected Beast</Modal.Title>
                </Modal.Header>
                <Modal.Body><img class="image" src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title}
                 />
                
                 {this.props.selectedBeast.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.removeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast
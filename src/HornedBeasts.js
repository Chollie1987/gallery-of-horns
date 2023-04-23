import React from "react";
import {Card, Button} from 'react-bootstrap';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
    }

    incrementLikes = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    handleModalEvent = () => {
        console.log(this.props.beast)
        this.props.updateSelectedBeast(this.props.beast);
        this.props.displayModal();
    }
    render() {
        // console.log(this.props);
        return (
           
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image} onClick={this.handleModalEvent} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                         </Card.Text>
                         <Card.Text>
                            {this.state.likes}
                         </Card.Text>
                    <Button variant="primary" onClick={this.incrementLikes}>❤</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default HornedBeasts
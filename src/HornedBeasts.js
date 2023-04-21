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
    render() {
        return (
            // <div>
            //   <img src= {this.props.image} alt={this.props.title} height={250}/>
            //   <div>
            //     <p>{this.props.description}</p>
            //     <p>{this.state.likes} likes</p>
            //     <button onClick={this.incrementLikes}>❤</button>
            //   </div>
            //   <h2>{this.props.title}</h2> 
            // </div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image} />
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
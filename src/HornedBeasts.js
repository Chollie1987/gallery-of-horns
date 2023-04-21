import React from "react";

class HornedBeasts extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            likes: 0
        }
    }
    render() {
        return (
            <div>
              <img src= {this.props.image} alt={this.props.title} height={250}/>
              <div>
                <p>{this.props.description}</p>
                <button></button>
              </div>
              <h2>{this.props.title}</h2> 
            </div>
        )
    }
}
export default HornedBeasts
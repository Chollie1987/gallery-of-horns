import React from "react";

class Beasts extends React.Component {
    render() {
        return (
            <>
              <h2>{this.props.title}</h2> 
              <p>{this.props.description}</p>
              <img alt="pic">{this.props.img}</img>
            </>
        )
    }
}
export default Beasts
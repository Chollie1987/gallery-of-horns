import React from "react";
import Beasts from "./Beasts";

class Main extends React.Component {
    render() {
        return (
            <>
                <h1>HornedBeast</h1>
                <Beasts title={'Norwhal'}
                    description={'Giant water mammal'}
                    image={'Norwhal.jpg'} />
                <Beasts title={'Ogre'} 
                    description={'Giant beast with human like characteristics'}
                    image={'Ogre.jpg'}/>
                <Beasts title={'Cyclops'}
                    description={'Huge one eyed monster'}
                    image={'Cyclops.jpg'} />
            </>
        )
    }
}
export default Main
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";



class App extends React.Component {
  render() {

    const beastsArr = [];

    // beastsArr.forEach(HornedBeasts =>
    //   beastsArr.push(
    //     <HornedBeasts
    //       title={HornedBeasts.title}
    //       imgUrl={HornedBeasts.image_url}
    //       description={HornedBeasts.description}
    //     />
    //   ),
      return (
      <>

      <Header />
      <Main />
      {/* {beastsArr} */}
      <div></div>
      <Footer />
    </>
    )
    // return beastsArr;
  
  }
}

export default App;



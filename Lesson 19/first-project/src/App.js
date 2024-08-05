import { Fragment } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const tagH1 =  <h1>First project</h1>;
  const number = 10;

  const testFn = () => {
    return 'testFn'
  }

  const style = {
    color: 'red',
    fontSize: '54px',
  }
  return(
    <Fragment>
        <Header/>
        <Navigation></Navigation>
        <Sidebar/>
        <Footer></Footer>
        <h1 style={style} className="heading">Heading</h1>
        <h2 className="heading-h2">Ther h2</h2>
    </Fragment>
  )

}

export default App;

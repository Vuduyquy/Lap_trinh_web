import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home";
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import SamplePost from "./pages/SamplePost";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return <DefaultLayout>
    {/* <Home/> */}
    {/* <About/> */}
    {/* <SamplePost/> */}
    {/* <Contact/> */}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sample-post/:idPost" element={<SamplePost />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </DefaultLayout>
}

export default App;

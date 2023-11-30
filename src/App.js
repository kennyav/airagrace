import './WEB/css/author.css'

// router
import {
  Routes,
  Route,
} from "react-router-dom";


// component import
import Home from './components/Home.jsx'
import PhotoGallery from './components/PhotoGallery.jsx'
import About from './components/About.jsx'
import Extra from './components/Extra.jsx'
import Nav from './components/Nav.jsx';

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route
          path="/about"
          element={<About />}
        />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </div>
  );
}

export default App;

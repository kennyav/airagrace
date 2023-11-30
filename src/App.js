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
import Nav from './components/Nav.jsx';

// people
import Kenny from './components/People/Kenny.jsx'
import Sarah from './components/People/Sarah.jsx'
import Andrew from './components/People/Andrew.jsx'
import Nique from './components/People/Nique.jsx'
import Nick from './components/People/Nick.jsx'
import Pablo from './components/People/Pablo.jsx'
import Megan from './components/People/Megan.jsx'

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
        <Route path="/kenny" element={<Kenny />} />
        <Route path="/sarah" element={<Sarah />} />
        <Route path="/andrew" element={<Andrew />} />
        <Route path="/nick" element={<Nick />} />
        <Route path="/nique" element={<Nique />} />
        <Route path="/pablo" element={<Pablo />} />
        <Route path="/megan" element={<Megan />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Services from './pages/Services/services';
import Explore from './pages/Explore/explore';
import Contact from './pages/Contact/contact';
import ImageGallery from './pages/Gallery/gallery';
import Apply from './pages/Apply/apply';

import RosenhofPage from './pages/components/rosenhof';
import MeldinePage from './pages/components/meldine';
import AshbroughPage from './pages/components/ashbrough';
import HeatherPage from './pages/components/heather';
import VLUPage from './pages/components/vlu';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/rosenhof" element={<RosenhofPage />} />
          <Route path="/meldine" element={<MeldinePage />} />
          <Route path="/ashbrough" element={<AshbroughPage />} />
          <Route path="/heather" element={<HeatherPage />} />
          <Route path="/vlu" element={<VLUPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

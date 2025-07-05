import {Route, Routes, BrowserRouter, Link} from "react-router-dom";
import Header from './Header';
import Footer from "./Footer";
import Portal from "./Portal";
import Shop from "./Shop";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portal />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

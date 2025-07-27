import {Route, Routes, BrowserRouter, Link} from "react-router-dom";
import Header from './Header';
import Footer from "./Footer";
import Portal from "./Portal";
import Shop from "./Shop";
import AddCart from "./AddCart";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portal />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/addcart" element={<AddCart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

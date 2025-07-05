import {Route, Routes, BrowserRouter, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="rootHeader">Welcome to Shopr</h1>
      <BrowserRouter>
          <Link to="/shop" className="rootLink">Begin Shopping</Link>
          <Link to="/orders" className="rootLink">View all Orders</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;

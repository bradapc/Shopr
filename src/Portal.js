import {BrowserRouter, Link} from "react-router-dom";

const Portal = () => {
  return (
    <div className="Portal">
          <Link to="/shop" className="rootLink">Begin Shopping</Link>
          <Link to="/orders" className="rootLink">View all Orders</Link>
    </div>
  )
}

export default Portal

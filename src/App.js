// Importing styles for the App component
import "./App.css";
// Importing necessary components and functions from the react-router-dom library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importing the Navbar component from the ./components/navbar directory
import { Navbar } from "./components/navbar";
// Importing the Shop component from the ./pages/shop/shop directory
import { Shop } from "./pages/shop/shop";
// Importing the Cart component from the ./pages/cart/cart directory
import { Cart } from "./pages/cart/cart";
// Importing the ShopContextProvider component from the ./context/shop-context directory
import { ShopContextProvider } from "./context/shop-context";

// Defining the functional component App
function App() {
  return (
    <div className="App">
      {/* Wrapping the application in the ShopContextProvider context provider */}
      <ShopContextProvider>
        {/* Creating a router to manage routes */}
        <Router>
          {/* Inserting the Navbar component for displaying the navigation bar */}
          <Navbar />
          {/* Defining routes using the Routes component */}
          <Routes>
            {/* Defining a route for the home page, using the Shop component */}
            <Route path="/" element={<Shop />} />
            {/* Defining a route for the cart page, using the Cart component */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

// Exporting the App component as the main application component
export default App;

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

let router = [
   
   { path:"/", element: <Home/> },
   { path:"/Shop", element: <Shop/> },
   { path:"/product/:productID", element: <ProductDetails/> },
   { path:"/ContactUs", element: <ContactUs/> },
   { path:"/Login", element: <Login/> },
   { path:"*", element:<NotFound/> },
]

export default router
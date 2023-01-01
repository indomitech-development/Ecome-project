
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import {Navbar} from "./component/Navbar/Navbar"
import {Footer} from "./component/Footer/Footer"
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Products } from "./pages/Products/Products";



const Layout =()=>{
  return(
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<Home />,
      },
      {
        path:'/about',
        element:<About />,
      },
      {
        path:'/products/:id',
        element:<Products />,
      },
      {
        path:'/product/:id',
        element:<Product />,
      },
    ]
  },
 
]);
function App() {
  return (
    <div >
         <RouterProvider router={router} />
    </div>
  );
}

export default App;

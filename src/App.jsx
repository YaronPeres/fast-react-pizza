import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./UI/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderACtion,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./UI/AppLayout";
import { action as updateOrderACtion } from "./features/order/UpdateOrder";
import Error from "./UI/Error";
/* if an error occurs in a loader, an action, or simply while rendering a component
we can render an error element instead of these element that corresponds to the actual page
the error element should be rendered in the parent route becuase this errors that happens
here in this nested route they will bubble up to the parent route.*/

const router = createBrowserRouter([
  {
    // to define children/nested routes we define the children property and it accept
    // another array of routes
    // but for this to work we need to tell the applayout to use the child routes
    // basicly to tell the component where to render the child route content
    element: <AppLayout />, // because this element doesn't have a path its called a layout route
    errorElement: <Error />,

    children: [
      // this is the function where we define all routes
      {
        // we do that by passing an array of objects where each object is one route
        path: "/", // we define the path property
        element: <Home />, // define the element by using the component
      },
      {
        path: "/menu", // the loader function to get DATA is in the component file.
        element: <Menu />,
        loader: menuLoader, //second step. this is the way to provide this loader function to the menu route
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderACtion,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderACtion,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

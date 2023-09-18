import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

/* this AppLayout will be used as the parent route of every single other route that
we have in our application, that why the AppLayout element is placed at the top in App.js
and contains the other routes as children routes.
then we use the outlet component to to render whatever is the current nested route
An <Outlet> should be used in parent route elements to render their child route
elements. This allows nested UI to show up when child routes are rendered.
If the parent route matched exactly, it will render a child index
route or nothing if there is no index route.*/
function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;

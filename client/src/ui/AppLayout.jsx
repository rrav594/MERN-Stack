import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen bg-red-200 grid-rows-[auto_1fr_auto] gap-x-4">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll">
        <main className=" max-w-3x mx-auto">
          <h1 className="text-3xl font-bold underline"></h1>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;

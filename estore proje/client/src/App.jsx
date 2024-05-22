import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/ROUTES";
import BasketProvider from "./context/basketContext";
import FavoriteProvider from "./context/wishlistContext";
function App() {
  const router = createBrowserRouter(ROUTES);
  return (
    <>
      <BasketProvider>
        <FavoriteProvider>
          <RouterProvider router={router} />
        </FavoriteProvider>
      </BasketProvider>
    </>
  );
}

export default App;

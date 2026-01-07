import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import Profile from "./pages/Profile.tsx";
import ShoppingList from "./pages/ShoppingList.tsx";
import CheckoutConfirm from "./pages/CheckoutConfirm.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/profile", element: <Profile /> },
      { path: "/shoppinglist", element: <ShoppingList /> },
      { path: "/checkout", element: <CheckoutConfirm /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

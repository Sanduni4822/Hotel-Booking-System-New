
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BaseLayout from "./layouts/BaseLayout"
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import OffersPage from "./pages/OffersPage";
import ContactUsPage from "./pages/ContactUsPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <SignUpPage />,
      },
    ],
  },

  {
    path: "/offers",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <OffersPage />,
      },
    ],
  },

  {
    path: "/contact",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <ContactUsPage />,
      },
    ],
  },
 
]);

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
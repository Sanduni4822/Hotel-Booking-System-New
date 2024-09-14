import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BaseLayout from "./layouts/BaseLayout";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import OffersPage from "./pages/OffersPage";
import ContactUsPage from "./pages/ContactUsPage";
import RoomsPage from "./pages/RoomsPage";
import DeluxeSuitePage from "./pages/DeluxeSuitePage";
import FamilySpecialPage from "./pages/FamilySpecialPage";
import GrandSuitePage from "./pages/GrandSuitePage";
import JuniorSuitePage from "./pages/JuniorSuitePage";
import LuxurySuitePage from "./pages/LuxurySuitePage";
import PremiumRoomPage from "./pages/PremiumRoomPage";
import StandardPage from "./pages/StandardPage";
import ThePenthhousePage from "./pages/ThePenthousePage";

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
    path: "/signup",
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
    path: "/rooms",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <RoomsPage />,
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
  {
    path: "/deluxesuite",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <DeluxeSuitePage />,
      },
    ],
  },
  {
    path: "/familyspecial",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <FamilySpecialPage />,
      },
    ],
  },
  {
    path: "/grandsuite",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <GrandSuitePage />,
      },
    ],
  },
  {
    path: "/juniorsuite",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <JuniorSuitePage />,
      },
    ],
  },
  {
    path: "/luxurysuite",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <LuxurySuitePage />,
      },
    ],
  },
  {
    path: "/premiumroom",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <PremiumRoomPage />,
      },
    ],
  },
  {
    path: "/standard",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <StandardPage />,
      },
    ],
  },
  {
    path: "/penthhouse",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <ThePenthhousePage />,
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

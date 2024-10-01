import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import BaseLayout from "./layouts/BaseLayout";
import LoginPage from "../pages/LoginSignup/LoginPage";
import SignUpPage from "../pages/LoginSignup/SignUpPage";
import OffersPage from "./pages/OffersPage";
import ContactUsPage from "../pages/ContactUs/ContactUsPage";
import RoomsPage from "../pages/Rooms/RoomsPage";
import DeluxeSuitePage from "../pages/Rooms/DeluxeSuitePage";
import FamilySpecialPage from "../pages/Rooms/FamilySpecialPage";
import GrandSuitePage from "../pages/Rooms/GrandSuitePage";
import JuniorSuitePage from "../pages/Rooms/JuniorSuitePage";
import LuxurySuitePage from "../pages/Rooms/LuxurySuitePage";
import PremiumRoomPage from "../pages/Rooms/PremiumRoomPage";
import StandardPage from "../pages/Rooms/StandardPage";
import ThePenthousePage from "../pages/Rooms/ThePenthousePage"; // Fixed path typo
import ReservationSummary from "../components/ReservationSummaryComponent/ReservationSummary"; // Correct import path
import ConfirmBookingProceedPaymentPage from "../pages/Rooms/ConfirmBookingProceedPaymentPage"; // Import Payment Page

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
    path: "/contactus",
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
    path: "/penthouse", // Fixed typo here
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <ThePenthousePage />, // Updated element to match the corrected typo
      },
    ],
  },
  {
    path: "/reservation-summary",
    element: <ReservationSummary reservation={{ /* mock data */ }} />, // Add a placeholder reservation prop for now
  },
  {
    path: "/confirm-booking",
    element: <ConfirmBookingProceedPaymentPage />,
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

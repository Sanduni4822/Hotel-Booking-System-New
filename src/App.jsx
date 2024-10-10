import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BaseLayout from "./layouts/BaseLayout";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import RoomsPage from "./pages/rooms/RoomsPage";
import DeluxeSuitePage from "./pages/Rooms/DeluxeSuitePage";
import FamilySpecialPage from "./pages/Rooms/FamilySpecialPage";
import GrandSuitePage from "./pages/Rooms/GrandSuitePage";
import JuniorSuitePage from "./pages/Rooms/JuniorSuitePage";
import LuxurySuitePage from "./pages/Rooms/LuxurySuitePage";
import PremiumRoomPage from "./pages/Rooms/PremiumRoomPage";
import StandardPage from "./pages/Rooms/StandardPage";
import ThePenthousePage from "./pages/Rooms/ThePenthousePage"; // Fixed path typo
import ReservationSummary from "./components/ReservationSummaryComponent/ReservationSummary"; // Correct import path
import ConfirmBookingProceedPaymentPage from "./pages/Rooms/ConfirmBookingProceedPaymentPage"; // Import Payment Page
import FacilityPage from "./pages/Facility/FacilityPage";
import PoolPage from "./pages/Facility/PoolPage";
import SpaPage from "./pages/Facility/SpaPage";
import TransportPage from "./pages/Facility/TransportPage";
import GymPage from "./pages/Facility/GymPage";
import BarPage from "./pages/Facility/BarPage";
import SummerOfferPage from "./pages/Offers/SummerOfferPage";
import FamilyOfferPage from "./pages/Offers/FamilyOfferPage";
import HoneymoonOfferPage from "./pages/Offers/HoneymoonOfferPage";
import EarlyBirdOfferPage from "./pages/Offers/EarlyBirdOfferPage";
import StayMoreOfferPage from "./pages/Offers/StayMoreOfferPage";
import ActivityPage from "./pages/Activity/ActivityPage";
import BeachActivityPage from "./pages/Activity/BeachActivityPage";
import ExplorationPage from "./pages/Activity/ExplorationPage";
import YogaPage from "./pages/Activity/YogaPage";
import OtherPage from "./pages/Activity/OtherPage";
import LoginPage from "./pages/LoginSignup/LoginPage";
import SignUpPage from "./pages/LoginSignup/SignUpPage";
import OffersPage from "./pages/Offers/OffersPage";
import ReceptionistPage from "./pages/Receptionist/ReceptionistPage"; 
import BookingDetailsPage from "./pages/Receptionist/BookingDetailsPage"; 
import RoomsDetailsPage from "./pages/Receptionist/RoomsDetailsPage";
import AddRoomPage from "./pages/Receptionist/AddRoomPage";
import ReceptionistNavbar from "./components/ReceptionistNavbarComponent/ReceptionistNavbar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element:<HomePage/>,
      },
    ],
  },
  {
    path: "/login",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <LoginPage/>,
      },
    ],
  },
  {
    path: "/signup",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <SignUpPage/>,
      },
    ],
  },
  {
    path: "/offers",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <OffersPage/>,
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
    path: "/facilities",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <FacilityPage />,
      },
    ],
  },
  {
    path: "/activities",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <ActivityPage />,
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
  {
    path: "/pool",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <PoolPage />,
      },
    ],
  },
  {
    path: "/bar",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <BarPage />,
      },
    ],
  },
  {
    path: "/gym",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <GymPage />,
      },
    ],
  },
  {
    path: "/spa",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <SpaPage />,
      },
    ],
  },
  {
    path: "/transport",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <TransportPage />,
      },
    ],
  },
  {
    path: "/beach",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <BeachActivityPage />,
      },
    ],
  },
  {
    path: "/explorations",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <ExplorationPage />,
      },
    ],
  },
  {
    path: "/yoga",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <YogaPage />,
      },
    ],
  },
  {
    path: "/other",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <OtherPage />,
      },
    ],
  },
  {
    path: "/summer",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <SummerOfferPage />,
      },
    ],
  },
  {
    path: "/family",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <FamilyOfferPage />,
      },
    ],
  },
  {
    path: "/honeymoon",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <HoneymoonOfferPage />,
      },
    ],
  },
  {
    path: "/earlybird",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <EarlyBirdOfferPage />,
      },
    ],
  },
  {
    path: "/staymore",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <StayMoreOfferPage />,
      },
    ],
  },
  {
    path: "/receptionist",
    element: <ReceptionistNavbar/>,
    children: [
      {
        index: true,
        element: <ReceptionistPage />,
      },
    ],
  },

  {
    path: "/bookings",
    element: <ReceptionistNavbar />,
    children: [
      {
        index: true,
        element: <BookingDetailsPage />,
      },
    ],
  },

  {
    path: "/Roomsd",
    element: <ReceptionistNavbar />,
    children: [
      {
        index: true,
        element: <RoomsDetailsPage />,
      },
    ],
  },
  {
    path: "/add-room",
    element: <ReceptionistNavbar />,
    children: [
      {
        index: true,
        element: <AddRoomPage />,
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


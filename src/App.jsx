import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/login/login";
// import Home from "./pages/home";
// import BookAppointment from "./pages/BookAppointment";
// import MyAppointment from "./pages/myAppointment";
// import LayoutWrapper from "./components/Layout";
import LayoutWrapper from "./components/Layout";
import { BookAppointment } from "./pages/bookAppointment";
import MyAppointment from "./pages/myAppointment";
import Home from "./pages/home";

function App() {
  const menuItems = [
    { label: "Home", path: "/home" },
    { label: "Book Appointment", path: "/book-appointment" },
    { label: "My Appointment", path: "/my-appointment" },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route
            path="/*"
            element={
              <LayoutWrapper menuItems={menuItems}>
                <Routes>
                  <Route
                    path="/book-appointment"
                    element={<BookAppointment />}
                  />
                  <Route path="/my-appointment" element={<MyAppointment />} />
                  <Route path="/home" element={<Home />} />
                </Routes>
              </LayoutWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

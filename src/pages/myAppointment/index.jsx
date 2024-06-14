import React, { useEffect, useState } from "react";
import Appointments from "./appointment";
import axios from "axios";

function MyAppointment() {
  const [bookedAppointment, setBookedAppointment] = useState([]);

  let userId = localStorage.getItem("userId");

  // console.log(bookedAppointment);

  const getAvailableSlots = () => {
    axios
      .post("http://localhost:3000/appointment/booked", userId)
      .then((response) => {
        setBookedAppointment(response.data.data);
        // setAvailableSlots(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getAvailableSlots();
  }, []);

  const appointments = [
    { date: "2024-06-15", time: "10:00 AM" },
    { date: "2024-06-16", time: "11:00 AM" },
    { date: "2024-06-17", time: "02:00 PM" },
  ];
  return (
    <div className="min-h-screen bg-gray-100 pt-6">
      <Appointments appointments={bookedAppointment} />
    </div>
  );
}

export default MyAppointment;

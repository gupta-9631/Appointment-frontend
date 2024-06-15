import React, { useEffect, useState } from "react";
import Appointments from "./appointment";
import axios from "axios";

function MyAppointment() {
  const [bookedAppointment, setBookedAppointment] = useState([]);

  let user_id = localStorage.getItem("userId");

  const getAvailableSlots = () => {
    axios
      .post("http://localhost:3000/appointment/booked", { user_id })
      .then((response) => {
        setBookedAppointment(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getAvailableSlots();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-6">
      <Appointments
        appointments={bookedAppointment}
        getAvailableSlots={() => getAvailableSlots()}
      />
    </div>
  );
}

export default MyAppointment;

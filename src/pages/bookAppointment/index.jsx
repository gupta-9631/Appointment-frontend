import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export const BookAppointment = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [slotData, setSlotData] = useState({});

  const notify = () => toast("Your appointment booked successfully");

  let userId = localStorage.getItem("userId");
  function extractLocalTimeFromISO(isoString) {
    const date = new Date(isoString);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const time = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return time;
  }

  const getAvailableSlots = () => {
    axios
      .get("http://localhost:3000/appointment/available")
      .then((response) => {
        // setAvailableSlots(response.data.data);
        const result = response.data.data.map((item) => {
          return {
            start_time: item.start_time,
            end_time: item.end_time,
            id: item.id,
            date: item.start_time,
          };
        });
        setAvailableSlots(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const bookAppointment = () => {
    axios
      .post("http://localhost:3000/appointment/create", {
        user_id: userId,
        appointment_date: slotData.date,
        appointment_time: slotData.start_time,
        slot_id: slotData.id,
      })
      .then((response) => {
        console.log(response.data);
        notify();
        setSelectedSlot(null);
        getAvailableSlots();
        // navigate("/home");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getAvailableSlots();
  }, []);

  const handleSlotClick = (index, slot) => {
    setSelectedSlot(index);
    setSlotData(slot);
  };

  const handleButtonClick = () => {
    if (selectedSlot !== null) {
      // alert(
      //   `Slot booked: ${availableSlots[selectedSlot].start_time} - ${availableSlots[selectedSlot].end_time}`
      // );

      bookAppointment();
    }
  };

  return (
    <>
      <div className="max-w-md bg-white p-8 shadow rounded mt-8">
        <h2 className="text-xl font-semibold mb-4">Available Slots</h2>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {availableSlots.map((slot, index) => (
            <div
              key={index}
              className={`p-4 border rounded cursor-pointer ${
                selectedSlot === index ? "bg-green-500" : ""
              }`}
              onClick={() => handleSlotClick(index, slot)}
            >
              Time: {extractLocalTimeFromISO(slot.start_time)} -{" "}
              {extractLocalTimeFromISO(slot.end_time)}
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            className={`p-4 rounded ${
              selectedSlot !== null
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={handleButtonClick}
            disabled={selectedSlot === null}
          >
            Book Now
          </button>
          <Toaster
            toastOptions={{
              duration: 5000,
              style: {
                background: "green",
                color: "#fff",
              },

              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

import React, { useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Appointments = ({ appointments, getAvailableSlots }) => {
  function extractLocalTimeFromISO(isoString) {
    const date = new Date(isoString);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    const time = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return time;
  }

  const notify = () =>
    toast.success("You have successfully cancelled your appointment");

  const cancelBookedAppointment = async (payload) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/appointment/cancel",
        {
          appointment_id: payload?.appointment_id,
          slot_id: payload?.slot_id,
        }
      );
      // notify();
      if (response) {
        getAvailableSlots();
      } else {
        console.error("Failed to cancel appointment:", response.data.message);
      }
    } catch (error) {
      console.error("Error cancelling appointment:", error);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="text-xl font-bold text-center">My Appointments</div>

      {appointments.length === 0 ? (
        <div className="text-center">You don't have upcoming appointment</div>
      ) : (
        <div className="grid grid col-4">
          {" "}
          {appointments?.map((appointment, index) => (
            <div key={index} className="space-y-2">
              <div className="text-gray-700">
                <span className="font-medium">Date:</span>{" "}
                {appointment?.appointment_date.split("T")[0]}
              </div>
              <div className="text-gray-700">
                <span className="font-medium">Time:</span>{" "}
                {extractLocalTimeFromISO(appointment?.appointment_time)}
              </div>
              <button
                onClick={() => cancelBookedAppointment(appointment)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
              >
                Cancel
              </button>
              <Toaster
                toastOptions={{
                  duration: 2000,
                  style: {
                    background: "green",
                    color: "#fff",
                  },

                  success: {
                    duration: 2000,
                    theme: {
                      primary: "green",
                      secondary: "black",
                    },
                  },
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;

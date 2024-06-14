import React from "react";

const Appointments = ({ appointments }) => {
  //   const [appointments, setAppointments] = useState();
  function extractLocalTimeFromISO(isoString) {
    const date = new Date(isoString);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const time = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return time;
  }

  const handleCancel = (index) => {
    // const updatedAppointments = appointments.filter((_, i) => i !== index);
    // setAppointments(updatedAppointments);
    console.log(index);
  };
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="text-xl font-bold text-center">My Appointments</div>
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
            onClick={() => handleCancel(appointment)}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
};

export default Appointments;

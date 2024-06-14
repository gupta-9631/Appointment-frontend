import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/signin", formData)
      .then((response) => {
        console.log("Response:", response.data);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("name", response.data.name);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-gray-200 flex h-[100vh]">
      <div className="flex-1 bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center"></div>

      <div className="flex flex-1 justify-center items-center">
        <div className="w-[400px] min-h-[450px] bg-white rounded-xl shadow-md">
          <div className="text-center pt-8">
            <h2 className="font-bold text-3xl text-gray-800">Login</h2>
          </div>
          <form
            action=""
            className="flex flex-col gap-4 p-6"
            onSubmit={submitForm}
          >
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => {
                  const { value } = e.target;
                  setFormData({ ...formData, email: value });
                }}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter a password"
                className="p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={(e) => {
                  const { value } = e.target;
                  setFormData({ ...formData, password: value });
                }}
              />
            </div>
            <input
              type="submit"
              className="bg-blue-500 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-600"
              value="SignIn"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

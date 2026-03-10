import React, { useState } from "react";

function Login_Page() {
  const [role, setRole] = useState("Student");
  const roles = ["Student", "Mentor", "Admin"];

  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");

  function storeLoginData() {
    localStorage.setItem("uid", uid);
    localStorage.setItem("password", password);
    localStorage.setItem("role", role);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    storeLoginData();

    if (role === "Student") {
      const success = loginDetails(uid, password);
      if (!success) {
        alert("Login failed. Please try again");
        return;
      }
      navigate("/student");
    }
  };

  return (
    <>
      <div className="bg-black h-screen w-screen flex items-center justify-center">
        <div className="border border-gray-300 p-8 rounded-lg shadow-lg w-96">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
            <p className="text-gray-600">signIn in to your account</p>
          </div>

          <div>
            <p className="text-gray-300 font-normal">Role</p>
            <div>
              {roles.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setRole(item)}
                  className={`font-normal border border-gray-300 py-1 px-4 rounded m-2 ${
                    role === item
                      ? "bg-white text-black"
                      : "bg-black text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handlesubmit} className="text-white font-bold ">
            <div className="mt-5">
              <label htmlFor="number">University UID</label>
              <input
                type="text"
                id="number"
                placeholder="Enter University UID"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                className="border-gray-300 w-full rounded-md border-2 p-1 placeholder:font-normal"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-300 w-full rounded-md border-2 p-1 placeholder:font-normal"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black font-normal w-full py-1 px-4 mt-8 rounded"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login_Page;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("Login response:", res.data); // 👀 debug

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role); // optional, if you want role check
        navigate("/dashboard");
      } else {
        alert("No token received from server");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input
        type="email"
        placeholder="Admin Email"
        className="border p-2 mb-3 w-72"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-3 w-72"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        disabled={loading}
        className="bg-green-600 text-white px-6 py-2 rounded w-72"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
};

export default Login;

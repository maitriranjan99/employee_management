import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(
      "admin",
      JSON.stringify({
        username: "maitriranjan",
        password: "maitri123",
      })
    );
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    const name = JSON.parse(localStorage.getItem("admin"));
    if (username === "" || password === "") {
      setError("please provide your username and password");
      setUsername("");
      setPassword("");
    } else if (name.username !== username || name.password !== password) {
      setError("Please provide valid username and password");
      setUsername("");
      setPassword("");
    } else {
      setError("");
      setUsername("");
      setPassword("");
      navigate("/dashboard");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-lg bg-gray-400 rounded-xl p-10">
        <h2 className="text-center text-white text-lg">Login Please</h2>
        <form className="mt-8" onSubmit={submit}>
          <div className="space-y-5 flex flex-col items-center">
            <div>
              <label className="mx-5">username:</label>
              <input
                placeholder="Enter your username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="mx-5">password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-red-500">{error ? error : ""}</div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-1 text-lg"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

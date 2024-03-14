import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { username } = JSON.parse(localStorage.getItem("admin"));
  return (
    <div className="bg-black text-white h-20 flex justify-around items-center">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/employeelist">EmployeeList</Link>
      </div>
      <div>
        Username: <span className="text-blue-600">{username}</span>
      </div>
      <div>
        <button className="text-red-500" onClick={() => navigate("/")}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

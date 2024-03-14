import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getEmployee();
  }, []);
  const getEmployee = async () => {
    await axios
      .get("http://localhost:8080/getemployee")
      .then(({ data }) => setEmployees(data.data))
      .catch((err) => console.log(err));
  };
  const deleteEmployee = async (id) => {
    await axios
      .delete(`http://localhost:8080/delete/${id}`)
      .then(() => {
        console.log("deleted successful");
        getEmployee();
      })
      .catch(() => console.log("deleted unsuccessfull"));
  };
  return (
    <div>
      <Navbar />
      <div className=" bg-slate-700 text-white flex justify-around items-center h-10">
        <div>
          <Link to="/createemployee">CreateEmployee</Link>
        </div>
        <div>
          TotalEmployee: <span>{employees.length}</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="text-black"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="bg-yellow-300">List Of Employee</div>
      <div className="flex justify-center">
        <table className="border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600">id</th>
              <th className="border border-slate-600">image</th>
              <th className="border border-slate-600">Name</th>
              <th className="border border-slate-600">Email</th>
              <th className="border border-slate-600">PhoneNo</th>
              <th className="border border-slate-600">Desgination</th>
              <th className="border border-slate-600">Gender</th>
              <th className="border border-slate-600">Course</th>
              <th className="border border-slate-600">CreateDate</th>
              <th className="border border-slate-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees
              .filter((employee) =>
                search.toLowerCase() === ""
                  ? employee
                  : employee.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((employee) => (
                <tr key={employee._id}>
                  <td className="border border-slate-600">{employee._id}</td>
                  <td className="border border-slate-600">
                    <img src={employee.image} alt="profile" />
                  </td>
                  <td className="border border-slate-600">{employee.name}</td>
                  <td className="border border-slate-600">{employee.email}</td>
                  <td className="border border-slate-600">
                    {employee.phoneNo}
                  </td>
                  <td className="border border-slate-600">
                    {employee.designation}
                  </td>
                  <td className="border border-slate-600">{employee.gender}</td>
                  <td className="border border-slate-600">{employee.course}</td>
                  <td className="border border-slate-600">
                    {employee.createdAt}
                  </td>
                  <td className="border border-slate-600">
                    <button className="bg-green-600 text-white mx-2 px-2 rounded-lg">
                      <Link to={`/editemployee/${employee._id}`}>Edit</Link>
                    </button>
                    <button
                      className="bg-red-500 px-2 rounded-lg text-white"
                      onClick={() => deleteEmployee(employee._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;

import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const EmployeeEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [file, setFile] = useState(null);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/get/${params.id}`)
      .then(({ data }) => data.data)
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setPhoneNo(data.phoneNo);
        setDesignation(data.designation);
        setCourse(data.course);
        setGender(data.gender);
      })
      .catch(() => console.log("error"));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bg-yellow-300">EditEmployee</div>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-lg bg-gray-400 rounded-xl p-10 flex justify-center">
          <form className="space-y-5 flex flex-col">
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Mob:</label>
              <input
                type="text"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div>
              <label>Designation:</label>
              <select onChange={(e) => setDesignation(e.target.value)}>
                <option value="HR" selected={designation === "HR"}>
                  HR
                </option>
                <option value="Manager" selected={designation === "Manager"}>
                  Manager
                </option>
                <option value="Sales" selected={designation === "Sales"}>
                  sales
                </option>
              </select>
            </div>
            <div>
              <label>Gender:</label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </div>
            <div>
              <label> Course:</label>
              <input
                type="checkbox"
                value="MCA"
                checked={course === "MCA"}
                onChange={(e) => setCourse(e.target.value)}
              />
              MCA
              <input
                type="checkbox"
                value="BCA"
                checked={course === "BCA"}
                onChange={(e) => setCourse(e.target.value)}
              />
              BCA
              <input
                type="checkbox"
                value="BSC"
                checked={course === "BSC"}
                onChange={(e) => setCourse(e.target.value)}
              />
              BSC
            </div>
            <div>
              <label>Img:</label>
              <input type="file" />
            </div>
            <button className="w-2/3 bg-blue-500">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeEdit;

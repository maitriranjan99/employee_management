import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const create = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("phoneNo", phoneNo);
    formdata.append("designation", designation);
    formdata.append("gender", gender);
    formdata.append("course", course);
    formdata.append("image", file);
    await axios
      .post("http://localhost:8080/register", formdata)
      .then(() => {
        setError("");
        navigate("/employeelist");
      })
      .catch(() => setError("All fields are required"));
  };
  return (
    <div>
      <Navbar />
      <div className="bg-yellow-300">createEmployee</div>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-lg bg-gray-400 rounded-xl p-10 flex justify-center">
          <form className="space-y-5 flex flex-col" onSubmit={create}>
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
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
            <div>
              <label>Gender:</label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </div>
            <div>
              <label> Course:</label>
              <input
                type="checkbox"
                value="MCA"
                onChange={(e) => setCourse(e.target.value)}
              />
              MCA
              <input
                type="checkbox"
                value="BCA"
                onChange={(e) => setCourse(e.target.value)}
              />
              BCA
              <input
                type="checkbox"
                value="BSC"
                onChange={(e) => setCourse(e.target.value)}
              />
              BSC
            </div>
            <div>
              <label>Img:</label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <div className="text-red-500">{error}</div>
            <button className="w-2/3 bg-blue-500">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;

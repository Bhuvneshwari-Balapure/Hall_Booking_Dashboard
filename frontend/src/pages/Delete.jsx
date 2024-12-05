import { useState, useEffect } from "react";
import axios from "axios";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Delete = () => {
  const [mydata, setmydata] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    let api = "http://localhost:8000/users/Booking/DeleteDisplay";
    axios.get(api).then((res) => {
      setmydata(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  // Delete data
  const myDel = (id) => {
    let api = "http://localhost:8000/users/Booking/deleteRecord";
    axios.post(api, { myid: id }).then((res) => {
      console.log(res.data);
      alert("Data Deleted");
      loadData(); // Reload data after delete
    });
  };

  // Edit Data
  const myEdit = (id) => {
    // Navigate to the edit page with the provided id
    navigate(`/dashboard/edit/${id}`);
  };

  const ans = mydata.map((key) => {
    return (
      <tr key={key._id}>
        <td>{key.name}</td>
        <td>{key.number}</td>
        <td>{key.Address}</td>
        <td>{key.DateOfBook}</td>
        <td>{key.timeForBook}</td>
        <td>{key.purpose}</td>
        <td>{key.payment}</td>
        <td>
          <p onClick={() => { myDel(key._id) }}>
            <RiDeleteBin5Line style={{ cursor: "pointer" }} color="red" size="25px" />
          </p>
        </td>
        <td>
          <p onClick={() => { myEdit(key._id) }}>
            <BiEdit style={{ cursor: "pointer" }} color="purple" size="25px" />
          </p>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="displayPage">
        <h3>Delete Records</h3>
        <div className="formDisplayData">
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Customer Number</th>
                <th>Customer Address</th>
                <th>Date of Booking</th>
                <th>Time For Booking <small>(In Hours)</small></th>
                <th>Event</th>
                <th>Payment</th>
                <th>Delete Record</th>
                <th>Update Record</th>
              </tr>
            </thead>
            <tbody>
              {ans}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Delete;

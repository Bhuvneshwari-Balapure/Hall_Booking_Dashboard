import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();  // This will grab the id from the URL parameter
  console.log("Editing data with ID: ", id);
  const [mydata, setmyData] = useState({});

  const loadData = () => {
    let api = `http://localhost:8000/users/Booking/EditData/?id=${id}`;
    axios.get(api).then((res) => {
      console.log(res.data);
      setmyData(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, [id]);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setmyData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    let api = `http://localhost:8000/users/Booking/EditSave`;
    axios.post(api, { _id: id, ...mydata }).then((res) => {
      alert("Data updated!!!");
      console.log(res.data);
    });
  };

  return (
    <div>
      <h3>Update Record</h3>
      <div className="editData">
        <form id="insertForm">
          <div className="formdiv">
            <p>Enter Customer Name</p>
            <input
              type="text"
              name="name"
              value={mydata.name}
              onChange={handleInput}
            />
          </div>
          <div className="formdiv">
            <p>Enter Customer Number</p>
            <input
              type="number"
              name="number"
              value={mydata.number}
              onChange={handleInput}
            />
          </div>
          <div className="formdiv">
            <p>Enter Customer Address</p>
            <input
              type="text"
              name="Address"
              value={mydata.Address}
              onChange={handleInput}
            />
          </div>
          <div className="formdiv">
            <p>Date for Booking</p>
            <input
              type="date"
              name="DateOfBook"
              value={mydata.DateOfBook}
              onChange={handleInput}
            />
          </div>
          <div className="formdiv">
            <p>
              Time for Booking <small>(in Hours)</small>
            </p>
            <input
              type="number"
              name="timeForBook"
              value={mydata.timeForBook}
              onChange={handleInput}
            />
          </div>
          <div className="formdiv">
            <p>Purpose for Booking</p>
            <input
              type="text"
              name="purpose"
              value={mydata.purpose}
              onChange={handleInput}
            />
          </div>
          <div className="formdiv">
            <p>Booking Payment</p>
            <input
              type="number"
              name="payment"
              value={mydata.payment}
              onChange={handleInput}
            />
          </div>
          <button type="button" onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;

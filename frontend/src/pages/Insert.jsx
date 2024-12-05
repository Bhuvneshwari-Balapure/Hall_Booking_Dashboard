import { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [Input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    let api = ("http://localhost:8000/users/Booking/datasave")
    //axios is provide crud
    axios.post(api, Input).then((res) => {
      console.log(res.data);
      alert("data Save");
    });
  };

  return (
    <>
      <div className="InsertPage">
        <form id="insertForm">
          <div className="formdiv">
            <p>Enter Customer Name</p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleInput}
            />
          </div>
          <div className="formdiv">
            <p>Enter Customer Number</p>
            <input
              type="number"
              name="number"
              placeholder="Enter your number"
              onChange={handleInput}
            />
          </div>
          <div className="formdiv">
            <p>Enter Customer Address</p>
            <input
              type="text"
              name="Address"
              placeholder="Enter your address"
              onChange={handleInput}
            />
          </div>
          <div className="formdiv">
            <p>Date for Booking</p>
            <input type="date" name="DateOfBook" onChange={handleInput} />          </div>
          <div className="formdiv">
            <p>
              Time for Booking <small>(in Hours)</small>
            </p>
            <input
              type="number"
              name="timeForBook"
              placeholder="Ex: 2 Hours"
              onChange={handleInput}
            />
          </div>
          <div className="formdiv">
            <p>Purpose for Booking</p>
            <input
              type="text"
              name="purpose"
              placeholder="Purpose"
              onChange={handleInput}
            />
          </div>
          <div className="formdiv">
            <p>Booking Payment</p>
            <input
              type="number"
              name="payment"
              placeholder="Enter amount"
              onChange={handleInput}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Insert;

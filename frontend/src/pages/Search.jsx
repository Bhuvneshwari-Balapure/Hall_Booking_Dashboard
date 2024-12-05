import { useState , useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [nm, setnm] = useState("");
  const [mydata, setmydata] = useState([]);

  const loadData=()=>{
    let api = ("http://localhost:8000/users/Booking/datadisplay");
    axios.get(api).then((res)=>{
      setmydata(res.data);
        console.log(res.data);
    })

}
useEffect(()=>{
    loadData();
},[])


  const handleSearch = () => {
    let api = "http://localhost:8000/users/Booking/datasearch";
    axios.post(api, { name: nm }).then((res) => {
      console.log(res.data);
      setmydata(res.data);
    });
  };

  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.name}</td>
          <td>{key.number}</td>
          <td>{key.Address}</td>
          <td>{key.DateOfBook}</td>
          <td>{key.timeForBook}</td>
          <td>{key.purpose}</td>
          <td>{key.payment}</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <div className="SearchBox">
        <h3>Search Record By Customer Name </h3>
        <div className="search">
          <p>Enter Customer Name</p>
          <input
            type="search"
            value={nm}
            onChange={(e) => {
              setnm(e.target.value);
            }}
          />
          <button type="search" onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="searchTable">
          <table>
            <tr>
              <th>Customer Name</th>
              <th>Customer Number</th>
              <th>Customer Address</th>
              <th>Date of Booking</th>
              <th>
                Time For Booking
                <br></br>
                <small>In Hours</small>
              </th>
              <th>Event</th>
              <th>Payment</th>
            </tr>
            {ans}
          </table>
        </div>
      </div>
    </>
  );
};
export default Search;

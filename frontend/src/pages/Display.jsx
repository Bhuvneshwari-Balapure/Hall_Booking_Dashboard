import { useState , useEffect } from "react";
import axios from "axios";
const Display =()=>{

    const [mydata , setMyData]=useState([]);
    const loadData=()=>{
        let api = ("http://localhost:8000/users/Booking/datadisplay");
        axios.get(api).then((res)=>{
            setMyData(res.data);
            console.log(res.data);
        })

    }
    useEffect(()=>{
        loadData();
    },[])


    const ans = mydata.map((key)=>{
        return (
            <>
                <tr key={key._id}>
                    <td>{key.name}</td>
                    <td>{key.number}</td>
                    <td>{key.Address}</td>
                    <td>{key.DateOfBook}</td>
                    <td>{key.timeForBook}</td>
                    <td>{key.purpose}</td>
                    <td>{key.payment }</td>
                </tr>
            </>
        )
    })

    return (
        <>
            <div className="displayPage">
            <h3>Records Display Here</h3>

                <div className="formDisplayData">
                    <table>
                        <tr>
                            <th>Customer Name</th>
                            <th>Customer Number</th>
                            <th>Customer Address</th>
                            <th>Date of Booking</th>
                            <th>Time For Booking 
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
    )
}
export default Display;

const { UserModel, BookingModel } = require("../Models/LoginModle");



const UserSave = async (req, res) => {
  const { name, mobile, email, password } = req.body;
  const user = await UserModel.create({
    name: name,
    mobile: mobile,
    email: email,
    password: password,
  });

  res.send({ msg: "successfully Registered" });

  console.log(user);
};

const UserCheck = async (req, res) => {
  const { email, password } = req.body;
  const User = await UserModel.find({ email: email });
  console.log(User);

  if (User.length >= 1) {
    if (User[0].password != password) {
      res.status(401).send({ msg: "Invalid Password" });
    } else {
      res.send({ Data: User, msg: "Sab Sahi Hai" });
    }
  } else {
    res.status(401).send({ msg: "Invalid Email" });
  }
};

const dataSave = async (req, res) => {
  //only date not time
  const {
    name,
    number,
    Address,
    DateOfBook,
    timeForBook,
    purpose,
    payment,
  } = req.body;
  const formatDate = new Date(DateOfBook).toISOString().split("T")[0];
  const data = await BookingModel.create(
    {
    name: name,
    number: number,
    Address: Address,
    DateOfBook: new Date(formatDate),
    timeForBook: timeForBook,
    purpose: purpose,
    payment: payment,
  }
);
  console.log(req.body);
  console.log(req.body.payment);
  console.log(data);
  res.send("Data Save");
};

const dataDisplay = async (req, res) => {
  const myData = await BookingModel.find();
  res.send(myData);
  console.log(req.body.payment);
};

const dataSearch = async (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  const myData = await BookingModel.find({ name: name });
  res.send(myData);
};

const deleteDisplay = async (req, res) => {
  const myData = await BookingModel.find();
  res.send(myData);
  console.log(req.body.payment);
};
const deleteRecord = async (req, res) => {
  console.log(req.body);
  const { myid } = req.body;

  const delRes = await BookingModel.findByIdAndDelete(myid);
  console.log(delRes);
  res.send(delRes);
};

const EditDisplay = async (req, res) => {
  const { id } = req.query;
  const Data = await BookingModel.findById(id);

  res.send(Data);
};

const editDataSave = async (req, res) => {
    const {
      _id,
      name,
      number,
      Address,
      DateOfBook,
      timeForBook,
      purpose,
      payment,
    } = req.body;
  
    // Find and update the booking by _id
    const updatedData = await BookingModel.findByIdAndUpdate(
      _id,
      {
        name,
        number,
        Address,
        DateOfBook,
        timeForBook,
        purpose,
        payment,
      },
      { new: true } // This will return the updated document
    );
  
    // Send the updated data back
    res.send(updatedData);
  };

module.exports = {
  UserSave,
  UserCheck,

  dataSave,
  dataDisplay,
  dataSearch,
  deleteDisplay,
  deleteRecord,
  EditDisplay,
  editDataSave,
};

const express = require("express");
const route = express.Router();
const LoginControl = require("../Controllers/LoginControl");

// Other routes (Registration, UserCheck, etc.)
route.post("/registration", LoginControl.UserSave);
route.post("/usercheck", LoginControl.UserCheck);

// Booking-related routes
route.post("/Booking/datasave", LoginControl.dataSave);
route.get("/Booking/datadisplay", LoginControl.dataDisplay);
route.post("/Booking/datasearch", LoginControl.dataSearch);
route.get("/Booking/DeleteDisplay", LoginControl.deleteDisplay);
route.post("/Booking/deleteRecord", LoginControl.deleteRecord);
route.get("/Booking/EditData", LoginControl.EditDisplay);
route.post("/Booking/EditSave", LoginControl.editDataSave);

module.exports = route;

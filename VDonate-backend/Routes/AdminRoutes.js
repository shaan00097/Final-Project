const { Router } = require("express");
const {
  addAdmin,
  updateAdmin,
  findAllAdmins,
  findAdmin,
  confirmAdmin,
  getYetToValidateUsers,
  loginAdmin,
  welcomeAdmin,
  getNewlySignedAdmins,
  updatePasswordAdmin,
  updatePasswordUser,
  rejectAdminSignUp,
  getMessages,
  sendMessage,
} = require("../Controllers/AdminControllers.js");
const {
  authenticateUser,
  authenticateAdminMiddleware,
} = require("../Middlewares/authMiddleware.js");

const routes = Router();

routes.post("/addadmin", addAdmin);
routes.post("/loginadmin", loginAdmin);
routes.get("/admindashboard", welcomeAdmin);
routes.post("/updateAdmin", updateAdmin);
routes.get("/findAdmin", findAdmin);
routes.get("/findAllAdmins", findAllAdmins);
routes.post("/confirmAdmin", confirmAdmin);
routes.get("/validateUsers", getYetToValidateUsers);
routes.get("/getnewadmins", getNewlySignedAdmins);
routes.post("/updatepassword", updatePasswordAdmin);
routes.post("/updatepassworduser", updatePasswordUser);
routes.put("/rejectadmin", rejectAdminSignUp);
routes.get("/getmessages", authenticateAdminMiddleware, getMessages);
routes.post("/sendmessage", sendMessage);

module.exports = routes;

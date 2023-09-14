const router = require('express').Router();
const { getAllCompanies, addCompanyLogin, deleteCompany, updateCompany, checkForLogin } = require("../database/model")

router.get("/", getAllCompanies);
router.post("/login", checkForLogin);
router.post("/post", addCompanyLogin)
router.put("/:id", updateCompany)
router.delete("/:id", deleteCompany)

module.exports = router;

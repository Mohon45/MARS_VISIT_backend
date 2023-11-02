const { Router } = require("express");
const router = Router();

const applicationController = require("../controllers/application.controller");

router.post("/create", applicationController.createApplication);
router.get("/", applicationController.getAllApplications);
router.get("/details/:id", applicationController.getSingleApplication);
router.patch("/update/:id", applicationController.updateApplication);
router.delete("/delete/:id", applicationController.deleteApplication);

module.exports = router;

const {
  createApplicationService,
  getAllApplicationService,
  getSingleApplicationService,
  updateApplicationServie,
  deleteApplicationService,
} = require("../services/application.services");
const { httpResponse } = require("../utils/httpResponse");

module.exports.createApplication = async (req, res) => {
  try {
    const result = await createApplicationService(req.body);
    res
      .status(201)
      .json(
        httpResponse("success", result, "Application created successfully")
      );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(httpResponse("fail", {}, "failed to create Application"));
  }
};

module.exports.getAllApplications = async (req, res) => {
  try {
    const result = await getAllApplicationService();
    res
      .status(200)
      .json(
        httpResponse("success", result, "Applications data retrival success")
      );
  } catch (error) {
    res
      .status(500)
      .json(httpResponse("fail", {}, "Applications data retrival failed"));
  }
};

module.exports.getSingleApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getSingleApplicationService(id);
    res
      .status(200)
      .json(
        httpResponse("success", result, "Application data retrival success")
      );
  } catch (error) {
    res
      .status(500)
      .json(httpResponse("fail", {}, "Application data retrival failed"));
  }
};

module.exports.updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateApplicationServie(id, req.body);
    res
      .status(200)
      .json(httpResponse("success", result, "Application updated success"));
  } catch (error) {
    res.status(500).json(httpResponse("fail", {}, "Application update failed"));
  }
};

module.exports.deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteApplicationService(id);
    res
      .status(200)
      .json(httpResponse("success", result, "Application deleted success"));
  } catch (error) {
    res
      .status(500)
      .json(httpResponse("fail", {}, "Application deleted failed"));
  }
};

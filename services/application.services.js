const Application = require("../models/Application");

exports.createApplicationService = async (data) => {
  const result = await Application.create(data);
  return result;
};
exports.getAllApplicationService = async () => {
  const result = await Application.find({});

  return result;
};
exports.getSingleApplicationService = async (id) => {
  const result = await Application.findOne({ _id: id });

  return result;
};

exports.updateApplicationServie = async (id, data) => {
  const result = await Application.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

exports.deleteApplicationService = async (id) => {
  const result = await Application.deleteOne({ _id: id });
  return result;
};

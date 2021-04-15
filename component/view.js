const model = require("./model");

exports.getAllEntry = async (req, res) => {
  const newData = await model.find();
  res.status(200).json({
    result: true,
    totalEntry: model.length + 1,
    data: newData,
  });
};

exports.createEntry = async (req, res) => {
  const newData = await model.create(req.body);
  res.status(201).json({
    report: "Record Successfully Created...",
    data: newData,
  });
};

exports.getSingleEntry = async (req, res) => {
  const newData = await model.findById(req.params.id);
  res.status(200).json(newData);
};

exports.updateSingleEntry = async (req, res) => {
  const newData = await model.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
      report: "Update Successful...",
      data: newData
  });
};

exports.deleteSingleEntry = async (req, res) => {
  const newData = await model.findByIdAndDelete(req.params.id, req.body);
  res.status(200).json("Entry has been successfully deleted!");
};

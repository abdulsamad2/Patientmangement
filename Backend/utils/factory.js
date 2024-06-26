const catchAsync = require("./catchAsync");
const AppError = require("./AppError");

const factory = (Model, ...args) => ({
  createDoc: catchAsync(async (req, res, next) => {
    const doc = await Model.create(req?.body, ...args);
    res.status(201).json({
      status: "success",
      data: doc,
    });
  }),
  getAllDocs: catchAsync(async (req, res, next) => {
    const docs = await Model.find();
    res.status(200).json({
      status: "success",
      results: docs.length,
      data: docs,
    });
  }),
  getOne: catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      data: doc,
    });
  }),
  updateOne: catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      ...args,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      data: doc,
    });
  }),

  deleteOne: catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  }),
});

module.exports = factory;

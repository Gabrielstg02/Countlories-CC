const { Storage } = require("@google-cloud/storage");
const ResponseClass = require("../utils/response");
const fs = require("fs");
const dateFormat = require("dateformat");
const path = require("path");

const pathKey = path.resolve("./serviceaccountkey.json");

const gcs = new Storage({
  projectId: "submission-mgce-cahya-gumilang",
  keyFilename: pathKey,
});

const bucketName = "submission-mgce-cahya-gumilang";
const bucket = gcs.bucket(bucketName);

const getPublicUrl = (filename) => {
  return "https://storage.googleapis.com/" + bucketName + "/" + filename;
};

const uploadToGcs = (req, folder) => {
  const SuccessResponse = new ResponseClass.SuccessResponse();
  const ErrorResponse = new ResponseClass.ErrorResponse();

  if (!req.file) {
    ErrorResponse.message = "No file uploaded";
    return ErrorResponse;
  }

  const gcsname = `${folder}/${dateFormat(new Date(), "yyyymmdd-HHMMss")}`;
  const file = bucket.file(gcsname);

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  stream.on("error", (err) => {
    req.file.cloudStorageError = err;
    ErrorResponse.status = 500;
    ErrorResponse.message = err.message;
    return ErrorResponse;
  });

  stream.on("finish", () => {
    req.file.cloudStorageObject = gcsname;
    req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
    SuccessResponse.data = req.file.cloudStoragePublicUrl;
    SuccessResponse.message = "Upload Success";
    return SuccessResponse;
  });

  stream.end(req.file.buffer);
};

const deleteFromGcs = (filename) => {
  const SuccessResponse = new ResponseClass.SuccessResponse();
  const ErrorResponse = new ResponseClass.ErrorResponse();

  if (!filename) {
    ErrorResponse.message = "No file Selected";
    return ErrorResponse;
  }

  try {
    bucket.file(filename).delete();
    SuccessResponse.message = "Delete Success";
    return SuccessResponse;
  } catch (err) {
    ErrorResponse.status = 500;
    ErrorResponse.message = err.message;
    return ErrorResponse;
  }
};

const getFilename = (url) => {
  const splitUrl = url.split(
    "https://storage.googleapis.com/" + bucketName + "/"
  );
  return splitUrl[1];
};

module.exports = {
  uploadToGcs,
  deleteFromGcs,
  getFilename,
};

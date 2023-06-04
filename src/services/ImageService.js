const { Storage } = require("@google-cloud/storage");
const ResponseClass = require("../utils/response");
const fs = require("fs");
const dateFormat = require("dateformat");
const path = require("path");

const pathKey = path.resolve("./serviceaccountkey.json");

const gcs = new Storage({
  projectId: process.env.GCLOUD_PROJECT_ID,
  keyFilename: pathKey,
});

const bucketName = process.env.GCLOUD_STORAGE_BUCKET;
const bucket = gcs.bucket(bucketName);

const getPublicUrl = (filename) => {
  return "https://storage.googleapis.com/" + bucketName + "/" + filename;
};

const uploadToGcs = async (file, folder) => {
  const SuccessResponse = new ResponseClass.SuccessResponse();
  const ErrorResponse = new ResponseClass.ErrorResponse();

  if (!file) {
    ErrorResponse.message = "No file uploaded";
    return ErrorResponse;
  }
  try {
    const gcsname = `${folder}/${dateFormat(new Date(), "yyyymmdd-HHMMss")}`;
    const filecontent = file.buffer;
    const contentType = file.mimetype;
    await bucket.file(gcsname).save(filecontent, {
      contentType,
    });

    SuccessResponse.message = "Upload Success";
    SuccessResponse.data = getPublicUrl(gcsname);
    return SuccessResponse;
  } catch (err) {
    ErrorResponse.code = 500;
    ErrorResponse.message = err.message;
    return ErrorResponse;
  }
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
    ErrorResponse.code = 500;
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

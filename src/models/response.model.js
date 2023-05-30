class ErrorResponse {
  constructor(status = false, code = 400, message = "") {
    this.status = status;
    this.code = code;
    this.message = message;
  }
}

class SuccessResponse {
  constructor(status = true, code = 200, message = "", data = null) {
    this.status = status;
    this.code = code;
    this.message = message;
    this.data = data;
  }
}

class SuccessWithNoDataResponse {
  constructor(status = true, code = 200, message = "", data = null) {
    this.status = status;
    this.code = code;
    this.message = message;
  }
}

module.exports = { ErrorResponse, SuccessResponse, SuccessWithNoDataResponse };

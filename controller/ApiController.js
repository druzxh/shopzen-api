class ApiController {
    sendResponse(res, code, message, data = [], statusCode = 200) {
      res.status(statusCode).json({
        code,
        success: true,
        message,
        data: this.normalizeResult(data),
      });
    }
  
    sendCreatedResponse(res, code, message, data = [], statusCode = 201) {
      res.status(statusCode).json({
        code,
        success: true,
        message,
        data: this.normalizeResult(data),
      });
    }
  
    sendError(res, code, message, errorMessages = [], statusCode = 400) {
      res.status(statusCode).json({
        code,
        success: false,
        message,
        errors: this.normalizeResult(errorMessages),
      });
    }
  
    sendUnauthorized(res, code, status, errorMessages = []) {
      this.sendError(res, code, status, errorMessages, 401);
    }
  
    sendForbidden(res, code, status, errorMessages = []) {
      this.sendError(res, code, status, errorMessages, 403);
    }
  
    sendNotFound(res, code, status, errorMessages = []) {
      this.sendError(res, code, status, errorMessages, 404);
    }
  
    sendServerError(res, code, status, errorMessages = []) {
      this.sendError(res, code, status, errorMessages, 500);
    }
  
    normalizeResult(result) {
      result = JSON.parse(JSON.stringify(result));
  
      function convertNullToEmptyString(value) {
        return value !== null ? value : "";
      }
  
      if (result instanceof Array) {
        result.forEach((item) => {
          Object.keys(item).forEach((key) => {
            item[key] = convertNullToEmptyString(item[key]);
          });
        });
      } else {
        Object.keys(result).forEach((key) => {
          result[key] = convertNullToEmptyString(result[key]);
        });
      }
  
      return result;
    }
  }
  
  module.exports = new ApiController();
  
class HttpError extends Error {
    constructor(message, errorCode) {
        // Call the construction of the base Error Class
        super(message); // Add a "message" property
        this.code = errorCode; // Add a "code property
    }
}

module.exports = HttpError;
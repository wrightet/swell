// spot validations

const Validator = require("validator");
const validText = require("./valid-text");
const validCoordinates = require("./valid-coordinates")
module.exports = function validateSpot(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : "";
    data.description = validText(data.description) ? data.description : "";
    data.coordinates = validCoordinates(data.coordinates) ? data.coordinates : "";

    if(!Validator.isLength(data.name, { min: 1, max : 40})) {
        errors.name = "Name must be between 1 and 40 characters"
    }

    if(Validator.isEmpty(data.coordinates)){
        errors.coordinates = 'Coordinates are required to make a spot'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };

}
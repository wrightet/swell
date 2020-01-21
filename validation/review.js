const Validator = require("validator");
const validText = require("./valid-text");
const validQualityDifficulty = require("./valid-qual-dif");

module.exports =  function valdiateReviews(data) {
    let errors = {};

    data.title =  validText(data.title) ? data.title : "";
    data.body = validText(data.body) ? data.body : "";
    data.quality = validQualityDifficulty(data.quality) ? data.quality : "";
    data.difficulty = validQualityDifficulty(data.difficulty) ? data.difficulty : "";
   
    if(!Validator.isEmpty(data.quality)){
        errors.quality = "Quality must be a value between 1 and 10"
    }
    if(!Validator.isEmpty(data.difficulty)){
        errors.difficulty = "Difficulty must be a value between 1 and 10"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const ln2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  sampleActivityFloat = parseFloat(sampleActivity);

  if (isNaN(sampleActivityFloat) || 
  sampleActivityFloat <= 0 || 
  sampleActivityFloat > 15 || 
  typeof sampleActivity !== 'string') return false;
  age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityFloat) / (ln2 / HALF_LIFE_PERIOD));
  return age;
};
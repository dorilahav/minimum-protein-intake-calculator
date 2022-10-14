import {Diet, Gender} from './enums';

const BODY_FAT_STEP_HEIGHT = 5;
const BASE_MIN_PROTEIN_INTAKE = 1.5;

const proteinAdditionByDiet = {
  [Diet.Omnivore]: 0,
  [Diet.PlantBased]: 0.1
};

const proteinAdditionByGender = {
  [Gender.Male]: 0,
  [Gender.Female]: -0.2
};

const maxAverageBodyFatByGender = {
  [Gender.Male]: 20,
  [Gender.Female]: 28
};

const calculateBodyFatAddition = (gender, bodyFat) => {
  const maxAverageBodyFat = maxAverageBodyFatByGender[gender];
  const step = Math.ceil((bodyFat - maxAverageBodyFat) / BODY_FAT_STEP_HEIGHT);

  return step * -0.1;
};

export const calculateMinProteinIntake = (gender, diet, weightInKG, bodyFat) => {
  const genderAddition = proteinAdditionByGender[gender];
  const dietAddition = proteinAdditionByDiet[diet];
  const bodyFatAddition = calculateBodyFatAddition(gender, bodyFat);
  const totalProteinIntakePerKG = BASE_MIN_PROTEIN_INTAKE + genderAddition + dietAddition + bodyFatAddition;

  return Math.round(weightInKG * totalProteinIntakePerKG);
};

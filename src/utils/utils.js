export const calcItem = (item, weight) => {
  return ((item * weight) / 100).toFixed(2);
};

export const createData = (
  name,
  calories,
  protein,
  fat,
  carbs,
  fiber,
  weight
) => {
  return { name, calories, protein, fat, carbs, fiber, weight };
};

export const tableHeadData = [
  "Aliment",
  "Calorii",
  "Proteine",
  "Lipide",
  "Carbohidrati",
  "Fibre",
  "Gramaj"
];

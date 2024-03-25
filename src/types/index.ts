export type DishProps = {
  _id: string;
  imageUrl: string;
  title: string;
  ingredients: IngredientProp[];
  price: number;
};

type IngredientProp = {
  name: string;
};

export type Dish = {
  _id: string;
  imageUrl: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
  timeInMins: number;
};

type Ingredient = {
  _id: string;
  name: string;
  amount: number;
  unit: string;
};
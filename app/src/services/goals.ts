import Goals from '@model/Goals';

export async function fetchGoals(): Promise<Goals> {
  const goals = new Goals();
  goals.calories = 3800;
  goals.carbs = 400;
  goals.fat = 100;
  goals.protein = 200;

  return goals;
}

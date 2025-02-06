import Card from "@components/Card";
import Header from "@components/Header";
import Input from "@components/Input";
import { fetchGoals } from "@services/goals";
import { use } from "react";

const fetchGoalsPromise = fetchGoals();

export default function GoalsPage() {
  const goals = use(fetchGoalsPromise);

  return (
    <>
      <Header title="Goals"/>

      <Card className="flex flex-col gap-6">
        <h2>Set your Goals</h2>

        <Input type="number" placeholder="Calories" defaultValue={goals.calories}
          onChange={e => goals.calories = Number(e.target.value)}/>
        <Input placeholder="Carbohydrates" defaultValue={goals.carbs}
          onChange={e => goals.carbs = Number(e.target.value)}/>
        <Input placeholder="Fat" defaultValue={goals.fat}
          onChange={e => goals.fat = Number(e.target.value)}/>
        <Input placeholder="Protein" defaultValue={goals.protein}
          onChange={e => goals.protein = Number(e.target.value)}/>
      </Card>
    </>
  );
}

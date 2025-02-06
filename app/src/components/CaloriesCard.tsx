import { DiaryEntryCollection } from '@model/diary';
import Goals from '@model/Goals';
import Card from './Card';
import ProgressWheel from './ProgressWheel';

const TW_ROSE_500 = 'oklch(0.645 0.246 16.439)';

export default function CaloriesCard(props: { diaryEntries: DiaryEntryCollection, goals: Goals }) {
  return (
    <Card className="flex-grow flex flex-col gap-4 w-1/2">
      <h3>Calories</h3>
      <ProgressWheel
        current={props.diaryEntries.getTotalCalories()}
        total={props.goals.calories}
        color={TW_ROSE_500}/>
    </Card>
  );
}

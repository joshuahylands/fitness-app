import { DiaryEntryCollection } from '@model/diary';
import Goals from '@model/Goals';
import Card from './Card';
import ProgressWheel from './ProgressWheel';

const TW_AMBER_500 = 'oklch(0.769 0.188 70.08)';
const TW_LIME_500 = 'oklch(0.768 0.233 130.85)';
const TW_VIOLET_500 = 'oklch(0.606 0.25 292.717)';

export default function MacrosCard(props: { diaryEntries: DiaryEntryCollection, goals: Goals }) {
  return (
    <Card>
      <div className="flex justify-evenly text-center">
        <div className="flex flex-col gap-4 w-1/4">
          <span className="text-lg font-bold">Carbs</span>
          <ProgressWheel
            current={props.diaryEntries.getTotalCarbs()}
            total={props.goals.carbs}
            color={TW_AMBER_500}/>
        </div>
        <div className="flex flex-col gap-4 w-1/4">
          <span className="text-lg font-bold">Fat</span>
          <ProgressWheel
            current={props.diaryEntries.getTotalFat()}
            total={props.goals.fat}
            color={TW_LIME_500}/>
        </div>
        <div className="flex flex-col gap-4 w-1/4">
          <span className="text-lg font-bold">Protein</span>
          <ProgressWheel
            current={props.diaryEntries.getTotalProtein()}
            total={props.goals.protein}
            color={TW_VIOLET_500}/>
        </div>
      </div>
    </Card>
  );
}
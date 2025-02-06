import CaloriesCard from '@components/CaloriesCard';
import Card from '@components/Card';
import Header from '@components/Header';
import MacrosCard from '@components/MacrosCard';
import { DiaryEntry } from '@model/diary';
import { fetchDiary } from '@services/diary';
import { fetchGoals } from '@services/goals';
import dayjs from 'dayjs';
import { use, useMemo } from 'react';
import { Link } from 'react-router';
import { useParams } from 'react-router';

function DiarySection(props: { name: string, entries: DiaryEntry[] }) {
  return (
    <Card className="flex flex-col gap-4">
      <h3>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h3>

      <ul className="flex flex-col">
        {
          props.entries.map(entry => (
            <li
              key={`diary-entry-${entry.entry_id}`}
              className="flex justify-between items-center font-bold py-3 [&:not(:last-child)]:border-b border-b-neutral-400 dark:border-b-neutral-700">
              <div>
                <p>{entry.name}</p>
                <div className="flex gap-2 font-light">
                  <p>C: <span className="font-bold text-amber-500">{entry.carbs}</span></p>
                  <p>F: <span className="font-bold text-lime-500">{entry.fat}</span></p>
                  <p>P: <span className="font-bold text-violet-500">{entry.protein}</span></p>
                </div>
              </div>
              <p>{entry.calories}</p>
            </li>
          ))
        }
      </ul>
    </Card>
  )
}

const fetchGoalsPromise = fetchGoals();

export default function Diary() {
  const { date } = useParams();
  let diaryDate = useMemo(() => dayjs(date, 'YYYY-MM-DD'), [date]);

  const fetchDiaryPromise = useMemo(() => fetchDiary(diaryDate), [diaryDate]);
  const diaryEntries = use(fetchDiaryPromise);
  const goals = use(fetchGoalsPromise);

  const diarySections = useMemo(() => diaryEntries.getSections(), [diaryEntries]);

  return (
    <>
      <Header title="Food Diary"/>

      <section className="flex justify-evenly items-centeer">
        <Link to={`/diary/${diaryDate.subtract(1, 'day').format('YYYY-MM-DD')}`}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </Link>
        <p className="font-bold text-lg">{diaryDate.format('MMM D YYYY')}</p>
        <Link to={`/diary/${diaryDate.add(1, 'day').format('YYYY-MM-DD')}`}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </Link>
      </section>

      <section className="flex gap-8">
        <CaloriesCard diaryEntries={diaryEntries} goals={goals}/>

        <Card className="flex-grow flex flex-col justify-center items-center">
          <h3>{goals.calories - diaryEntries.getTotalCalories()}</h3>
          <p>remaining</p>
        </Card>
      </section>

      <MacrosCard diaryEntries={diaryEntries} goals={goals}/>

      {
        Object.entries(diarySections).map(([name, entries]) => (
          <DiarySection key={`diary-secttion-${name}`} name={name} entries={entries}/>
        ))
      }
    </>
  )
}

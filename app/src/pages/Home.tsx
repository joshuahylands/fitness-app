import CaloriesCard from '@components/CaloriesCard';
import Card from '@components/Card';
import Header from '@components/Header';
import MacrosCard from '@components/MacrosCard';
import { fetchDiary } from '@services/diary';
import { fetchGoals } from '@services/goals';
import { fetchProfile } from '@services/profile';
import dayjs from 'dayjs';
import { use } from 'react';
import { Link } from 'react-router';

const fetchProfilePromise = fetchProfile();
const fetchDiaryPromise = fetchDiary(dayjs());
const fetchGoalsPromise = fetchGoals();

export default function Home() {
  const profile = use(fetchProfilePromise);
  const diaryEntries = use(fetchDiaryPromise);
  const goals = use(fetchGoalsPromise);

  return (
    <>
      <Header/>
      <h1 className="pt-12">{profile.getGreeting()}</h1>

      <section className="flex gap-8">
        
        <CaloriesCard diaryEntries={diaryEntries} goals={goals}/>

        <Card className="flex items-center">
          <Link to={`/diary/${dayjs().format('YYYY-MM-DD')}`} className="flex flex-col gap-4 text-center">
            <span className="material-symbols-outlined !text-5xl !font-light">add_circle</span>
            <h3>Food Diary</h3>
          </Link>
        </Card>

      </section>

      <MacrosCard diaryEntries={diaryEntries} goals={goals}/>

      <Link to="/goals">
        <Card className="flex justify-center items-center gap-4">
          <h3>Set Goals</h3>
          <span className="material-symbols-outlined">flag_circle</span>
        </Card>
      </Link>
    </>
  );
}

import { DiaryEntry, DiaryEntryCollection } from '@model/diary';
import dayjs, { Dayjs } from 'dayjs';

export async function fetchDiary(date: Dayjs): Promise<DiaryEntryCollection> {
  const diaryEntryCollection = new DiaryEntryCollection([]);

  if (date.isSame(dayjs().subtract(1, 'day'), 'day')) {
    const diary_entry_3 = new DiaryEntry();
    diary_entry_3.entry_id = '2';
    diary_entry_3.diary_section = 'lunch';
    diary_entry_3.time = dayjs().subtract(1, 'day').unix();
    diary_entry_3.name = 'Test Food 3';
    diary_entry_3.calories = 120;
    diary_entry_3.carbs = 25;
    diary_entry_3.fat = 0;
    diary_entry_3.protein = 0;
    diary_entry_3.quantity = 1;

    diaryEntryCollection.entries.push(diary_entry_3);
  } else {
    const diary_entry_1 = new DiaryEntry();
    diary_entry_1.entry_id = '0';
    diary_entry_1.diary_section = 'breakfast';
    diary_entry_1.time = dayjs().unix();
    diary_entry_1.name = 'Test Food 1';
    diary_entry_1.calories = 100;
    diary_entry_1.carbs = 5;
    diary_entry_1.fat = 0;
    diary_entry_1.protein = 20;
    diary_entry_1.quantity = 1;

    const diary_entry_2 = new DiaryEntry();
    diary_entry_2.entry_id = '1';
    diary_entry_2.diary_section = 'lunch';
    diary_entry_2.time = dayjs().unix();
    diary_entry_2.name = 'Test Food 2';
    diary_entry_2.calories = 120;
    diary_entry_2.carbs = 25;
    diary_entry_2.fat = 0;
    diary_entry_2.protein = 0;
    diary_entry_2.quantity = 1;

    diaryEntryCollection.entries.push(diary_entry_1);
    diaryEntryCollection.entries.push(diary_entry_2);
  }

  return diaryEntryCollection;
}
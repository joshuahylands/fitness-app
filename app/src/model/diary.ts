export class DiaryEntry {
  entry_id: string = '';
  diary_section: string = '';
  time: number = 0;
  name: string = '';
  calories: number = 0;
  carbs: number = 0;
  fat: number = 0;
  protein: number = 0;
  quantity: number = 1;
}

export class DiaryEntryCollection {
  entries: DiaryEntry[];

  constructor(entries: DiaryEntry[]) {
    this.entries = entries;
  }

  getTotalCalories() {
    return this.entries.reduce((totalCalories, entry) => totalCalories + entry.calories, 0);
  }

  getTotalCarbs() {
    return this.entries.reduce((totalCarbs, entry) => totalCarbs + entry.carbs, 0);
  }

  getTotalFat() {
    return this.entries.reduce((totalFat, entry) => totalFat + entry.fat, 0);
  }

  getTotalProtein() {
    return this.entries.reduce((totalProtein, entry) => totalProtein + entry.protein, 0);
  }

  getSections() {
    const diarySections: { [key: string]: DiaryEntry[] } = {};

    for (const entry of this.entries) {
      if (diarySections[entry.diary_section] == undefined) {
        diarySections[entry.diary_section] = [entry];
      } else {
        diarySections[entry.diary_section].push(entry);
      }
    }

    return diarySections;
  }
}
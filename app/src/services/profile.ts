import Profile from '@model/Profile';

export async function fetchProfile(): Promise<Profile> {
  const profile = new Profile();
  profile.name = 'Josh';

  return profile;
}

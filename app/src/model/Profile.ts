import dayjs from "dayjs";

export default class Profile {
  name: string = '';

  getGreeting() {
    const hour = dayjs().hour();
    
    if (hour < 5 || hour > 23) {
      return `Welcome Back, ${this.name}!`;
    } else if (hour < 12) {
      return `Good Morning, ${this.name}!`;
    } else if (hour < 18) {
      return `Good Afternoon, ${this.name}!`;
    } else {
      return `Good Evening, ${this.name}!`;
    }
  }
}

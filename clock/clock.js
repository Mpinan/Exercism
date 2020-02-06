//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour = 0, minutes = 0) {
    this.hour = hour;
    this.minutes = minutes;
    this.date = new Date();
  }

  toString() {
    this.date.setHours(this.hour, this.minutes);
    this.date = this.date.toTimeString().slice(0, 5);
    return this.date;
  }

  plus() {
    throw new Error("Remove this statement and implement this function");
  }

  minus() {
    throw new Error("Remove this statement and implement this function");
  }

  equals() {
    throw new Error("Remove this statement and implement this function");
  }
}

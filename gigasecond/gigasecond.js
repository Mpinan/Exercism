//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = date => {
  let ms = Math.pow(10, 12);

  //10^9 will give 1.000.000.000 which is represented in seconds.
  //getTime return miliseconds that's why Math.pow is to 12 and not to 9

  let time = date.getTime();
  let endDate = new Date(time + ms);
  return endDate;
};

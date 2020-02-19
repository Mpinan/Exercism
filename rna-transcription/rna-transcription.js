//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = nucletoide => {
  let transciption = [];
  nucletoide.split("").forEach(e => {
    if (e === "C") {
      transciption.push("G");
    }
    if (e === "G") {
      transciption.push("C");
    }
    if (e === "T") {
      transciption.push("A");
    }
    if (e === "A") {
      transciption.push("U");
    }
  });
  return transciption.join("");
};

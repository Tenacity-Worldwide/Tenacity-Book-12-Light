const fs = require("fs");
const axios = require("axios").default.create({
  baseURL: "https://lingua-robot.p.rapidapi.com/language/v1/entries/en",
  headers: {
    "x-rapidapi-host": "lingua-robot.p.rapidapi.com",
    "x-rapidapi-key": "e18eb20f52msh9b21702f259ecfbp155d87jsna8475a6b3b37"
  }
});

const words = [
  // "fine",
  // "postage stamp",
  // "cast my gaze",
  // "on_the_other_hand",
  // "communications-satellite",
  // "middle-income",
  // "customer relations",
  // "eye for detail",
  // "low income",
  // "self motivator",
  // "tonne",
  // "multitasker",
  // "onstream",
  // "problemsolver",
  // "team player",
  // "drug dependency",
  // "drug dependent",
  // "move away from",
  // "made up of",
  // "Cue",
  // "stay up",
  // "super",
  // "volcano",
  // "above-mentioned",
  // "sweep away",
  // "flat plan",
  // "subedit"
]// require("./words.json");
// const words = require("./words.json");
const dictionary = {};

(async () => {
  console.log("Fetching definitions...");

  let count = 1;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const response = await axios.get(`/${word}`);
    dictionary[word] = response.data;
    console.log(`${count} out of ${words.length}`);
    count++;
  }

  console.log("Saving to file...");
  fs.writeFileSync("dictionary_temp2.json", JSON.stringify(dictionary));
  console.log("Done.");
})();

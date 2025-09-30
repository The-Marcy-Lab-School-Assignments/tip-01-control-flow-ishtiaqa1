/*
Complete the function so that it returns the following:
80 or above → "Wear shorts and a t-shirt."
60–79 → "Wear jeans and a light jacket."
40–59 → "Wear a sweater and pants."
Below 40 → "Wear a heavy coat, scarf, and boots."
*/

const outfitPicker = (temp) => {
  // ✍️ Write your code here
  if (temp >= 80) {
    return "Wear shorts and a t-shirt.";
  } else if (temp >= 60) {
    return "Wear jeans and a light jacket.";
  } else if (temp >= 40) {
    return "Wear a sweater and pants.";
  } else if (temp < 40){
    return "Wear a heavy coat, scarf, and boots.";
  } else {
    return undefined;
  }
};

//Test your function below
for (let i = 0; i < 5; i++) {
  let randint = Math.floor(Math.random()*100);
  console.log(`The temp is ${randint} so: ${outfitPicker(randint)}`);
}
console.log(`The temp is ${"a"} so: ${outfitPicker("a")}`);
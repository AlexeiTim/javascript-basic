const score = [5, 10, 0, 15];


for (const [i, el] of score.entries()) {
  console.log(`Раунд ${i + 1}: ${el}`)
}


score.forEach((el, i) => console.log(i + 1, el));


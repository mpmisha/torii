import { compareOnServer } from "./compare";
import { numberToString } from "./numberUtils"
export async function run(maxIterations: Number = 42, logger: (str: string) => void) {

  const iterations = maxIterations || 42;
  const base = 26;

  let min = (base ** 5);
  let max = (base ** 6) - 1;
  let middle = Math.floor((max - min) / 2);

  for (let i = 0; i < iterations; i++) {
    logger(`\n_______iteration = ${i}_______`);

    logger(`${numberToString(min, base)} --- ${numberToString(middle, base)} ---- ${numberToString(max, base)}`);
    logger(`${min} --- ${middle} ---- ${max}`);
    logger(`middle = ${numberToString(middle, base)}`);

    let compareResult = await compareOnServer(numberToString(middle, base));
    let isBigger = compareResult > 0 || numberToString(middle, base).length < 6;

    logger(`compare = ${compareResult}`);
    logger(`isBigger = ${isBigger}`);

    if (min === middle) {
      middle++;
      continue;
    }
    if (compareResult === 0) {
      logger("you win!")
      logger(`middle = ${numberToString(middle, base)}`);
      break;
    }


    if (isBigger) {
      max = middle;
    } else {
      min = middle;
    }
    middle = Math.floor((max - min) / 2) + min;
  }
}

run(42, (str) => console.log(str));

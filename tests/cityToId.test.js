import { expect, test } from 'vitest';
import { cityToString } from './lib/functions';


test("Should return city id's seperated by a comma", () => {

  const citiesById = {
    "Las Vegas": 3606250,
    "New York": 5128638,
    "Washington D.C.": 4140963,
  };

  expect(cityToString(citiesById)).toBe('3606250,5128638,4140963');
}); 
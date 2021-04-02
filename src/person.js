const AGE_OF_ADULT = 18;
const DRINKING_AGE = 21;
const SENIOR_AGE = 65;

const isAdult = (age) => age >= AGE_OF_ADULT;
const canDrink = (age) => age >= DRINKING_AGE;

const isSenior = (age) => age >= SENIOR_AGE;

// export default isSenior;

export { isAdult, canDrink, isSenior as default }
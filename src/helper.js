export function getYearDiff(year) {
  return new Date().getFullYear() - year;
}

export function calcBrand(brand) {
  let increment;
  switch (brand) {
    case 'American':
      increment = 1.3;
      break;
    case 'European':
      increment = 1.15;
      break;
    case 'Asian':
      increment = 1.05;
      break;
    default:
      break;
  }
  return increment;
}

export function getPlan(plan) {
  return plan === 'basic' ? 1.2 : 1.5;
}

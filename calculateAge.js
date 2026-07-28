function  calculateAge(birthYear,year) {  

  if (birthYear === year) {
    return "You were born this very year!";
  } else if (year > birthYear) {
    const age = year - birthYear;
    return `You are ${age} ${age === 1 ? "year" : "years"} old.`;
  } else {
    const yearsUntilBirth = birthYear - year;
    return `You will be born in ${yearsUntilBirth} ${yearsUntilBirth === 1 ? "year" : "years"}.`;
  }
}
console.log(calculateAge(1992,20024))
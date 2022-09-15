// Declare
function calculateAge(age) {
  const momAge = age * 2;
  const dadAge = momAge * 1.2;
  console.log(
    `Mom's age is ${Number(momAge)} and Dad's age is ${Number(
      dadAge
    ).toPrecision(2)}`
  );
}

// Invoke
calculateAge(18);
infoAboutMe("Marko", 18, "blue");

function infoAboutMe(name, age, favoriteColor) {
    console.log(`Hi, I'm ${name}. I am ${age} years old and my favorite color is ${favoriteColor}.`);
}
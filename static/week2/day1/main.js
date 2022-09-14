///

let globalAddress = {
  addressNumber: "101 ",
  addressStreet: "Anywhere St. ",
  country: "New York, NY ",
};

var result =
  globalAddress.addressNumber +
  globalAddress.addressStreet +
  globalAddress.country;
console.log(result);

///

const birthYear = 2004;
const futureYear = 2038;
const diff = 2038 - 2004;
console.log(`I will be ${diff} years old in ${futureYear}`);

///

const account = {
  username: "vucinicm",
  password: "root",
};

const database = [account];
const newsfeed = [account, database];

function celsiusToFahrenheit(cel) {
  return (cel / 5) * 9 + 32;
}

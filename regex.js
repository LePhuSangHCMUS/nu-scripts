console.log('START');


const regex = new RegExp(/^[a-z]/);

const string='1234567'

const stringTest = `a13A--%--df`;
const newString=stringTest.match(/.{1,3}/ig,'-')
console.log("=======>", newString);

const number = "1234567891";
const newNumber = number.match(/.{1,3}/g).join(".")

console.log('New Number',newNumber);

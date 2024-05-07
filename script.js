'use strict';
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('James', 1991);
console.log(jonas);
//1. New {} is created
//2. function is called, this={}
//3. {} licked to prototype
//4. function atomatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person.prototype.isPrototypeOf(jack));
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);

//Object.prototype (top of the prototype chain)

console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 6, 6, 5, 7, 9, 9, 8]; // new Array ====[]

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

*/
/*
const Car = function (speed, make) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerator = function () {
  console.log(`${this.make} going at ${(this.speed += 10)}km/h`);
};
Car.prototype.break = function () {
  console.log(`${this.make} going at ${(this.speed -= 5)}km/h`);
};

const car1 = new Car(120, 'BMW');
const car2 = new Car(95, 'Mercedezes');

car1.accelerator();
car1.accelerator();
car1.accelerator();
car1.break();
car1.break();
car2.accelerator();
car2.accelerator();
car2.accelerator();
car2.break();
car2.break();
*/

//class expression
// const PersonCl = class{}
/*
//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullNameName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();

PersonCl.hey();
//1. classes are NOT hosited
//2. classes are first-class citizens
//3. classes are excuted in strict mode
const walter = new PersonCl('Walter Martins', 1965);
console.log(walter.fullName);
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account);
console.log(account.latest);
*/
/*
class Car {
  constructor(speed, make) {
    this.speed = speed;
    this.make = make;
  }
  accelerator = function () {
    console.log(`${this.make} going at ${(this.speed += 10)}km/h`);
  };
  break = function () {
    console.log(`${this.make} going at ${(this.speed -= 5)}km/h`);
  };

  get speedUS() {
    return `${this.speed / 1.6}mi/h`;
  }
  set speedUS(speedUS) {
    return `${speedUS * 1.6}km/h`;
  }
}

const newCar = new Car(120, 'Ford');
console.log(newCar.speedUS);
newCar.speedUS = 50;
console.log(newCar.speedUS);
console.log(newCar.accelerator);
console.log(newCar.break);
*/

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();

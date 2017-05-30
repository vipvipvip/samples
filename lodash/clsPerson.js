function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.fullName = memoize21(
    // calculation
    function(title) {
      console.log('working...');
      return title + ' ' + this.firstName + ' ' + this.lastName;
    },
    // dependencies
    function() {
      return [this.firstName, this.lastName];
    }.bind(this));
}

// create a new Person
var person = new Person('Jonathan', 'Lehman');

// first call to our memoized function does the work
console.log(person.fullName('Mr.'));
//=> working
//=> Mr. Jonathan Lehman

// successive calls
console.log(person.fullName('Mr.'));
//=> Mr. Jonathan Lehman

// work must be done if dependencies or arguments change

// change arguments
console.log(person.fullName('Mister'));
//=> work
//=> Mister Jonathan Lehman

// change deps
person.firstName = 'Jon';
console.log(person.fullName('Mr.'));
//=> work
//=> Mr. Jon Lehman

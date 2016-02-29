// Person constructor function
// when called with the "new" operator,
// a new Person object is created

function Person(firstName, lastName) {
  // the "new" operator sets the reference of
  // "this" to a new object
  this.firstName = firstName;
  this.lastName = lastName;
}

// this property referencing the function will
// be configured on person's prototype object,
// and will be inherited by students
Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};

// Student constructor function
// when called with the "new" operator,
// a new Student object is created

function Student(studentId, firstName, lastName) {
  // the "new" operator sets the reference of "this" to
  // a new object, the new object is then passed to the
  // Person constructor function through the use of call,
  // so the first name and last name properties can be set
  this._super.call(this, firstName, lastName);
  this.studentId = studentId;
}

// students will inherit from a new object
// which inherits from the parent
Student.prototype = Object.create(Person.prototype);

// set the constructor property back to the Student
// constructor function
Student.prototype.constructor = Student;

// "_super" is NOT part of ES5, its a convention
// defined by the developer
// set the "_super" to the Person constructor function
Student.prototype._super = Person;

// this will exist on the student's prototype object
Student.prototype.getStudentInfo = function() {
  return this.studentId + " " + this.lastName + ", " + this.firstName;
};

// instantiate a new Student object
var student = new Student(1, "Kanishka", "Sen");

// invoking function on parent prototype
// outputs "Bob Smith"
console.log(student.getFullName());

// invoking function on child prototype
// output "1 Smith, Bob"
console.log(student.getStudentInfo());
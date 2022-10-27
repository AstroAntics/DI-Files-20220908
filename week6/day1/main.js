let marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

const jsonifiedGame = JSON.stringify(marioGame);
const parsedGame = JSON.parse(jsonifiedGame);
console.log(jsonifiedGame);
console.log(parsedGame);

/***********************/

const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marko", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

// Using the filter() method, create a new array, containing the students that passed the course.
let passedStudents = students.filter((student) => student.isPassed === true);
console.log(passedStudents);

// Bonus: Chain the filter method with a forEach method, to congratulate the students with
// their name and course name (ie. “Good job Jenner, you passed the course in Information
// Technology”, “Good Job Marco you passed the course in Robotics” ect…)
let chainedStudents = students
  .filter((student) => student.isPassed === true)
  .forEach((student) => {
    console.log(
      `Good job, ${student.name}, you passed the course in ${student.course}`
    );
  });
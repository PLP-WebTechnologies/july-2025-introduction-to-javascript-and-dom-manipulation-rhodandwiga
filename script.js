// -------------------------------------------
// Part 1: JavaScript Basics (Variables, Conditionals)
// -------------------------------------------
let studentName = "Rhoda";
let studentGrade = 75;

if (studentGrade >= 50) {
  console.log(studentName + " has passed the exam.");
} else {
  console.log(studentName + " has failed the exam.");
}

// -------------------------------------------
// Part 2: Functions (Reusable Blocks)
// -------------------------------------------
function greetStudent(name) {
  return "Hello, " + name + "! 🎉 Welcome back to school.";
}

function calculateAverage(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return total / marks.length;
}

// Example usage in console
console.log("Average Mark: " + calculateAverage([80, 70, 90]));

// -------------------------------------------
// Part 3: Loops (Iteration)
// -------------------------------------------
let subjects = ["Mathematics", "English", "Science", "History"];

// For loop: Display subjects in console
for (let i = 0; i < subjects.length; i++) {
  console.log("Subject " + (i + 1) + ": " + subjects[i]);
}

// While loop: Countdown to school closing time
let hoursLeft = 3;
while (hoursLeft > 0) {
  console.log("Hours left before school closes: " + hoursLeft);
  hoursLeft--;
}

// -------------------------------------------
// Part 4: DOM Manipulation
// -------------------------------------------

// 1. Show greeting message when button is clicked
document.getElementById("greetBtn").addEventListener("click", function () {
  let message = greetStudent(studentName);
  document.getElementById("message").textContent = message;
});

// 2. Toggle highlight on teacher button
document.getElementById("toggleBtn").addEventListener("click", function () {
  this.classList.toggle("active");
});

// 3. Show list of subjects dynamically with animation
document.getElementById("listBtn").addEventListener("click", function () {
  let list = document.getElementById("subjectList");
  list.innerHTML = ""; // Clear before adding
  subjects.forEach((subject, index) => {
    let li = document.createElement("li");
    li.style.animationDelay = (index * 0.2) + "s"; // Stagger animation
    li.textContent = subject;
    list.appendChild(li);
  });
});

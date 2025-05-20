// Log a welcome message when the page loads
console.log("Welcome to AP CSP at [Your School Name]!");

// Add an event listener to the GitHub Classroom button
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".button");

  if (button) {
    button.addEventListener("click", function () {
      console.log("GitHub Classroom button clicked!");
    });
  }
});

⚙️ JavaScript (JS) How-To Guide
🧠 What is JavaScript?
JavaScript is a programming language used to make web pages interactive. It controls behaviors like button clicks, animations, popups, form validation, and more.

🧱 How to Add JavaScript
✅ Inline (not recommended)
html
Copy
Edit
<button onclick="alert('Hello!')">Click me</button>
✅ Internal (inside <script> tag)
html
Copy
Edit
<script>
  alert("Hello from JavaScript!");
</script>
✅ External (best practice)
HTML:

html
Copy
Edit
<script src="script.js"></script>
script.js:

js
Copy
Edit
alert("Hello from external file!");
🧠 Basic Syntax
js
Copy
Edit
// This is a comment

// Variable
let name = "Alex";

// Function
function greet() {
  alert("Hi " + name);
}

// Call function
greet();
🔤 Variables
js
Copy
Edit
let message = "Hello!";
const year = 2025;
var count = 5; // older style, avoid if possible
🔁 Conditionals
js
Copy
Edit
let age = 18;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("Too young.");
}
🔄 Loops
js
Copy
Edit
for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}
🧪 Functions
js
Copy
Edit
function add(a, b) {
  return a + b;
}

console.log(add(3, 4)); // 7
🎯 DOM Manipulation (HTML + JS)
HTML:

html
Copy
Edit
<button onclick="changeText()">Click me</button>
<p id="message">Original text</p>
JS:

js
Copy
Edit
function changeText() {
  document.getElementById("message").innerText = "Text changed!";
}
🎨 Styling with JS
js
Copy
Edit
document.body.style.backgroundColor = "lightblue";
✅ Example Web Page with JavaScript
html
Copy
Edit
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Demo</title>
  <style>
    body { font-family: sans-serif; }
    #output { margin-top: 10px; color: green; }
  </style>
</head>
<body>

  <h1>My JS Page</h1>
  <button onclick="sayHello()">Say Hello</button>
  <p id="output"></p>

  <script>
    function sayHello() {
      document.getElementById("output").innerText = "Hello from JavaScript!";
    }
  </script>

</body>
</html>
🧠 Tips for Beginners
Use console.log() to test your code.

Always check the browser console for errors.

Break code into small, reusable functions.

Use modern syntax: let, const, arrow functions (=>).

Practice makes perfect — start small and experiment!


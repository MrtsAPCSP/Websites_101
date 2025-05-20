🎨 CSS How-To Guide
🧠 What is CSS?
CSS (Cascading Style Sheets) is used to style and layout web pages — including colors, fonts, spacing, and responsive designs.

🧱 Ways to Add CSS
1. Inline CSS (not recommended for most use)
html
Copy
Edit
<p style="color: blue;">This is blue text.</p>
2. Internal CSS (inside <style> tag in <head>)
html
Copy
Edit
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
3. External CSS (best practice)
Create a separate file: styles.css

css
Copy
Edit
p {
  color: blue;
}
Then link it in your HTML:

html
Copy
Edit
<head>
  <link rel="stylesheet" href="styles.css">
</head>
🔤 Basic CSS Syntax
css
Copy
Edit
selector {
  property: value;
}
Example:

css
Copy
Edit
h1 {
  color: red;
  font-size: 32px;
}
🎯 Common CSS Selectors
* → All elements

h1, p, div → Specific tags

.classname → Class selector

#idname → ID selector

div p → Nested selector

🛠️ Useful Properties
Category	Property Examples
Text	color, font-size, text-align
Box Model	margin, padding, border
Layout	display, position, flex, grid
Background	background-color, background-image
Size	width, height, max-width
Others	transition, opacity, z-index

🎨 CSS Example
HTML:

html
Copy
Edit
<!DOCTYPE html>
<html>
<head>
  <title>CSS Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1 class="title">Welcome!</h1>
  <p>This is a styled paragraph.</p>
</body>
</html>
styles.css:

css
Copy
Edit
body {
  background-color: #f0f8ff;
  font-family: Arial, sans-serif;
}

.title {
  color: darkblue;
  text-align: center;
}

p {
  color: #333;
  font-size: 18px;
  line-height: 1.5;
}
💡 Best Practices
Use external CSS files for clean code.

Use classes (.class) for reusable styles.

Keep consistent naming conventions.

Use comments to explain sections:

css
Copy
Edit
/* This is a comment */
🔄 Bonus: CSS Box Model Diagram
Each HTML element can be thought of like a box:

lua
Copy
Edit
+---------------------------+
|         Margin            |
|  +---------------------+  |
|  |     Border          |  |
|  |  +---------------+  |  |
|  |  |   Padding     |  |  |
|  |  | +----------+  |  |  |
|  |  | | Content  |  |  |  |
|  |  | +----------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
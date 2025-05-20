## 🌐 HTML How-To Guide

### 🧠 What is HTML?

**HTML (HyperText Markup Language)** is the standard language for creating web pages. It structures the content on the web like text, images, links, and more.

---

### 🧱 Basic Structure of an HTML Document

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>
```

#### Breakdown:

* `<!DOCTYPE html>`: Tells the browser this is an HTML5 document.
* `<html>`: The root element of the page.
* `<head>`: Contains meta-information (like the title).
* `<title>`: Sets the title of the tab.
* `<body>`: The visible content on the page.

---

### 📌 Common HTML Tags

#### 📄 Headings

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h6>Smallest Heading</h6>
```

#### 📃 Paragraphs

```html
<p>This is a paragraph of text.</p>
```

#### 🔗 Links

```html
<a href="https://www.example.com">Visit Example</a>
```

#### 🖼️ Images

```html
<img src="image.jpg" alt="Description of image" width="300">
```

#### 📋 Lists

* **Unordered list:**

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

* **Ordered list:**

```html
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```

#### 🔲 Divisions and Spans

* `<div>`: Block-level container
* `<span>`: Inline container

```html
<div>This is a block section.</div>
<span>This is inline text.</span>
```

---

### 🧪 HTML Example Page

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Sample Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This page is built with HTML.</p>
    
    <img src="https://via.placeholder.com/150" alt="Sample Image">
    
    <h2>My Hobbies</h2>
    <ul>
        <li>Reading</li>
        <li>Gaming</li>
        <li>Traveling</li>
    </ul>
    
    <p>Check out <a href="https://www.wikipedia.org">Wikipedia</a> for more info!</p>
</body>
</html>
```

---

### 💡 Tips

* Use **semantic tags** like `<header>`, `<nav>`, `<main>`, and `<footer>` for better structure.
* Always **close your tags** (e.g., `</p>`, `</h1>`).
* Use **`alt` text** in images for accessibility.
* Save your file with `.html` extension (e.g., `index.html`).

---


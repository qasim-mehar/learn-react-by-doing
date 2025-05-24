<h1 align="center">⚛️ React<span style="color:#61DAFB">Basics</span> - Advice Generator</h1>
<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react">
  <img src="https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite">
  <img src="https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwind-css">
  <img src="https://img.shields.io/badge/API-Advice_Slip-success?style=for-the-badge">
</p>
<p align="center">
  <img src="https://img.shields.io/badge/First%20React%20App-✓-success?style=for-the-badge">
  <img src="https://img.shields.io/badge/Hooks-Used-9cf?style=for-the-badge&logo=react">
</p>

<p align="center">
  My debut React project focused on mastering fundamental concepts: props, useState, and useEffect!  My first React application that serves random wisdom with style! Built with modern React hooks and Tailwind CSS.
</p>

![App Screenshot](./src/assets/Screenshot%202025-05-22%20013451.png)

## 🎯 Learning Objectives

This project was specifically created to understand React's core concepts:

### 1. Component Props
```jsx
// Passing state down via props
<Message count={count} />

// Receiving props in child component
function Message(props) {
  return <div>{props.count} pieces generated</div>
}
```
### 2. useState Hook
```javascript

// Managing component state
const [count, setCount] = useState(0);
const [advice, setAdvice] = useState("");

// Updating state
setCount(c => c + 1);
setAdvice(data.slip.advice);
```
### 3. useEffect Hook
```javascript

// Running side effects on mount
useEffect(() => {
  getAdvice();
}, []); // Empty dependency array = run once
```
<br>
<p align="center"> Made with ❤️ by Qasim Ali. <br> <br> <a href="https://github.com/yourusername/wisdom-wizard"> <img src="https://img.shields.io/badge/View_on_GitHub-181717?style=for-the-badge&logo=github"> </a> </p> 
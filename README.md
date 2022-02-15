### #1.3 Software Requirements

1. browser : inter explorer X
2. VSCode

### #1.5 Why JS II

[threejs.org](https://threejs.org)  
[socket.io](https://socket.io) : 실시간 채팅  
[ml5js.org](https://ml5js.org) : 머신러닝

### #1.6 Online IDE

[replit.com](https://replit.com)

### #2.0 Your First JS Project

```html
<script src="app.js"></script>
```

### #2.1 Basic Data Types

```javascript
2 + 2; //4
2; //integer
1.5; //float
("hello"); //string
"hello " + "my name is nico"; //hello my name is nico
```

### #2.2 Variables

```javascript
const a = 5;
const myName = "nico"; //camel case
```

### #2.3 const and let

const : 상수 - 항상  
let : 변수 - 가끔

과거에는 var : 어떠한 규칙 X, 사용할 수 있지만 사용 X

### #2.4 Booleans

true, false

- 사용자가 로그인 했는가
- 비디오가 재생되고 있는가
- 웹사이트가 로딩되고 있는가

null : 아무것도 없음. 비어 있음  
undefined : 정의되지 않음. 값이 없음

### #2.5 Arrays

나열하는 방법
뭐든 넣어도 됨

```js
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek[4]);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);
```

### #2.6 Objects

```js
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false;
player.lastName = "potato";
player.points = player.points + 15;
console.log(player);
console.log(player.points);
```

### #2.7 Functions part One

### #2.8 Functions part Two

### #2.9 Recap

### #2.10 Recap II

### #2.11 Returns

### #2.12 Recap

### #2.13 Conditionals

### #2.14 Conditionals part Two

### #2.15 Conditionals part Three

### #2.16 Recap

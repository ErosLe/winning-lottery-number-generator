// //array = [1, 1, 2, 3, 3];
// // const occurancy = array.reduce((acc, item) => {
// //   return acc.includes(item) ? acc : [...acc, item];
// // }, []);
// //occurancy;
// // let users = [
// //   { id: 1, name: "Luca", age: 15 },
// //   { id: 1, name: "Luc", age: 19 },
// //   {
// //     id: 1,
// //     name: "Luccika",
// //     age: 10,
// //   },
// // ];
// // const result = (users, name) => {
// //   const user = users.find((user) => user.name === name);
// //   return Boolean(user);
// // };

// // users
// //   //.sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
// //   .sort((user1, user2) => user2.age - user1.age)
// //   .map((user) => user.name);
// // console.log(result);
// // console.log(foo);
// // var foo = 2;
// // foo;

// // const uniqueArray = (arr) => [...new Set(arr)];
// // arra = [1, 1, 2, 3, 3, 3];
// // const selected = uniqueArray(arra);
// // selected;

// // const range = (start, end) =>
// //   [...Array(end - start).keys()].map((el) => el + start);

// // const shuffleItems = (items) =>
// //   items
// //     .map((item) => ({ sort: Math.random(), value: item }))
// //     .sort((item1, item2) => item1.sort - item2.sort)
// //     .map((a) => a.value);
// // shuffleItems([1, 2, 3]);
// // //-------------------------------------------
// // const debounce = (func, timeout = 300) => {
// //   let timer;
// //   return (...args) => {
// //     console.log("inner fn", args);
// //     clearTimeout(timer);
// //     timer = setTimeout(() => {
// //       func.apply(this, args);
// //     }, timeout);
// //   };
// // };
// // const saveInput = (name) => {
// //   console.log("saveInput", name);
// // };
// // const processChange = debounce(saveInput, 2000);
// // processChange("foo");
// // processChange("foo");
// // processChange("foo");
// // processChange("foo");
// // let users = [
// //   { id: 1, name: "Luca", age: 15 },
// //   { id: 1, name: "Luc", age: 19 },
// //   {
// //     id: 1,
// //     name: "Luccika",
// //     age: 10,
// //   },
// // ];
// // const bool = (users, name) => {
// //   const index = users.findIndex((user) => user.name === name);
// //   return index > 0;
// // };
// // bool(users, "Luc");
// // const minVal = Math.min(...array);
// // minVal;
// // const nrOfMin = array.filter((el) => el === minVal);
// // console.log(nrOfMin.length);
// const books = [
//   { name: "Harry Potter", author: "Joanne Rowling" },
//   { name: "Warcross", author: "Marie Lu" },
//   { name: "THe Hunger Games", author: "Suzanne Collins" },
// ];
// const bookAuthors = books.map((it) => (it = it.author.split(" ")[1]));
// sortedBookAuthors = bookAuthors.sort((a, b) => b - a);
// //sortedBookAuthors = bookAuthors.sort();
// bookAuthors;
// sortedBookAuthors;

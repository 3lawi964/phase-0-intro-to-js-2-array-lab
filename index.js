// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const destructivelyAppendCat = (name) => {
  cats.push(name);
};
const destructivelyPrependCat = (name) => {
  cats.unshift(name);
};
const destructivelyRemoveLastCat = () => {
  cats.pop();
};
const destructivelyRemoveFirstCat = () => {
  cats.shift();
};
const appendCat = (name) => {
  const arr = [...cats];
  arr.push(name);
  return arr;
};
const prependCat = (name) => {
  const arr = [...cats];
  arr.unshift(name);
  return arr;
};
const removeLastCat = () => {
  const arr = [...cats];
  arr.pop();
  return arr;
};
const removeFirstCat = () => {
  const arr = [...cats];
  arr.shift();
  return arr;
};

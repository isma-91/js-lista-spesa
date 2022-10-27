const arrListToBuy = [
  "pane",
  "pesce",
  "carne",
  "prosciutto",
  "formaggio",
  "latte",
  "salmone",
  "verdura",
];
const eleList = document.querySelector(".list");

let items = 0;
while (items < arrListToBuy.length) {
  const eleItem = document.createElement("li");
  eleItem.innerHTML += `${arrListToBuy[items]}`;
  eleList.append(eleItem);
  items++;
}

// for (let i = 0; i < arrListToBuy.length; i++) {
//   // eleList.innerHTML += `<li>${arrListToBuy[i]}</li>`;
//   const eleItem = document.createElement("li");
//   eleItem.innerHTML += `${arrListToBuy[i]}`;
//   eleList.append(eleItem);
// }

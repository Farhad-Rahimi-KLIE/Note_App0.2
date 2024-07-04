let Submit = document.querySelector(".submit");
let Title = document.getElementById("title");
let desc = document.getElementById("description");
let noteElem = document.querySelector(".notes");
let notes = JSON.parse(localStorage.getItem("itemjson"));
// if (notes) {
//   notes.forEach((element) => {
//     addNote(element);
//   });
// }
Submit.addEventListener("click", (e) => {
  e.preventDefault();
  addNote();
});

function addNote(obj) {
  let titleVal = Title.value;
  let descVal = desc.value;
  if (obj) {
    titleVal = obj.Title;
    descVal = obj.desc;
  }
  let card = document.createElement("div");
  card.classList.add("card");
  if (titleVal) {
    card.innerHTML = `
        <h3>${titleVal}</h3>
        <p>${descVal}</p>
        <button class="del">Delete</button>
        `;
    noteElem.appendChild(card);
    updatels();
  }
//   let Pak = card.querySelector(".del");
//   Pak.addEventListener("click", () => {
//     card.remove();
//   });
}
function updatels() {
  let card = document.querySelectorAll(".card");
  let arr = [];
  card.forEach((element) => {
    arr.push({
      Title: element.children[0].innerText,
      desc: element.children[1].innerText,
    });
  });
  localStorage.setItem("itemjson", JSON.stringify(arr));
}

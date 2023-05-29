let user = document.getElementById("name");
let avatar = document.getElementById("link");
let comment = document.querySelector(".comment");
let chat = document.querySelector(".chat");

function addNewMessage(e) {
  console.log("work");
  e.preventDefault();
  let newUser =
    user.value.charAt(0).toUpperCase() + user.value.slice(1).toLowerCase();
  chat.innerHTML = `<div class="container">
    <img src="${avatar.value}" alt="avatar" class="avatar">
    <p class="name">${newUser}</p>
    <p class="comment">${comment.value.replace(/(xxx|viagra)/gi, "***")}</p>
    </div>`;
}
let button = document.querySelector(".button");
button.addEventListener("click", addNewMessage);
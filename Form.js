const user = document.getElementById("name");
const avatar = document.getElementById("link");
const comment = document.querySelector(".comment");
const chat = document.querySelector(".chat");


function addNewMessage(e) {
  e.preventDefault();
  const formData = new FormData(form2);
  const name = formData.get('name');
    let url = formData.get('url');
  let newUser =
    user.value.charAt(0).toUpperCase() + user.value.slice(1).toLowerCase();
  chat.innerHTML = `<div class="container">
    <img src="${avatar.value}" alt="avatar" class="avatar">
    <p class="name">${newUser}</p>
    <p class="comment">${comment.value.replace(/(xxx|viagra)/gi, "***")}</p>
    </div>`;
}

const getDate = () => {
let data = new Date;
  let date = date.getFullYear();

  return date;
}

console.log(getDate);

let button = document.querySelector(".button");
button.addEventListener("click", addNewMessage, getDate);
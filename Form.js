const user = document.getElementById("name");
const avatar = document.getElementById("link");
const comment = document.querySelector(".comment");
const chat = document.querySelector(".chat");
const newName = document.querySelector(".username");


const getDate = () => {
  let data = new Date();
  let date = `${data.toLocaleDateString()} ${data.toLocaleTimeString()}`;
};

const getNewName = () => {
  let checkbox = document.querySelector('input[name="showName"]:checked').value;
  if ((checkbox == "Yes") && (user != "")) {
    let newUser =
    user.value.charAt(0).toUpperCase() + user.value.slice(1).toLowerCase();
  }
  else if (checkbox == "No") {
      newName.textContent = "Username";
  };
};

const getNewImage = () => {
  let img = [ "assets/1.png" , "assets//2.png" , "assets/3.png" , "assets/4.png" , "assets/5.png" , "assets/6.png"
];
let newImg = Math.round(Math.random() *  img.length);
  if (yourFoto.value != "") {
document.querySelector(".photo").src = photo;
  }
  else {
    document.querySelector(".photo").src = img[newImg];
  };
};

function addNewMessage(e) {
  getDate();
  getNewName ();
  getNewImage ();
  e.preventDefault();

  let data = new Date();
  let date = data.getDate();
  let newUser =
    user.value.charAt(0).toUpperCase() + user.value.slice(1).toLowerCase();

  chat.innerHTML = `<div class="container">
    <p class="date">${data}</p>
    <img src="${avatar.value}" alt="avatar" class="avatar">
    <p class="name">${newUser}</p>
    <p class="comment">${comment.value.replace(/(xxx|viagra)/gi, "***")}</p>
    </div>`;
}

let button = document.querySelector(".button");
button.addEventListener("click", addNewMessage);
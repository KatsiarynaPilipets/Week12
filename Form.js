let user = document.getElementsById("name");
let avatar = document.getElementsById("link");
let comment = document.querySelector(".comment");
let chat = document.querySelector(".chat");

user.addEventListener("input", function() {
    capitalize(this);
});

function capitalize(user) {
    user.value = user.value.replace(/(^|\s)\s/g, function (a) {
        return a.toUpperCase();
    });
}

function addNewMessage() {
    chat.innerHTML = `<div class="container">
    <img src="${avatar.value}" alt="avatar" class="avatar">
    <p class="name">${user.value}</p>
    <p class="comment">${comment.value.replace(/(xxx|viagra)/gi,"***")}</p>
    </div>`;
}

button.addEventListener("click", addNewMessage);
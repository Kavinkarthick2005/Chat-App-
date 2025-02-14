const socket = io();
const messageInput = document.getElementById("message");
const messagesList = document.getElementById("messages");

function sendMessage() {
    const message = messageInput.value;
    socket.emit("message", message);
    messageInput.value = "";
}

socket.on("message", (msg) => {
    const li = document.createElement("li");
    li.innerText = msg;
    messagesList.appendChild(li);
});

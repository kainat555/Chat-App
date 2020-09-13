send = () => {
    let text = document.getElementById("text");
    // console.log(text.value);
    let chat = document.getElementById("chat");
    let createPara = document.createElement("p");
    let chatText = document.createTextNode(text.value);
    // console.log(chatText);
    chat.appendChild(createPara);
    chat.appendChild(chatText);
}
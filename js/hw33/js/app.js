const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
let dialogEnded = false;
document.getElementById("send").addEventListener("click", sendMessage);

function getRandomResponse() {
    const index = Math.floor(Math.random() * answers.length);
    return answers[index];
}

function simulateTyping() {
    return new Promise(resolve => {
        const typingTime = Math.floor(Math.random() * 10) * 1000;
        setTimeout(resolve, typingTime);
    });
}

function endDialogRandomly() {
    const random = Math.random();
    if (random < 0.2) {
        endChat();
    } else {
        resetTimeout();
    }
}

async function receiveMessage(userMessage) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const message = `<div class="message-container"><p class="user-message"><strong>Вы (${time}):</strong> ${userMessage}</p></div>`;
    chatBox.innerHTML += message;
    chatBox.scrollTop = chatBox.scrollHeight;

    if (userMessage.toLowerCase() === "my watch has ended") {
        endChat();
        return;
    }

    const response = getRandomResponse();
    await simulateTyping();

    if (!dialogEnded) {
        const responseTime = new Date();
        const responseTimeString = responseTime.toLocaleTimeString();
        const browserMessage = `<div class="message-container"><p class="browser-message"><strong>Браузер (${responseTimeString}):</strong> ${response}</p></div>`;
        chatBox.innerHTML += browserMessage;
        chatBox.scrollTop = chatBox.scrollHeight;

        endDialogRandomly();
    }
}

function endChat() {
    chatBox.innerHTML += "<p>Диалог завершен. Спасибо за общение!</p>";
    messageInput.disabled = true;
    dialogEnded = true;
}

async function sendMessage() {
    const userMessage = messageInput.value.trim();
    if (userMessage === "") return;

    messageInput.value = "";
    await receiveMessage(userMessage);
}

messageInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

let timeout;
function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        if (!dialogEnded) {
            endChat();
        }
    }, 30000);
}

messageInput.addEventListener("input", resetTimeout);

resetTimeout();
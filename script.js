document.getElementById("send-btn").addEventListener("click", () => {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message) {
    addMessage("user", message);
    input.value = "";

    // Simulación de respuesta
    addThinking();
    setTimeout(() => {
      removeThinking();
      addMessage("bot", "Esta es una respuesta simulada.");
    }, 1500);
  }
});

function addMessage(sender, text) {
  const chatArea = document.getElementById("chat-area");
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
  msgDiv.textContent = text;
  chatArea.appendChild(msgDiv);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function addThinking() {
  const chatArea = document.getElementById("chat-area");
  const thinkingDiv = document.createElement("div");
  thinkingDiv.classList.add("message", "bot-message");
  thinkingDiv.setAttribute("id", "thinking");
  thinkingDiv.textContent = "Pensando...";
  chatArea.appendChild(thinkingDiv);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function removeThinking() {
  const thinkingDiv = document.getElementById("thinking");
  if (thinkingDiv) {
    thinkingDiv.remove();
  }
}

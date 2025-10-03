document.getElementById("send-btn").addEventListener("click", () => {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message) {
    addMessage("user", message);
    input.value = "";

    // Simulación de respuesta
    setTimeout(() => {
      addMessage("bot", "Pensando...");
      setTimeout(() => {
        document.querySelector(".bot-message:last-child").textContent = "Esta es una respuesta simulada.";
      }, 1500);
    }, 800);
  }
});

function addMessage(sender, text) {
  const chatWindow = document.getElementById("chat-window");
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
  msgDiv.textContent = text;
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

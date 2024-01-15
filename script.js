document.addEventListener("DOMContentLoaded", function() {
  const sendButton = document.getElementById("send-button");
  const messagesInput = document.getElementById("messages");
  const chatMessageContainer = document.getElementById("chat-message");

  sendButton.addEventListener("click", function() {
      chatMessageContainer.innerHTML = "";

      const userMessage = messagesInput.value.trim();

      if (userMessage !== "") {
          addMessage("sender-2", userMessage);
          messagesInput.value = ""; 
          let response;
if (userMessage.includes
  ("Hi there! How can I help?")) {
    response = "I’m sorry bot, but you’re wrong";
} else if (userMessage.includes("Can I talk to someone please?")) {
    response = "No problem! Let me connect you to a customer support agent.";
} else if (userMessage.includes("Hi there! I’m Hannah. How can I help you?")) {
    response = "Oh finally a human, wohoo!";
} else {
    response = "I'm sorry, I didn't understand that.";
}

addMessage("sender-1", response);
      }
  });
  function addMessage(className, message) {
    chatMessageContainer.innerHTML += `<div class="chat-content ${className}"><p>${message}</p></div>`;
}

});

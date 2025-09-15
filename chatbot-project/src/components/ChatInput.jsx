import { useState } from "react";
import { Chatbot } from "supersimpledev";
import LoadingSpinner from "../assets/loading-spinner.gif";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === "") {
      return;
    }

    setIsLoading(true);

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    setInputText("");

    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={LoadingSpinner} className="loading-image" />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setIsLoading(false);
  }

  function enterKeyFn(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  function clearMessages() {
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={enterKeyFn}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
      <button onClick={clearMessages}>Clear</button>
    </div>
  );
}

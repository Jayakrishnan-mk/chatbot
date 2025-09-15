import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/lebloom.png";
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  console.log("ussssss", UserProfileImage);
  return (
    <div
      className={
        sender === "robot" ? "chat-message-robot" : "chat-message-user"
      }
    >
      {sender === "robot" && (
        <img className="chat-image" src={RobotProfileImage} />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img className="chat-image" src={UserProfileImage} />
      )}
    </div>
  );
}

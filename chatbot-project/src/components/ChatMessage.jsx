import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/lebloom.png";
import dayjs from "dayjs";
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  const time = dayjs().valueOf();
  return (
    <div
      className={
        sender === "robot" ? "chat-message-robot" : "chat-message-user"
      }
    >
      {sender === "robot" && (
        <img className="chat-image" src={RobotProfileImage} />
      )}
      <div className="chat-message-text">
        {message} <br />
        <p className="chat-time">{dayjs(time).format("h.mma")}</p>
      </div>
      {sender === "user" && (
        <img className="chat-image" src={UserProfileImage} />
      )}
    </div>
  );
}

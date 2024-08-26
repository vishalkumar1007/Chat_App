import "./Home.css";
import GetMessagePreview from "../../component/GetMessagePreview/GetMessagePreview";
import SendMessagePreview from "../../component/SendMessagePreview/SendMessagePreview";
import { useEffect, useState } from "react";
import { socket } from "../../socket";

const Home = () => {
  const [userInputData, setUserInputData] = useState("");
  const [sendData, setSendData] = useState("");
  const [getData, setGetData] = useState("");
  const [showMessages, setShowMessages] = useState([]);


  useEffect(() => {
    if (sendData) {
      const format = {
        res:'user',
        message:sendData
      }
      setShowMessages((prevMessages) => [...prevMessages, format]);
    }
  }, [sendData]);

  useEffect(() => {
    if (getData) {
      const format = {
        res:'server',
        message:getData
      }
      setShowMessages((prevMessages) => [...prevMessages, format]);
    }
  }, [getData]);


  const sendMessage = () => {
    if (userInputData !== "") {
      console.log("try to send msg : ", userInputData);
      setSendData(userInputData);
      // .............
      socket.emit("user_message", userInputData);
      socket.on("server_message", (server_msg) => {
        console.log("conformed msg : ", server_msg);
        setGetData(server_msg);
      });
      // .............
      setUserInputData('');

    } else {
      alert("not allow to send empty message");
    }
  };

  return (
    <div className="Home_main">
      <div className="Home_main_container">
        <div className="Home_main_container_arrange_width">
          <div className="Home_main_container_message_data">
            {/* Render sendMessages */}
            {showMessages.map((data, index) => (

              data.res==='user'?
                <SendMessagePreview key={index} userSendMessage={data.message} />
              :
                <GetMessagePreview key={index} userGetMessage={data.message} />
            ))}
          </div>
          <div className="Home_main_container_message_send">
            <input
              type="text"
              placeholder="Enter your message"
              onChange={(data) => {
                setUserInputData(data.target.value);
              }}
              value={userInputData}
              onKeyDown={(e)=>{if (e.key==="Enter") {
                sendMessage();
              }}}
            />
            <button
              onClick={() => {
                sendMessage();
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

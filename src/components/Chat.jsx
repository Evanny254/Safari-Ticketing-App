
import { useState, useEffect } from 'react';

const Chat = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/messages')
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error('Error fetching messages:', error));
  }, []);

  const sendMessage = () => {
    if (message.trim() !== '') {
      fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: message }),
      })
        .then((response) => response.json())
        .then((data) => setMessages([...messages, data]))
        .catch((error) => console.error('Error sending message:', error));

      setMessage('');
    }
  };

  return (
    <div>
      <button onClick={() => setShowChat(!showChat)}>
        {showChat ? 'Hide Chat' : 'Show Chat'}
      </button>
      {showChat && (
        <div>
          <ul>
            {messages.map((msg) => (
              <li key={msg.id}>{msg.text}</li>
            ))}
          </ul>
          <input value={message} onChange={(e) => setMessage(e.target.value)} />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default Chat;

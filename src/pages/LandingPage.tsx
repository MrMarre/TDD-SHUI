import { useState } from 'react';
import './styling/landingPage.css';

interface messages {
  message: string;
  username: string;
}

const LandingPage = () => {
  const [username, setUsername] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [storage, setStorage] = useState<messages[]>([]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMessage = {
      message: message,
      username: username,
      date: new Date().toUTCString(),
    };
    storage.push(newMessage);

    localStorage.setItem('JodlPost', JSON.stringify(storage));
    setUsername('');
    setMessage('');
  };

  return (
    <div className="text-content">
      <form className="form" onSubmit={onSubmit}>
        <textarea
          id="textarea"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
          placeholder="Write your message here..."
        />
        <div className="usernameButton">
          <input
            type="text"
            className="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Användarnamn"
            required
          />
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LandingPage;

import { useEffect, useState } from 'react';
import './styling/landingPage.css';
import { useNavigate } from 'react-router-dom';

interface messages {
  message: string;
  username: string;
}

const LandingPage = () => {
  const [username, setUsername] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [storage, setStorage] = useState<messages[]>([]);

  useEffect(() => {
    const storedMessages = localStorage.getItem('JodlPost');
    if (storedMessages) {
      setStorage(JSON.parse(storedMessages));
    }
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMessage = {
      message: message,
      username: username,
      date: new Date().toUTCString(),
    };

    const updatedStorage = [...storage, newMessage];
    setStorage(updatedStorage);

    localStorage.setItem('JodlPost', JSON.stringify(updatedStorage));

    setUsername('');
    setMessage('');
  };

  const handleNavigate = useNavigate();

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
          <button
            onClick={() => handleNavigate('/flow')}
            type="submit"
            className="btn-submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LandingPage;

import './messageCard.css';
const MessageCard = () => {
  const allCards = JSON.parse(localStorage.getItem('JodlPost')) || [];
  return (
    <div className="card-container">
      {allCards.map((item: string, index) => (
        <div className="card" key={index}>
          <div className="dateMessage">
            <p className="date">{item.date}</p>
            <p className="message">{item.message}</p>
          </div>

          <h3 className="username">--- {item.username}</h3>
        </div>
      ))}
    </div>
  );
};

export default MessageCard;

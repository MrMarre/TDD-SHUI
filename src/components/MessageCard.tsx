import './messageCard.css';

const MessageCard = () => {
  const allCards = JSON.parse(localStorage.getItem('JodlPost')) || [];

  const reversedArray = allCards.reverse();

  if (reversedArray.length === 0) {
    return (
      <div className="card-container">
        <div className="card">No cards to be found :( </div>
      </div>
    );
  }

  return (
    <div className="card-container">
      {reversedArray.map((item: string, index) => (
        <div className="card" key={index}>
          <div className="dateMessage">
            <p className="date">{item.date}</p>
            <p className="message">{item.message}</p>
          </div>

          <h3 className="card-username">--- {item.username}</h3>
        </div>
      ))}
    </div>
  );
};

export default MessageCard;

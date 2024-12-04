import MessageCard from '../components/MessageCard';
import newPost from '../assets/newPost.svg';
import './styling/flowPage.css';
import { useNavigate } from 'react-router-dom';

const FlowPage = () => {
  const handleNavigate = useNavigate();

  return (
    <div className="flowPage-container">
      <MessageCard />
      <img
        src={newPost}
        onClick={() => handleNavigate('/')}
        className="newPost-img"
        alt=""
      />
    </div>
  );
};

export default FlowPage;

import MessageCard from '../components/MessageCard';
import newPost from '../assets/newPost.svg';
import './styling/flowPage.css';
import { useNavigate } from 'react-router-dom';

const FlowPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="flowPage-container">
      <MessageCard />
      <img
        src={newPost}
        onClick={handleNavigate}
        className="newPost-img"
        alt="route-logo"
      />
    </div>
  );
};

export default FlowPage;

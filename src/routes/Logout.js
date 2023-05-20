import { useNavigate } from 'react-router-dom';
import { authService } from 'fbase';


const Logout = () => {
    const navigate = useNavigate();
    const onLogOutClick = () => {
      authService.signOut();
      navigate('/');
    };
    return (
      <> <button onClick={onLogOutClick}> 로 그 아 웃 </button></>
    ); };

export default Logout;

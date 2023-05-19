import { useNavigate } from 'react-router-dom';
import { authService } from 'fbase';
// 본인 확인 with 비밀번호
const MNprofile = () => {
    const navigate = useNavigate();
    const onLogOutClick = () => {
      authService.signOut();
      navigate('/');
    };
    return (
      <> <button onClick={onLogOutClick}> 로 그 아 웃 </button></>
    ); };

export default MNprofile;

// 재인증
import { EmailAuthProvider, getAuth, reauthenticateWithCredential } from 'firebase/auth';
import { authService, dbService } from 'fbase';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MNprofile from './MNprofile';

const reAuthentication = () => {
    const user = dbService.currentUser;
    const [inputword, setInputword] = useState("");
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputword === user.password) {
            navigate("/MNprofile");          
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    };

    const onChange = (event) => {
        const { target: {value} } = event;
        setInputword(value); };
    
      return (
        <div>
            <form onSubmit={onSubmit}> 본인인증을 위해 비밀번호를 입력하세요.
                <input name="inputword" value={inputword} type="password" placeholder="비밀번호" onChange={onChange} required />
                <input type="submit" value="개인정보 수정하기" required/>
            </form>
        </div>
  )
};

export default reAuthentication;
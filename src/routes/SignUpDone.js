import { useNavigate } from "react-router-dom";
import Home from "routes/Home";
const SignUpDone = () => {
    const navigate = useNavigate();
    const InputUserInfo = () => { navigate('/Home'); };

    return (
        <div>
            <h1> 회원가입이 완료되었습니다. </h1>
            <button onClick={InputUserInfo}>홈으로</button>
        </div>
    );
}

export default SignUpDone;

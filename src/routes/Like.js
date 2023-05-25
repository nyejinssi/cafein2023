// 찜한 상품
import { useNavigate } from 'react-router-dom';
import { authService } from 'fbase';

const Like = () => {
    const navigate = useNavigate();
    return (
      <div>
        찜한 상품 게시물
      </div>
    )
  };

export default Like;

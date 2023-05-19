// 장바구니 
import { useNavigate } from 'react-router-dom';
import { authService } from 'fbase';
// 작성가능한 리뷰
const ProductCart = () => {
    const navigate = useNavigate();
    const onLogOutClick = () => {
      authService.signOut();
      navigate('/');
    };
    return (
      <> <button onClick={onLogOutClick}> 로 그 아 웃 </button></>
    ); };

export default ProductCart;
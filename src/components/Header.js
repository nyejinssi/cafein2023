import {Link} from 'react-router-dom';
import MNprofile from 'routes/MNprofile';
import MNreview from 'routes/MNprofile';
import Cart from 'routes/ProductCart';

function Header(){
    return (
        <header>
            <h1> hello</h1>
            <nav>
                <ul>
                    <li><Link to={'/Cart'}>장바구니</Link></li>
                    <li><Link to={'/Like'}>찜한 상품</Link></li>
                    <li><Link to={'/MNreview'}>리뷰 관리</Link></li>
                    <li><Link to={'/MNprofile'}>계정 관리</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
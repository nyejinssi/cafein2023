import ReactDom from 'react-dom';

const popupDom = ({children}) => {
    const el = document.getElementById('popupDom');
    return ReactDom.createPortal(children, el);
};

export default PopupDom;

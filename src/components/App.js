import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom';
import AppRouter from 'components/Router';
import {authService} from '../fbase';
import { BrowserRouter } from 'react-router-dom';
import MyPageNavibar from './MyPageNavibar';
import MyPageRouter from './MyPageRouter';
import WebHeader from './WebHeader';
import NotFound from './NotFound';
import Main from './Main';
import LoginCheck from '../routes/LoginCheck';
function App() {
  const [init, setInit] = useState(false); // init = false
  
  return (
    // <BrowserRouter>
    //   <WebHeader />
    //   <Routes>
    //     <Route path="/" element={<Main/>} />
    //     <Route path="/Router/*" element={<AppRouter />} />
    //     {/* 상단에 위치하는 라우트들의규칙을 모두 확인, 일치하는 라우트가 없는 경우 처리 */}
    //     <Route path="*" element={<NotFound/>} />
    //   </Routes>
    // </BrowserRouter>
    <>
      <WebHeader />
      <LoginCheck />
    </>
  )
}

export default App;
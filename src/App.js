import logo from './logo.svg';
import './App.css';
import MainHome from './routers/MainHome';
import { lazy, useState } from 'react';
import ItemMent from './routers/ItemMent';
import { Routes, Route, Link, useNavigate, Outlet, json, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import dylogo from './img/로고.png'
import MainPage from './routers/MainPage';

const AddItem = lazy(() => import('./routers/AddItem.js'));

function App() {

  const [navBar, setNavBar] = useState([
    { text: '제품', link: '#' },
    { text: '제품등록', link: '/AddItem' },
    { text: '매장안내', link: '#' },
    { text: 'Dyson Live', link: '#' },
    { text: '고객지원', link: '#' },
    { text: '이벤트', link: '#' },
  ])


  return (
    <div >
      <header>
        <Navbar>
          <div className="hkh">
            <ul className="gg1">
              <li className="na1_1">
                <Nav.Link href={`/`}><img src={dylogo} alt="다이슨" width="80px" height="auto" className="mnm" /></Nav.Link>
              </li>
              {
                navBar.map((a, i) => (
                  <li key={i} className="na1_1">
                    {/* <Nav.Link onClick={() => Navigate(a.link)}>{a.text}</Nav.Link> */}
                    <Nav.Link href={a.link}>{a.text}</Nav.Link>
                  </li>
                ))}
            </ul>
            {/* <p className="buy"><a href="#">< src={''} width="35px" /></a></p> */}
          </div>
        </Navbar>

      </header>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/AddItem' element={<AddItem />} />
        <Route path='*' element={<div>404 Error 404 Error 404 Error 404 Error 404 Error</div>} />

      </Routes>

      <footer>
        <br />
        <p className="infor">Information</p>
        <hr className="jp" />
        <div className="foot_1">
          <ul className="fori vi">
            <li className="fori_1">
              <a href="#">배송 정보</a>
            </li>
            <li className="fori_1">
              <a href="#">채용</a>
            </li>
            <li className="fori_1">
              <a href="#">언론</a>
            </li>
            <li className="fori_1">
              <a href="#">웹사이트 사용 약관</a>
            </li>
          </ul>

          <ul className="fori2 vi">
            <li className="fori_1">
              <a href="#">AM04/5 리콜</a>
            </li>
            <li className="fori_1">
              <a href="#">다이슨 하이퍼디미엄™ 모터</a>
            </li>
            <li className="fori_1">
              <a href="#">다이슨 환경정책</a>
            </li>
            <li className="fori_1">
              <a href="#">다이슨 지속가능성</a>
            </li>
            <li className="fori_1">
              <a href="#">위조 다이슨 기술 판별 안내</a>
            </li>
          </ul>

          <ul className="fori3 vi">
            <li className="fori_1">
              <a href="#">개인정보방침</a>
            </li>
            <li className="fori_1">
              <a href="#">다이슨 글로벌 개인정보처리방침</a>
            </li>
            <li className="fori_1">
              <a href="#">웹사이트 판매 약관</a>
            </li>
            <li className="fori_1">
              <a href="#">쿠키 취급 방침</a>
            </li>
            <li className="fori_1">
              <a href="#">James Dyson 재단</a>
            </li>
          </ul>
        </div>
        <hr className="jp2" />
        <div className="foot">
          <div className="foo">
            다이슨코리아 유한회사 대표이사:한지훈 서울특별시 강남구 테헤란로 142, 아크플레이스 17층 06236
            <br />
            사업자등록번호 811-81-00675 통신판매번호 2017-서울강남-04029 사업자정보확인
            <br />
            고객센터: 080-300-4253(수신자 부담) /1588-4253 (운영시간: 월-금 오전 9시-오후 6시) 이메일: help@kr.dyson.com
            <br />
            호스팅 제공자 아마존웹서비스
          </div>
          <p className="foo2">
            <a href="#">
              <img src={require("./img/pp1.jpg")} alt="그림" className="fo1" width="20%" />
            </a>
            <a href="#">
              <img src={require("./img/pp2.jpg")} alt="그림" className="fo2" width="20%" />
            </a>
            <a href="#">
              <img src={require("./img/pp3.jpg")} alt="그림" className="fo3" width="20%" />
            </a>
          </p>
        </div>
      </footer>


    </div>

  );



}


export default App;

import logo from './logo.svg';
import './App.css';
import MainHome from './routers/MainHome';
import { useState } from 'react';
import ItemMent from './routers/ItemMent';
import HeaderNav from './layout/HearderNav';
import FooterNav from './layout/FooterNav';
import { Routes, Route, Link, useNavigate, Outlet, json } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [subMenu, setSubMenu] = useState([
    { text: '무료배송', link: '#' },
    { text: '무상 AS 제공', link: '#' },
    { text: '배터리 2년 보증', link: '#' },
    { text: '카드사 혜택', link: '#' },
  ])
  return (
    <div >
      <HeaderNav/>
      <MainHome />
      <ItemMent />
      <div className="pp">
        <div className="pp_1">
          <p className="pp_p1">
            {
              subMenu.map((a, i) => (
                <a  href={a.link} key={i}>
                  <img src={require(`./img/bot${1 + i}.jpg`)} alt="무료배송" width="30px" /><br /><br />
                  {a.text}
                </a>
              ))}
          </p>
        </div>
      </div>
      <FooterNav/>
    </div>
    
  );

}


export default App;

import './App.css';
import { lazy, useState } from 'react';
import { Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavLink, Navbar } from 'react-bootstrap';
import dylogo from './img/로고.png'
import MainPage from './routers/MainPage';
import FootList from './routers/FootList';



const AddItem = lazy(() => import('./routers/AddItem.js'));
const ServiceCenter = lazy(() => import('./routers/ServiceCenter.js'));


function App() {

  const [navBar] = useState([
    { text: '제품', link: '#' , subName: 'sub1'  },
    { text: '제품등록', link: '/AddItem', subName: 'sub1' },
    { text: '매장안내', link: '', subName: 'sub2' },
    { text: 'Dyson Live', link: '#', subName: 'sub1' },
    { text: '고객지원', link: '#' , subName: 'sub1' },
    { text: '이벤트', link: '#' , subName: 'sub1'},
  ])

  

  return (
    <div >
      <header>
        <Navbar>
          <div className="hkh">
            <ul className="gg1">
              <li className="na1_1">
                <Nav.Link href='/'><img src={dylogo} alt="다이슨" width="80px" height="auto" className="mnm" /></Nav.Link>
              </li>
              {
                navBar.map((a, i) => (
                  <li key={i} className="na1_1">
                    <Nav.Link href={a.link}>{a.text}</Nav.Link>
                    <ul className={a.subName}>
                      <li>
                        <ul>
                      <li className='sub2_1'><a href="#">다이슨 데모 스토어<hr/></a></li>
                      <li className='sub2_1'><Nav.Link href={'/Center'}>다이슨 서비스 센터<hr/></Nav.Link></li>
                      <li className='sub2_1'><a href="#">다이슨 백회점 매장<hr/></a></li>
                  
                      </ul>
                      </li>
                    </ul>
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
        <Route path='/Center' element={<ServiceCenter/>} />
        <Route path='*' element={<div>404 Error 404 Error 404 Error 404 Error 404 Error</div>} />
                
      </Routes>
      <FootList/>
    </div>

  );



}


export default App;

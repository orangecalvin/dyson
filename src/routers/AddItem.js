import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import addlogo from '../img/addlogo.png'
import MainPage from './MainPage';
import { useState } from 'react';


function AddItem() {
  const [subMenu, setSubMenu] = useState([
    { text: '무료배송', link: '#' },
    { text: '무상 AS 제공', link: '#' },
    { text: '배터리 2년 보증', link: '#' },
    { text: '카드사 혜택', link: '#' },
  ])
  return (
    <div className='main_body'>
      <div className='ad2'>
        <Container>
          <div className="title pt-4">제품 등록</div><br /><br />
          <div className="subtxt">
            제품 등록을 하시면 다이슨 케어 시스템을 통해 구매하신 다이슨<br />
            제품을 최적의 방법으로 관리하실 수 있도록 도와드립니다.
          </div>
        </Container>
      </div>

      <div className="text-center login4">
        <main className="form-signin w-100 m-auto">
          <form>
            <img className="mb-4" img src={addlogo} alt="" width="35%" height="100%" />
            <p className="mb-3 fw-normal">제품 등록을 하려면 회원가입을 해야합니다.
              회원가입 후 제품 등록을 하시면 온라인으로 등록된 제품 정보, 등록된 제품의 보증 일자 조회 등의 다양한 서비스 혜택을 받으실 수 있습니다</p>

            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">이메일 주소를 입력해주세요</label>
            </div>
            <br/>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">비밀번호를 입력해주세요</label>
            </div>

            <div className="checkbox mb-3">
            
            </div>
            <button className="w-100 btn btn-lg btn-dark" type="submit">로그인</button>
            <div className="mt-3 mb-3"><p>회원가입</p>  이메일  비밀번호 찾기</div>
          </form>
        </main>
      </div>
    
    

      <div className="pp">
      <div className="pp_1">
        <p className="pp_p1">
          {
            subMenu.map((a, i) => (
              <a href={a.link} key={i}>
                <img src={require(`../img/bot${1 + i}.jpg`)} alt="무료배송" width="30px" /><br /><br />
                {a.text}
              </a>
            ))}
        </p>
      </div>
    </div>
    </div>
  )
}

export default AddItem;
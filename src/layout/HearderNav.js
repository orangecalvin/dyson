import { useState } from "react"
import dylogo from '../img/로고.png'

  function HeaderNav(){
    
    const [navBar, setNavBar] = useState([
      { text: '제품', link: '#' },
      { text: '제품등록', link: '#' },
      { text: '매장안내', link: '#' },
      { text: 'Dyson Live', link: '#' },
      { text: '고객지원', link: '#' },
      { text: '이벤트', link: '#' },
    ])

    return(
    <header>
        <nav>
        <div className="hkh">
          <ul className="gg1">
            <li className="na1_1">
              <a href="#"><img src={dylogo} alt="다이슨" width="80px" height="auto" className="mnm" /></a>
            </li>
            {
              navBar.map((a, i) => (
                <li key={i} className="na1_1">
                  <a href={a.link}>{a.text}</a>
                </li>
              ))}
          </ul>
          {/* <p className="buy"><a href="#">< src={''} width="35px" /></a></p> */}
        </div>
      </nav>

    </header>
    )
  } 
  export default HeaderNav;
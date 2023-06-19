import { useState } from "react";
import MainHome from "./MainHome";
import ItemMent from "./ItemMent";


function MainPage() {
  const [subMenu, setSubMenu] = useState([
    { text: '무료배송', link: '#' },
    { text: '무상 AS 제공', link: '#' },
    { text: '배터리 2년 보증', link: '#' },
    { text: '카드사 혜택', link: '#' },
  ])
  return (<>
    <MainHome />
    <ItemMent />
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
    </div></>
  )
}
export default MainPage;
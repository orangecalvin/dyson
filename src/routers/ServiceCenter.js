import { useEffect, useState } from "react";
import ServiceAs from "../ServiceAs.json";



function Box({ center, i }) {
  return (
    <div className="soulebox">
      <div>
        <p style={{ fontWeight: 800 }}>{center.센터}</p>
        <hr />
        <p style={{ fontSize: '0.8em' }}>{center.주소}</p>
        <p style={{ fontSize: '0.8em' }}>{center.기타}</p>
        <a href={center.지도} target="_blank" rel="noopener noreferrer">
          지도 보기
        </a>
      </div>
      <hr />
    </div>
  );
}

function ServiceCenter() {
  const [asCeter, setAsCenter] = useState(ServiceAs); // 초기값을 빈 객체로 설정
  const [findCenter] = useState(["서울", "부산", "경기도"]);
  const [aspoint] = useState([
    {
      h4ment: "다이슨 제품 전문가의 컨설팅 서비스",
      pment: "다이슨 제품 전문가들을 통한 정확한 진단 및 수리를 제공해 드립니다"
    },
    {
      h4ment: "제품 체험존 운영",
      pment: "다양한 다이슨 제품을 편안하게 체험해보실 수 있습니다"
    }
  ]);

  return (<div className="ServiceCenter">
    <div className="scimg">
      <br /><br />
      <h2>다이슨 서비스센터</h2><br /><br />
      <p>전국의 서비스 센터에서 고객님을 위해 대기하고 있습니다.
        귀하의 소중한 제품을 만든 다이슨 전문가에게 점검 및 수리 받으세요.</p>
      <p>공식 서비스 센터를 이용하면 택배 수리
        서비스는 물론이며, 더욱 안전하고 정확한
        서비스를 받아보실 수 있습니다.</p>
    </div>
    <div className="coment_yellow">다이슨 서비스 센터에서는 안전하게 서비스를 받으실 수 있도룩 방역 수칙을 준수하고 있습니다.</div>
    <div className="selet_center">
      <h2>가까운 서비스 센터 찾기</h2>
      {findCenter.map((boxs, i) => (
        <button className="findcenter" key={i} onClick={() => window.location.hash = `#${boxs}`}>
          {boxs}
        </button>
      ))}
    </div>
    <div className="aspoint">
      <h4>전문 서비스 센터 혜택</h4>
      <br/><br/>
      {
        Array.from({ length: 2 }, (a, i) => (
          <div className="aspointbox" key={i}>
            <img className="asimg"src={require(`../img/asimg${i + 1}.jpg`)} alt="다이슨" />
            <br/><br/>
            <h5>{aspoint[i].h4ment}</h5>
            <br/>
            <p>{aspoint[i].pment}</p>
          </div>
        ))
      }
    </div>

    <div className="boxs">
      <div id="서울" className="airbox"></div>
      <h2>{findCenter[0]}</h2>
      
      {
        asCeter["서울"]?.map((center, i) => (<Box center={center} />))
      }
    </div>   <hr />
    <div className="boxs">
    <div id="경기도" className="airbox"></div>
      <h2>경기도</h2>
      {
        asCeter["경기도"]?.map((center, i) => (<Box center={center} />))
      }
    </div>   <hr />
    <div className="boxs">
    <div id="부산" className="airbox"></div>
      <h2 >부산</h2>
      {
        asCeter["부산"]?.map((center, i) => (<Box center={center} />))
      }
    </div>
  </div>
  );

}
export default ServiceCenter;

import { useEffect, useState } from "react";
import dysonData from '../dysonData.json';

function ItemMent() {
  const [dysonItem, setItemData] = useState(null);

  useEffect(() => {
    setItemData(dysonData);
  }, []);

  if (!dysonItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ma">
      <div className="ma_1">
    
          {dysonItem.map((props, i) => (
            <Card key={i} props={props} id={`t${i + 1}`} />
          ))}
        </div>
      </div>
  
  );
}

function Card({props, id}) {
  return (
    <div className="brp">
    <input id={id} type="checkbox" />
    <div id="wrap">

      <label className="right" htmlFor={id} onClick="">
        <div className="df">
          <img src={require(`../${props.dyimg}`)} alt="다이슨" className="pk" width="100%" />
        </div>
      </label>
      <div id="con">
        <img src={require(`../${props.imgment}`)} alt="다이슨" className="pk_1" width="100%" />
        <p className="ka">{props.name}</p>
        <p className="ka2">{props.ment}</p>
        <p className="kabot"><a href="#">구매하기</a></p>
        <p className="kabot2"><a href="#">더알아보기</a></p>
      </div>
    </div>
    </div>
  );
}

export default ItemMent;

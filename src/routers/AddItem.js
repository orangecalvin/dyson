import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

function AddItem() {
  return(
    <div className='container add_bg'>
    <div className="title pt-4">제품 등록</div>
    <div className="subtxt">
            제품 등록을 하시면 다이슨 케어 시스템을 통해 구매하신 다이슨<br/>
            제품을 최적의 방법으로 관리하실 수 있도록 도와드립니다.
        </div>
    </div>
  )
}

export default AddItem;
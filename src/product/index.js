import {useParams} from "react-router-dom";
import axios from "axios";
import { useEffect , useState} from 'react';
import './index.css'

function ProductPage() { 
    const {id} = useParams(); //useParams: id 값(파라미터)을  받게 해줌, {} 는 es6의 구조분해 할당(객채 말고 숫자로 받기위해)
    const [product, setProduct] = useState(null);
    useEffect(function(){    //왜 state사용할까?
      axios.get(`https://209cf61c-19df-4cd7-8cdc-73a2077e3cd4.mock.pstmn.io/products/${id}`)
      .then(function(result){
        setProduct(result.data);
      }).catch(function(error) {
        console.error(error);
      })
    },[]);

    if(product === null){
      return <h1>상품 정보를 받고 있습니다...</h1>
    } // axios가 비동기 처리이기에, 정보를 받기 전 product가 null상태에서 product 정보를 받아오는 걸 방지 

    return ( 
      <div>
        <div id = "image-box">
          <img src = {"/" + product.imageUrl} />
          </div>
          <div id = "profile-box">
            <img src = "/images/icons/avatar.png"/> {/*react에서 /public 경로는 생략하게해줌*/} 
            <span>{product.seller}</span>
        </div>
        <div id = "contents-box">
          <div id = "name">{product.name}</div>
          <div id = "price">{product.price}</div>
          <div id = "createdAt">2020년 12월 8일</div>
          <div id = "description">{product.description}</div>
        </div>
      </div>

    );
  }
  
  export default ProductPage;
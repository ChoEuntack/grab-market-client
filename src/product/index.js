import {useParams} from "react-router-dom";

function ProductPage() { 
    const {id} = useParams(); //useParams: id 값을  받게 해줌, {} 는 es6의 구조분해 할당
    console.log(id);
    return <h1>상품 상세 페이지</h1>;
  }
  
  export default ProductPage;
import React from 'react';
import './index.css' //export가 없는 css 경우 from을 뺌 -> css 파일을 다 불러오게 됨 
import axios from "axios";

function MainPageComponent() {
    const [products, setProducts] = React.useState([]) // 상품정보는 배열이기에 기본값을 빈 배열[]로 넣음
    React.useEffect(function(){ //무한 데터링을 방지하기 위해 -> state업데이트 시 다시 레더링 되기때문
        axios.get("https://209cf61c-19df-4cd7-8cdc-73a2077e3cd4.mock.pstmn.io/products")
        .then(function(result){
            const products = result.data.products;
            setProducts(products); //정보를 받은 후의 업데이트 된 products를 가지고 재실행
        }).catch(function(error){
            console.log(error);
        });
    }, []);
    
    return ( // 복수 개의 태그를 리턴할 수 없음 => 여러 태그들을 리턴을 떄 무조건 하나의 태그(div) 같은걸로 감싸줘야 됌
    <div>
        <div id = 'header'>
        <div id = "header-area">
        <img src = 'images/icons/logo.png' />
        </div>
        </div>
        <div id = "body">
        <div id = 'banner'>
        <img src= "images/banners/banner1.png" />    
     </div>
        <h1>판매되는 상품들</h1>
        <div id = 'product-list'>  
        {products.map(function (product,index){
            return (
                <div className = 'product-card'>
                    <div>
                        <img className = 'product-img' src = {product.imageUrl} />
                    </div>
                    <div className = 'product-contents'>
                        <span className = 'product-name'>{product.name}</span> 
                        <span className = 'product-price'>{product.price}원</span>
                        <div className = 'product-seller'>
                            <img className = 'product-avatar' src = 'images/icons/avatar.png' />
                            <span>{product.seller}</span>
                            </div>
                        </div>
                    </div>
            );
        })}
        </div>         
    </div>
    <div id = "footer"></div>
</div>
    );
}

export default MainPageComponent;
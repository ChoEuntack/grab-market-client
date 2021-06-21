import 'antd/dist/antd.css'
import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route, Link , useHistory} from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import {Button} from "antd"; //antd에 들어가서 디자인마다 어떻게 사용하는지 자세히 볼것!
import {DownloadOutlined} from "@ant-design/icons"

function App() {
  const history = useHistory(); // Link말고 경로이동을 하는 방법
  return ( // 페이지를 넘어가도 header, footer는 공통으로구현 될 수 있게 옮김 -> app.ja에 product, upload 컴포먼트가 다 있으니깐 열로 옮긴 듯
    <div> 
       <div id = 'header'>
        <div id = "header-area">
          <Link to ="/"> {/* to ='/'는 메인, 기본으로 가겠다라는걸 의미 */}
        <img src = '/images/icons/logo.png'/>
        </Link>
        <Button size = "large"
        onClick = {function(){
          history.push('/upload') // upload 창으로 이돔 
        }}
        icon = {<DownloadOutlined />}>
          상품 업로드
        </Button>
        </div>
        </div>
        <div id = "body">
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/product/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
    <div id = "footer"></div>
    </div> 
  );
}

export default App;
